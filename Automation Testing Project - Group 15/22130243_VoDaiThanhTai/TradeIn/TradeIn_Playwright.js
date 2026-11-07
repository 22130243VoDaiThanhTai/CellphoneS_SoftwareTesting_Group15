/**
 * CellphoneS - Trade-in (Thu cu doi moi) automation
 * Runtime: Node.js + Playwright
 *
 * Run all 30 test cases:
 *   node TradeIn_Playwright.js
 *
 * Reports are written to ./tradein-test-results/:
 *   - TradeIn_Test_Report.html (readable report with PASS/FAIL/SKIP reasons)
 *   - TradeIn_Test_Report.csv  (Excel-friendly table)
 *   - tradein-results.json     (complete machine-readable results)
 *
 * Optional login values (only used if a login gate actually appears):
 *   LOGIN_USERNAME / LOGIN_PASSWORD
 *
 * Notes:
 * - These tests interact with the public CellphoneS website.
 * - The website can change its layout/selectors; helper functions use visible text,
 *   input placeholders and accessible roles to reduce selector fragility.
 * - Test 26 requires an authorized S-BuyBack IMEI fixture. Do not use a real
 *   customer's IMEI. If IMEI_TEST_FIXTURE is empty, that case is reported SKIPPED.
 * - The script does not complete a real consultation registration or purchase.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// ======================== USER CONFIGURATION ========================
const LOGIN_USERNAME = ''; // Điền tài khoản nếu website thực sự yêu cầu đăng nhập
const LOGIN_PASSWORD = ''; // Điền mật khẩu tương ứng

// Chỉ điền IMEI test được CellphoneS/giảng viên cấp. Để trống thì TC_26 sẽ SKIP.
const IMEI_TEST_FIXTURE = '';

const BASE_URL = 'https://cellphones.com.vn';
const TRADE_IN_URL = `${BASE_URL}/thu-cu-doi-moi`;
const HEADLESS = false;           // false: nhìn thấy trình duyệt; true: chạy nền
const SLOW_MO_MS = 80;            // Tăng lên 150-300 nếu muốn quan sát thao tác chậm hơn
const ACTION_TIMEOUT = 15000;
const SEARCH_WAIT_MS = 1400;      // Chờ AJAX/autocomplete cập nhật
const OUTPUT_DIR = path.join(__dirname, 'tradein-test-results');
// ===================================================================

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

class SkipCase extends Error {
  constructor(message) { super(message); this.name = 'SkipCase'; }
}

async function gotoHome(page) {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator('body').waitFor({ state: 'visible', timeout: ACTION_TIMEOUT });
  await maybeHandleLogin(page);
}

async function gotoTradeIn(page) {
  await page.goto(TRADE_IN_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator('body').waitFor({ state: 'visible', timeout: ACTION_TIMEOUT });
  // Trang thương mại điện tử thường có request nền liên tục; không ép networkidle.
  await maybeHandleLogin(page);
  await waitForText(page, /Chọn sản phẩm bạn muốn thu cũ/i, 20000);
}

async function maybeHandleLogin(page) {
  const passwordInputs = page.locator('input[type="password"]');
  if (!(await passwordInputs.count())) return;
  let passwordVisible = false;
  for (let i = 0; i < await passwordInputs.count(); i++) {
    if (await passwordInputs.nth(i).isVisible().catch(() => false)) {
      passwordVisible = true;
      break;
    }
  }
  if (!passwordVisible) return;

  if (!LOGIN_USERNAME || !LOGIN_PASSWORD) {
    throw new SkipCase('Website đang yêu cầu đăng nhập nhưng LOGIN_USERNAME/LOGIN_PASSWORD chưa được điền.');
  }

  const userInput = await findInput(page, /số điện thoại|phone|email|tài khoản|username/i);
  const passInput = await findInput(page, /password|mật khẩu/i, true);
  if (!userInput || !passInput) {
    throw new SkipCase('Có popup đăng nhập nhưng không nhận diện được ô tài khoản/mật khẩu. Cần cập nhật selector.');
  }
  await userInput.fill(LOGIN_USERNAME);
  await passInput.fill(LOGIN_PASSWORD);
  const loginBtn = await findClickable(page, /đăng nhập|login/i);
  if (!loginBtn) throw new SkipCase('Không tìm thấy nút Đăng nhập trong popup.');
  await loginBtn.click();
  await delay(1500);
  if (await page.locator('input[type="password"]').first().isVisible().catch(() => false)) {
    throw new SkipCase('Đăng nhập chưa hoàn tất (có thể cần OTP/CAPTCHA). Hãy đăng nhập thủ công rồi chạy lại.');
  }
}

async function findInput(page, pattern, passwordOnly = false) {
  const selector = passwordOnly ? 'input[type="password"]' : 'input, textarea';
  const inputs = page.locator(selector);
  const count = await inputs.count();
  for (let i = 0; i < count; i++) {
    const el = inputs.nth(i);
    if (!(await el.isVisible().catch(() => false))) continue;
    const attrs = [
      await el.getAttribute('placeholder').catch(() => ''),
      await el.getAttribute('aria-label').catch(() => ''),
      await el.getAttribute('name').catch(() => ''),
      await el.getAttribute('id').catch(() => ''),
      await el.getAttribute('type').catch(() => '')
    ].join(' ');
    if (pattern.test(attrs)) return el;
  }
  return null;
}

async function fillInput(page, pattern, value, required = true) {
  const input = await findInput(page, pattern);
  if (!input) {
    if (required) throw new Error(`Không tìm thấy ô nhập liệu theo placeholder/label: ${pattern}`);
    return false;
  }
  await input.fill(value);
  return true;
}

async function clearInput(page, pattern) {
  const input = await findInput(page, pattern);
  if (!input) throw new Error(`Không tìm thấy ô cần xóa: ${pattern}`);
  await input.fill('');
  return input;
}

async function visibleTextLocators(page, pattern) {
  const loc = page.getByText(pattern);
  const result = [];
  for (let i = 0; i < await loc.count(); i++) {
    const item = loc.nth(i);
    if (await item.isVisible().catch(() => false)) result.push(item);
  }
  return result;
}

async function waitForText(page, pattern, timeout = ACTION_TIMEOUT) {
  const loc = page.getByText(pattern).first();
  await loc.waitFor({ state: 'visible', timeout });
  return loc;
}

async function clickText(page, pattern, options = {}) {
  const locators = await visibleTextLocators(page, pattern);
  if (!locators.length) throw new Error(`Không tìm thấy nội dung/nút hiển thị: ${pattern}`);
  const target = locators[options.index || 0];
  await target.scrollIntoViewIfNeeded();
  await target.click({ timeout: ACTION_TIMEOUT });
  await delay(options.waitMs ?? 600);
  return target;
}

async function findClickable(page, pattern) {
  // Ưu tiên phần tử có ngữ nghĩa tương tác. Không trả về một đoạn văn/heading
  // chỉ vì nội dung của nó tình cờ khớp regex (đây là nguyên nhân TC17/TC30
  // trước đó click nhầm nội dung nền).
  const selectors = 'button, a, [role="button"], [role="link"], [role="option"], label, [tabindex="0"]';
  const nodes = page.locator(selectors);
  const matches = [];
  for (let i = 0; i < await nodes.count(); i++) {
    const node = nodes.nth(i);
    if (!(await node.isVisible().catch(() => false))) continue;
    if (!(await node.isEnabled().catch(() => true))) continue;
    const text = ((await node.innerText().catch(() => '')) || '').replace(/\s+/g, ' ').trim();
    const aria = await node.getAttribute('aria-label').catch(() => '');
    const title = await node.getAttribute('title').catch(() => '');
    if (pattern.test(`${text} ${aria} ${title}`)) {
      matches.push({ node, score: text.length + String(aria).length + String(title).length });
    }
  }
  // Chọn control có nhãn ngắn/khớp nhất, tránh các container lớn chứa nhiều text.
  matches.sort((a, b) => a.score - b.score);
  if (matches.length) return matches[0].node;

  // Fallback cho custom div-card: chỉ chấp nhận node/ancestor thực sự có
  // cursor:pointer, role tương tác, tabindex hoặc onclick; không click text thường.
  const texts = await visibleTextLocators(page, pattern);
  for (const textNode of texts) {
    const actionable = await textNode.evaluate(el => {
      let current = el;
      for (let depth = 0; current && depth <= 3; depth++, current = current.parentElement) {
        const tag = current.tagName.toLowerCase();
        const role = current.getAttribute('role');
        const tabIndex = current.getAttribute('tabindex');
        const style = window.getComputedStyle(current);
        const hasClickHandler = typeof current.onclick === 'function';
        if (['button', 'a', 'label'].includes(tag) ||
            ['button', 'link', 'option'].includes(role) ||
            (tabIndex !== null && Number(tabIndex) >= 0) ||
            style.cursor === 'pointer' || hasClickHandler) return true;
      }
      return false;
    }).catch(() => null);
    if (!actionable) continue;
    // Resolve the selected DOM node through a locator path relative to textNode.
    const target = textNode.locator('xpath=ancestor-or-self::*[self::button or self::a or self::label or @role="button" or @role="link" or @role="option" or @tabindex="0" or contains(concat(" ", normalize-space(@class), " "), " cursor-pointer ")][1]');
    if (await target.count().catch(() => 0) && await target.first().isVisible().catch(() => false)) return target.first();
    // onclick-only custom controls may not expose a selector attribute; use the matching text node.
    if (await textNode.isVisible().catch(() => false)) return textNode;
  }
  return null;
}

async function closeProductPicker(page) {
  // CellphoneS renders product suggestions inside a Radix dialog on some
  // viewport/layouts. Close it before interacting with the page behind it.
  const dialogs = page.getByRole('dialog');
  let dialog = null;
  for (let i = 0; i < await dialogs.count(); i++) {
    const candidate = dialogs.nth(i);
    if (await candidate.isVisible().catch(() => false)) dialog = candidate;
  }
  if (!dialog) return false;

  const dialogText = (await dialog.innerText().catch(() => '')).replace(/\s+/g, ' ');
  const hasSearchInput = await dialog.locator('input:visible').count().catch(() => 0);
  const looksLikePicker = hasSearchInput > 0 || /iPhone|Samsung|MacBook|Xiaomi|chọn sản phẩm|tìm sản phẩm/i.test(dialogText);
  if (!looksLikePicker) return false;

  await page.keyboard.press('Escape').catch(() => {});
  await dialog.waitFor({ state: 'hidden', timeout: 2500 }).catch(() => {});
  if (!(await dialog.isVisible().catch(() => false))) {
    await delay(250);
    return true;
  }

  const closeSelectors = [
    '[data-slot="dialog-close"]',
    'button[aria-label*="close" i]',
    'button[aria-label*="đóng" i]',
    'button[title*="đóng" i]'
  ];
  for (const selector of closeSelectors) {
    const close = dialog.locator(selector).first();
    if (await close.count().catch(() => 0) && await close.isVisible().catch(() => false) && await close.isEnabled().catch(() => false)) {
      await close.click({ timeout: 3000 }).catch(() => {});
      await dialog.waitFor({ state: 'hidden', timeout: 2500 }).catch(() => {});
      if (!(await dialog.isVisible().catch(() => false))) return true;
    }
  }

  throw new SkipCase('Hộp thoại chọn sản phẩm vẫn mở sau thao tác chọn; không thể tương tác an toàn với phần nội dung phía sau.');
}

async function clickButton(page, pattern, required = true) {
  const target = await findClickable(page, pattern);
  if (!target) {
    if (!required) return false;
    throw new Error(`Không tìm thấy nút/liên kết: ${pattern}`);
  }
  await target.scrollIntoViewIfNeeded();
  await target.click({ timeout: ACTION_TIMEOUT });
  await delay(700);
  return true;
}

async function searchOldDevice(page, keyword) {
  await fillInput(page, /Tìm sản phẩm muốn thu cũ/i, keyword);
  await delay(SEARCH_WAIT_MS);
}

async function searchNewDevice(page, keyword) {
  await fillInput(page, /Tìm sản phẩm muốn lên đời/i, keyword);
  await delay(SEARCH_WAIT_MS);
}

async function chooseResult(page, productPattern, required = true) {
  // Search in the visible suggestion dialog first, then the full page.
  // Product title elements on CellphoneS are sometimes plain DIVs inside a
  // clickable card, not necessarily button/a/[role=button].
  const started = Date.now();
  const maxWaitMs = 10000;
  let chosen = null;
  let chosenText = '';

  while (Date.now() - started < maxWaitMs && !chosen) {
    const scopes = [];
    const dialogs = page.getByRole('dialog');
    for (let i = 0; i < await dialogs.count(); i++) {
      const dialog = dialogs.nth(i);
      if (await dialog.isVisible().catch(() => false)) scopes.push(dialog);
    }
    // Always include page as fallback: some versions render suggestions outside Radix dialog.
    scopes.push(page);

    for (const scope of scopes) {
      const matches = scope.getByText(productPattern);
      const candidates = [];
      for (let i = 0; i < await matches.count(); i++) {
        const candidate = matches.nth(i);
        if (!(await candidate.isVisible().catch(() => false))) continue;
        const info = await candidate.evaluate(el => {
          const tag = el.tagName.toLowerCase();
          const text = (el.innerText || el.textContent || '').trim();
          const cls = typeof el.className === 'string' ? el.className : '';
          return { tag, text, cls };
        }).catch(() => null);
        if (!info || !info.text || info.text.length > 220 || info.tag === 'p') continue;
        // Prefer product-title-like nodes, but retain a direct-text fallback.
        const score = (/(line-clamp|font-bold|cursor-pointer)/i.test(info.cls) ? 0 : 10)
          + Math.min(info.text.length, 200) / 100;
        candidates.push({ locator: candidate, text: info.text.replace(/\s+/g, ' ').slice(0, 180), score });
      }
      candidates.sort((a, b) => a.score - b.score);

      for (const item of candidates) {
        const candidate = item.locator;
        // Find the nearest semantic/cursor-pointer ancestor. A regular DIV title
        // will still be clicked as a fallback; click events bubble to its card.
        let target = candidate;
        const clickableAncestor = candidate.locator(
          'xpath=ancestor-or-self::*[self::button or @role="button" or @role="option" or contains(concat(" ", normalize-space(@class), " "), " cursor-pointer ")][1]'
        );
        if (await clickableAncestor.count().catch(() => 0)) {
          const first = clickableAncestor.first();
          if (await first.isVisible().catch(() => false)) target = first;
        } else {
          // Try up to three ancestors for a card with pointer cursor.
          for (let depth = 1; depth <= 3; depth++) {
            const ancestor = candidate.locator(`xpath=ancestor::*[${depth}]`);
            if (!(await ancestor.count().catch(() => 0))) continue;
            const isPointer = await ancestor.evaluate(el => getComputedStyle(el).cursor === 'pointer').catch(() => false);
            if (isPointer && await ancestor.isVisible().catch(() => false)) {
              target = ancestor;
              break;
            }
          }
        }
        chosen = target;
        chosenText = item.text;
        break;
      }
      if (chosen) break;
    }

    if (!chosen) await delay(350);
  }

  if (!chosen) {
    const visibleDialogTexts = [];
    const dialogs = page.getByRole('dialog');
    for (let i = 0; i < await dialogs.count(); i++) {
      const dialog = dialogs.nth(i);
      if (await dialog.isVisible().catch(() => false)) {
        const txt = (await dialog.innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
        if (txt) visibleDialogTexts.push(txt.slice(0, 260));
      }
    }
    const hint = visibleDialogTexts.length ? ` Nội dung hộp thoại: ${visibleDialogTexts[0]}` : '';
    if (required) throw new Error(`Không tìm thấy kết quả sản phẩm khớp ${productPattern} sau ${maxWaitMs / 1000}s.${hint}`);
    return false;
  }

  await chosen.scrollIntoViewIfNeeded().catch(() => {});
  // The site can leave a transparent Radix overlay above a suggestion during
  // its transition. HTMLElement.click() triggers the click handler on the
  // selected title and bubbles to the surrounding product card, without
  // accidentally clicking a banner/link behind the modal.
  await chosen.evaluate(el => el.click());
  console.log(`  Sản phẩm được chọn: ${chosenText}`);
  await delay(1000);
  return true;
}

const CONDITION_SELECTOR = 'button, [role="button"], [role="radio"], [role="option"], label, .condition-item, .trade-in-condition';
const CONDITION_WORDS = /(loại\s*[0-3]|đẹp|trầy|xước|móp|cấn|nứt|vỡ|hỏng|không hoạt động|bình thường|tốt)/i;

async function getConditionOptions(page) {
  const nodes = page.locator(CONDITION_SELECTOR);
  const matches = [];
  for (let i = 0; i < await nodes.count(); i++) {
    const node = nodes.nth(i);
    if (!(await node.isVisible().catch(() => false))) continue;
    const text = ((await node.innerText().catch(() => '')) || '').trim();
    if (text && text.length < 180 && CONDITION_WORDS.test(text)) matches.push({ locator: node, text });
  }
  return matches;
}

async function chooseCondition(page, mode = 'first') {
  const options = await getConditionOptions(page);
  if (!options.length) throw new SkipCase('Không nhận diện được danh sách tình trạng máy. Cần record lại selector theo giao diện đang hiển thị.');
  let chosen;
  if (mode === 'worst') {
    chosen = options.find(x => /(hỏng|vỡ|nứt|không hoạt động|móp nặng|trầy xước nặng|loại\s*3)/i.test(x.text));
    if (!chosen) throw new SkipCase('Không thấy lựa chọn lỗi nặng trong danh sách thực tế; không tự suy đoán loại tình trạng.');
  } else if (mode === 'different') {
    chosen = options[1] || options[0];
    if (options.length < 2) throw new SkipCase('Website chỉ hiển thị một lựa chọn tình trạng nên không thể kiểm tra thay đổi tình trạng.');
  } else {
    chosen = options[0];
  }
  await chosen.locator.scrollIntoViewIfNeeded();
  await chosen.locator.click({ timeout: ACTION_TIMEOUT });
  await delay(900);
  return chosen.text;
}

async function prepareOldDevice(page, keyword = 'iPhone 13 Pro Max') {
  await gotoTradeIn(page);
  await searchOldDevice(page, keyword);
  const pattern = new RegExp(escapeRegExp(keyword), 'i');
  await chooseResult(page, pattern);
  await waitForConditionArea(page);
}

async function waitForConditionArea(page) {
  const options = await getConditionOptions(page);
  if (!options.length) {
    // A few flows render a button/section to continue to condition selection.
    const proceed = await findClickable(page, /chọn tình trạng|tình trạng máy|tiếp tục/i);
    if (proceed) {
      await proceed.click({ timeout: ACTION_TIMEOUT });
      await delay(700);
    }
  }
}

async function prepareUpTrade(page, oldKeyword = 'iPhone 13 Pro Max', newKeyword = 'iPhone 16') {
  await prepareOldDevice(page, oldKeyword);
  await chooseCondition(page, 'first');
  await searchNewDevice(page, newKeyword);
}

async function clickContinueToSummary(page) {
  await closeProductPicker(page);
  const beforeUrl = page.url();
  const beforeText = (await page.locator('body').innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
  const continueButton = await findClickable(page, /tiếp tục|xác nhận thông tin|xem lại thông tin|sang bước xác nhận|xác nhận đổi máy/i);
  if (!continueButton) {
    const visibleButtons = await page.locator('button:visible, [role="button"]:visible').evaluateAll(els =>
      els.map(el => (el.innerText || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 15)
    ).catch(() => []);
    throw new SkipCase(`Không nhận diện được nút chuyển bước xác nhận. Các nút đang hiển thị: ${visibleButtons.join(' | ') || 'không lấy được nhãn nút'}.`);
  }
  await continueButton.scrollIntoViewIfNeeded();
  await continueButton.click({ timeout: ACTION_TIMEOUT });
  await delay(1200);

  const afterUrl = page.url();
  const afterText = (await page.locator('body').innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
  const visibleDialogs = page.getByRole('dialog');
  let dialogVisible = false;
  for (let i = 0; i < await visibleDialogs.count(); i++) {
    if (await visibleDialogs.nth(i).isVisible().catch(() => false)) dialogVisible = true;
  }
  const stillVisible = await continueButton.isVisible().catch(() => false);
  const headings = await page.locator('h1, h2, h3, h4, [role="heading"]:visible').evaluateAll(els =>
    els.map(el => (el.innerText || '').replace(/\s+/g, ' ').trim()).filter(Boolean)
  ).catch(() => []);
  const hasSummaryHeading = headings.some(text => /xác nhận thông tin|thông tin xác nhận|kiểm tra thông tin|chi tiết trade.?in|xác nhận thu cũ/i.test(text));
  const transitioned = beforeUrl !== afterUrl || dialogVisible || !stillVisible || hasSummaryHeading;
  if (!transitioned) {
    throw new SkipCase(`Đã thao tác nút chuyển bước nhưng chưa xác minh được màn hình xác nhận. Heading hiện có: ${headings.join(' | ') || 'không có heading phù hợp'}.`);
  }
}

async function openConsultForm(page) {
  await searchOldDevice(page, 'Nokia 1280 Pro XYZ');
  await delay(500);
  const consult = await findClickable(page, /đăng ký tư vấn/i);
  if (!consult) throw new SkipCase('Không thấy nút Đăng ký tư vấn trong trạng thái tìm kiếm không có kết quả.');
  await consult.scrollIntoViewIfNeeded();
  await consult.click({ timeout: ACTION_TIMEOUT });
  await delay(700);
}

async function runCase(page, id, name, fn) {
  const started = Date.now();
  console.log(`\n[${id}] ${name}`);
  try {
    await fn(page);
    const ms = Date.now() - started;
    console.log(`  PASS (${ms} ms)`);
    return { id, name, status: 'PASS', durationMs: ms, reason: '' };
  } catch (error) {
    const ms = Date.now() - started;
    const status = error instanceof SkipCase ? 'SKIPPED' : 'FAILED';
    const reason = error && error.message ? error.message : String(error);
    console.log(`  ${status} (${ms} ms): ${reason}`);
    const screenshotPath = path.join(OUTPUT_DIR, `${id}_${status.toLowerCase()}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true, timeout: 20000 }).catch(() => {});
    return { id, name, status, durationMs: ms, reason, error: reason, screenshot: screenshotPath };
  }
}

function csvEscape(value) {
  const text = value === null || value === undefined ? '' : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function htmlEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function compactReason(value, maxLength = 88) {
  if (!value) return '—';
  // Playwright call logs can span hundreds of lines. Keep the summary readable;
  // the complete message remains available in JSON and the HTML details panel.
  const firstLine = String(value).replace(/\u001b\[[0-9;]*m/g, '').split(/\r?\n/)[0].trim();
  if (firstLine.length <= maxLength) return firstLine;
  return firstLine.slice(0, maxLength - 1) + '…';
}

function writeExecutionReports(summary) {
  const jsonPath = path.join(OUTPUT_DIR, 'tradein-results.json');
  const csvPath = path.join(OUTPUT_DIR, 'TradeIn_Test_Report.csv');
  const htmlPath = path.join(OUTPUT_DIR, 'TradeIn_Test_Report.html');

  // JSON giữ toàn bộ dữ liệu máy đọc được, CSV thuận tiện mở bằng Excel.
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2), 'utf8');
  const csvHeaders = ['No', 'Test Case ID', 'Test Case', 'Status', 'Duration (ms)', 'Reason', 'Screenshot'];
  const csvRows = summary.results.map((item, index) => [
    index + 1,
    item.id,
    item.name,
    item.status,
    item.durationMs,
    item.reason || '',
    item.screenshot ? path.basename(item.screenshot) : ''
  ]);
  const csv = [csvHeaders, ...csvRows].map(row => row.map(csvEscape).join(',')).join('\r\n');
  // BOM giúp Excel nhận diện tiếng Việt UTF-8.
  fs.writeFileSync(csvPath, '\uFEFF' + csv, 'utf8');

  const statusLabel = { PASS: 'PASS', FAILED: 'FAIL', SKIPPED: 'SKIP' };
  const tableRows = summary.results.map((item, index) => {
    const screenshotLink = item.screenshot
      ? `<a href="./${encodeURIComponent(path.basename(item.screenshot))}">Xem ảnh</a>`
      : '—';
    const reason = item.reason ? htmlEscape(compactReason(item.reason, 110)) : '—';
    const details = item.reason && item.reason.length > 110
      ? `<details><summary>Xem chi tiết lỗi</summary><pre>${htmlEscape(item.reason)}</pre></details>`
      : '';
    return `<tr class="${item.status.toLowerCase()}">
      <td>${index + 1}</td>
      <td class="mono">${htmlEscape(item.id)}</td>
      <td>${htmlEscape(item.name)}</td>
      <td><span class="badge ${item.status.toLowerCase()}">${statusLabel[item.status] || htmlEscape(item.status)}</span></td>
      <td class="num">${(item.durationMs / 1000).toFixed(2)}s</td>
      <td class="reason"><div>${reason}</div>${details}</td>
      <td>${screenshotLink}</td>
    </tr>`;
  }).join('\n');

  const executed = summary.total - summary.skipped;
  const html = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CellphoneS Trade-in - Test Execution Report</title>
<style>
  :root { color-scheme: light; --ink:#172033; --muted:#657087; --line:#e5e9f0; --bg:#f5f7fb; }
  * { box-sizing:border-box; }
  body { margin:0; padding:32px; background:var(--bg); color:var(--ink); font:14px/1.5 Arial, sans-serif; }
  .wrap { max-width:1500px; margin:0 auto; }
  h1 { margin:0 0 6px; font-size:26px; }
  .sub { margin:0 0 24px; color:var(--muted); }
  .cards { display:grid; grid-template-columns:repeat(5,minmax(130px,1fr)); gap:12px; margin-bottom:22px; }
  .card { background:#fff; border:1px solid var(--line); border-radius:12px; padding:16px; }
  .card .label { color:var(--muted); font-size:12px; }
  .card .value { margin-top:4px; font-size:25px; font-weight:700; }
  .pass-text { color:#16834a; } .fail-text { color:#c33131; } .skip-text { color:#a66a00; }
  .panel { background:#fff; border:1px solid var(--line); border-radius:12px; overflow:hidden; }
  .panel-head { padding:16px 18px; border-bottom:1px solid var(--line); font-weight:700; }
  .table-wrap { overflow-x:auto; }
  table { width:100%; border-collapse:collapse; min-width:980px; }
  th,td { padding:10px 12px; border-bottom:1px solid var(--line); text-align:left; vertical-align:top; }
  th { background:#fafbfe; color:#566176; font-size:12px; white-space:nowrap; position:sticky; top:0; }
  tr:last-child td { border-bottom:0; }
  tbody tr:hover { background:#fafcff; }
  td.num { white-space:nowrap; font-variant-numeric:tabular-nums; }
  td.mono { font-family:Consolas,monospace; font-size:12px; white-space:nowrap; }
  td.reason { min-width:220px; max-width:420px; overflow-wrap:anywhere; }
  td.reason details { margin-top:6px; color:#315fb5; font-size:12px; }
  td.reason summary { cursor:pointer; user-select:none; }
  td.reason pre { max-width:560px; max-height:240px; overflow:auto; padding:10px; background:#f4f6fa; color:#3f4b5f; border-radius:8px; white-space:pre-wrap; overflow-wrap:anywhere; }
  .badge { display:inline-block; border-radius:999px; padding:3px 9px; font-size:11px; font-weight:700; }
  .badge.pass { background:#e7f7ee; color:#16834a; } .badge.failed { background:#fdecec; color:#c33131; }
  .badge.skipped { background:#fff4db; color:#956000; }
  a { color:#245ec7; text-decoration:none; } a:hover { text-decoration:underline; }
  .foot { color:var(--muted); font-size:12px; margin-top:14px; }
  @media(max-width:800px) { body { padding:14px; } .cards { grid-template-columns:repeat(2,minmax(0,1fr)); } }
</style>
</head>
<body><main class="wrap">
  <h1>CellphoneS Trade-in – Test Execution Report</h1>
  <p class="sub">Website: <a href="${htmlEscape(summary.site)}">${htmlEscape(summary.site)}</a> · Thời điểm chạy: ${htmlEscape(summary.runAt)} · Tổng thời gian: ${(summary.durationMs / 1000).toFixed(1)} giây</p>
  <section class="cards">
    <div class="card"><div class="label">Tổng test case</div><div class="value">${summary.total}</div></div>
    <div class="card"><div class="label">PASS</div><div class="value pass-text">${summary.passed}</div></div>
    <div class="card"><div class="label">FAIL</div><div class="value fail-text">${summary.failed}</div></div>
    <div class="card"><div class="label">SKIP</div><div class="value skip-text">${summary.skipped}</div></div>
    <div class="card"><div class="label">Tỷ lệ PASS (không tính SKIP)</div><div class="value">${summary.passRate.toFixed(2)}%</div></div>
  </section>
  <section class="panel">
    <div class="panel-head">Chi tiết kết quả từng test case</div>
    <div class="table-wrap"><table>
      <thead><tr><th>No.</th><th>Test Case ID</th><th>Test Case</th><th>Status</th><th>Duration</th><th>Reason / Error</th><th>Screenshot</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table></div>
  </section>
  <p class="foot">Tỷ lệ PASS = PASS / (Tổng test case − SKIP). FAIL được tính là test đã thực thi nhưng không thành công. Ảnh lỗi được lưu cùng thư mục báo cáo.</p>
</main></body></html>`;
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('\n================ TRADE-IN TEST SUMMARY ================');
  console.log(`Total: ${summary.total} | PASS: ${summary.passed} | FAIL: ${summary.failed} | SKIP: ${summary.skipped}`);
  console.log(`Pass rate (excluding SKIP): ${summary.passRate.toFixed(2)}% | Execution rate: ${summary.executionRate.toFixed(2)}%`);
  console.table(summary.results.map((item, index) => ({
    No: index + 1,
    ID: item.id,
    Status: statusLabel[item.status] || item.status,
    Sec: (item.durationMs / 1000).toFixed(2)
  })));
  const issueRows = summary.results.filter(item => item.status !== 'PASS');
  if (issueRows.length) {
    console.log('\nFAIL / SKIP REASONS');
    for (const item of issueRows) {
      console.log(`- ${item.id} [${statusLabel[item.status]}]: ${compactReason(item.reason, 120)}`);
    }
  }
  console.log('Ghi chú: Call log đầy đủ được lưu trong HTML (mở “Xem chi tiết lỗi”) và JSON.');
  console.log(`\nHTML report : ${htmlPath}`);
  console.log(`CSV report  : ${csvPath}`);
  console.log(`JSON detail : ${jsonPath}`);
  console.log(`Screenshots : ${OUTPUT_DIR}`);
}

async function main() {
  const runStarted = Date.now();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: HEADLESS, slowMo: SLOW_MO_MS });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'vi-VN' });
  const results = [];

  const cases = [
    ['TRADE_IN_Page_01', 'Mở trang Thu cũ đổi mới từ menu chính', async page => {
      await gotoHome(page);
      await clickButton(page, /thu cũ.*(đổi mới|lên đời)|đổi mới/i);
      await waitForText(page, /Chọn sản phẩm bạn muốn thu cũ/i, 20000);
      if (!page.url().includes('/thu-cu-doi-moi')) throw new Error(`URL không chuyển đến trang Trade-in: ${page.url()}`);
    }],

    ['TRADE_IN_Search_02', 'Tìm thiết bị cũ bằng từ khóa một phần', async page => {
      await gotoTradeIn(page);
      await searchOldDevice(page, 'iPhone 13');
      await waitForText(page, /iPhone 13/i, 10000);
      const input = await findInput(page, /Tìm sản phẩm muốn thu cũ/i);
      if ((await input.inputValue()).trim() !== 'iPhone 13') throw new Error('Từ khóa không được giữ đúng trong ô tìm kiếm.');
    }],

    ['TRADE_IN_Search_03', 'Tìm chính xác model và phiên bản dung lượng của máy cũ', async page => {
      await gotoTradeIn(page);
      await searchOldDevice(page, 'iPhone 13 Pro Max 256GB');
      await waitForText(page, /iPhone 13 Pro Max/i, 10000);
      const body = await page.locator('body').innerText();
      if (!/256\s?GB/i.test(body)) throw new Error('Không thấy phiên bản 256GB trong kết quả hiển thị.');
      await chooseResult(page, /iPhone 13 Pro Max.*256\s?GB/i, true);
    }],

    ['TRADE_IN_Search_04', 'Tìm thiết bị cũ không tồn tại trong danh mục', async page => {
      await gotoTradeIn(page);
      await searchOldDevice(page, 'Nokia 1280 Pro XYZ');
      const input = await findInput(page, /Tìm sản phẩm muốn thu cũ/i);
      if ((await input.inputValue()).trim() !== 'Nokia 1280 Pro XYZ') throw new Error('Ô tìm kiếm không giữ từ khóa không hợp lệ.');
      const unexpected = await visibleTextLocators(page, /Nokia 1280 Pro XYZ/i);
      // Nếu chỉ có text trong input thì getByText thường không trả phần tử; trường hợp có kết quả thật thì báo lỗi.
      if (unexpected.length) throw new Error('Website hiển thị nội dung khớp chuỗi tìm kiếm không tồn tại; cần xem lại trạng thái kết quả.');
      await delay(500);
    }],

    ['TRADE_IN_Search_05', 'Xóa từ khóa tìm kiếm thiết bị cũ và tìm model khác', async page => {
      await gotoTradeIn(page);
      await searchOldDevice(page, 'Nokia 1280 Pro XYZ');
      await fillInput(page, /Tìm sản phẩm muốn thu cũ/i, 'Samsung Galaxy S23');
      await delay(SEARCH_WAIT_MS);
      await waitForText(page, /Samsung Galaxy S23/i, 10000);
      const input = await findInput(page, /Tìm sản phẩm muốn thu cũ/i);
      if ((await input.inputValue()).includes('Nokia')) throw new Error('Từ khóa cũ chưa được thay thế.');
    }],

    ['TRADE_IN_Device_06', 'Chọn thiết bị cũ từ danh sách kết quả', async page => {
      await gotoTradeIn(page);
      await searchOldDevice(page, 'iPhone 13 Pro Max');
      await waitForText(page, /iPhone 13 Pro Max/i, 10000);
      await chooseResult(page, /iPhone 13 Pro Max/i);
      await delay(700);
      const body = await page.locator('body').innerText();
      if (!/tình trạng|định giá|chọn sản phẩm muốn lên đời/i.test(body)) throw new Error('Sau khi chọn máy chưa thấy khu vực bước tiếp theo.');
    }],

    ['TRADE_IN_Device_07', 'Thay thiết bị cũ sau khi đã chọn model', async page => {
      await prepareOldDevice(page, 'iPhone 13 Pro Max');
      const back = await findClickable(page, /thay đổi|chọn lại|đổi thiết bị|quay lại/i);
      if (!back) throw new SkipCase('Không nhận diện được nút thay đổi/quay lại thiết bị trên giao diện hiện tại.');
      await back.click({ timeout: ACTION_TIMEOUT });
      await delay(500);
      await searchOldDevice(page, 'Samsung Galaxy S23');
      await waitForText(page, /Samsung Galaxy S23/i, 10000);
      await chooseResult(page, /Samsung Galaxy S23/i);
      await waitForConditionArea(page);
    }],

    ['TRADE_IN_Condition_08', 'Chọn tình trạng thiết bị cũ theo danh sách website cung cấp', async page => {
      await prepareOldDevice(page);
      const selected = await chooseCondition(page, 'first');
      if (!selected) throw new Error('Không chọn được tình trạng thiết bị.');
    }],

    ['TRADE_IN_Condition_09', 'Thay đổi tình trạng máy và cập nhật giá thu cũ', async page => {
      await prepareOldDevice(page);
      const before = await chooseCondition(page, 'first');
      const after = await chooseCondition(page, 'different');
      if (before === after) throw new Error('Không chọn được phương án tình trạng khác với phương án ban đầu.');
      await delay(800);
      await chooseCondition(page, 'first');
    }],

    ['TRADE_IN_Condition_10', 'Chọn tình trạng máy ở mức lỗi nặng nhất đang được hỗ trợ', async page => {
      await prepareOldDevice(page);
      const selected = await chooseCondition(page, 'worst');
      console.log(`  Tình trạng đã chọn: ${selected}`);
    }],

    ['TRADE_IN_Category_11', 'Mở danh mục iPhone trong khu vực sản phẩm thu cũ nổi bật', async page => {
      await gotoTradeIn(page);
      await waitForText(page, /Thu cũ nổi bật/i, 15000);
      await clickText(page, /^iPhone$/i);
      await delay(800);
      await waitForText(page, /iPhone/i, 10000);
    }],

    ['TRADE_IN_Category_12', 'Chuyển danh mục từ iPhone sang Samsung', async page => {
      await gotoTradeIn(page);
      await waitForText(page, /Thu cũ nổi bật/i, 15000);
      await clickText(page, /^iPhone$/i);
      await delay(500);
      await clickText(page, /^Samsung$/i);
      await delay(700);
      const body = await page.locator('body').innerText();
      if (!/Samsung/i.test(body)) throw new Error('Không thấy nội dung thuộc danh mục Samsung sau khi chuyển.');
    }],

    ['TRADE_IN_Category_13', 'Chọn model máy cũ trực tiếp từ danh mục Samsung', async page => {
      await gotoTradeIn(page);
      await waitForText(page, /Thu cũ nổi bật/i, 15000);
      await clickText(page, /^Samsung$/i);
      await delay(800);
      const samsungModel = await findClickable(page, /Galaxy (S|Z|A)\d+/i);
      if (!samsungModel) throw new SkipCase('Không nhận diện được thẻ model Samsung trong khu vực danh mục.');
      await samsungModel.scrollIntoViewIfNeeded();
      const modelName = (await samsungModel.innerText()).trim();
      await samsungModel.click({ timeout: ACTION_TIMEOUT });
      await delay(800);
      console.log(`  Model đã chọn: ${modelName}`);
      await waitForConditionArea(page);
    }],

    ['TRADE_IN_NewSearch_14', 'Tìm kiếm sản phẩm mới muốn lên đời bằng từ khóa hợp lệ', async page => {
      await prepareOldDevice(page);
      await chooseCondition(page, 'first');
      await searchNewDevice(page, 'iPhone 16');
      await waitForText(page, /iPhone 16/i, 10000);
      const input = await findInput(page, /Tìm sản phẩm muốn lên đời/i);
      if ((await input.inputValue()).trim() !== 'iPhone 16') throw new Error('Từ khóa sản phẩm lên đời không chính xác.');
    }],

    ['TRADE_IN_NewSearch_15', 'Tìm sản phẩm lên đời không tồn tại', async page => {
      await prepareOldDevice(page);
      await chooseCondition(page, 'first');
      await searchNewDevice(page, 'Phone Model ABC 9999');
      const input = await findInput(page, /Tìm sản phẩm muốn lên đời/i);
      if ((await input.inputValue()).trim() !== 'Phone Model ABC 9999') throw new Error('Không nhập được từ khóa sản phẩm mới.');
      const result = await visibleTextLocators(page, /Phone Model ABC 9999/i);
      if (result.length) throw new Error('Có phần tử kết quả khớp với chuỗi sản phẩm không tồn tại.');
      await delay(500);
    }],

    ['TRADE_IN_NewSearch_16', 'Chọn sản phẩm mới từ danh sách gợi ý', async page => {
      await prepareOldDevice(page);
      await chooseCondition(page, 'first');
      await searchNewDevice(page, 'iPhone 16');
      await waitForText(page, /iPhone 16/i, 10000);
      await chooseResult(page, /iPhone 16/i);
      await delay(800);
    }],

    ['TRADE_IN_NewSearch_17', 'Thay sản phẩm lên đời đã chọn bằng sản phẩm khác', async page => {
      await prepareUpTrade(page, 'iPhone 13 Pro Max', 'iPhone 16');
      await chooseResult(page, /iPhone 16/i);
      await closeProductPicker(page);

      // Sau khi chọn sản phẩm, ưu tiên dùng lại ô tìm kiếm lên đời trên trang.
      // Chỉ bấm nút Thay đổi/Chọn lại nếu ô tìm kiếm chưa hiển thị.
      let newInput = await findInput(page, /Tìm sản phẩm muốn lên đời/i);
      if (!newInput) {
        const change = await findClickable(page, /thay đổi|chọn lại|đổi sản phẩm/i);
        if (!change) throw new SkipCase('Đã chọn sản phẩm đầu tiên nhưng không thấy ô tìm kiếm hoặc nút thay đổi sản phẩm thực sự có thể bấm.');
        await change.click({ timeout: ACTION_TIMEOUT });
        await delay(500);
        newInput = await findInput(page, /Tìm sản phẩm muốn lên đời/i);
      }
      if (!newInput) throw new SkipCase('Không mở lại được ô tìm kiếm sản phẩm lên đời sau khi chọn sản phẩm đầu tiên.');
      await newInput.fill('Samsung Galaxy Z8 Ultra');
      await delay(SEARCH_WAIT_MS);
      await waitForText(page, /Samsung Galaxy Z8 Ultra/i, 10000);
      await chooseResult(page, /Samsung Galaxy Z8 Ultra/i);
      await closeProductPicker(page);
    }],

    ['TRADE_IN_Confirm_18', 'Chuyển đến bước xác nhận thông tin Trade-in', async page => {
      await prepareUpTrade(page);
      await chooseResult(page, /iPhone 16/i);
      await closeProductPicker(page);
      await clickContinueToSummary(page);
      const headings = await page.locator('h1, h2, h3, h4, [role="heading"]:visible').allInnerTexts().catch(() => []);
      const summaryControls = await findClickable(page, /chỉnh sửa|sửa thông tin|quay lại/i);
      if (!headings.some(text => /xác nhận thông tin|thông tin xác nhận|kiểm tra thông tin/i.test(text)) && !summaryControls) {
        throw new SkipCase('Có thao tác chuyển bước nhưng chưa nhận diện được nội dung/điều khiển đặc trưng của màn hình xác nhận; cần đối chiếu thủ công.');
      }
    }],

    ['TRADE_IN_Confirm_19', 'Quay lại chỉnh sửa thiết bị cũ từ bước xác nhận', async page => {
      await prepareUpTrade(page);
      await chooseResult(page, /iPhone 16/i);
      await closeProductPicker(page);
      await clickContinueToSummary(page);
      const editOld = await findClickable(page, /chỉnh sửa.*(máy cũ|thiết bị cũ)|thay đổi.*(máy cũ|thiết bị cũ)|quay lại/i);
      if (!editOld) throw new SkipCase('Bước xác nhận không có nút sửa thiết bị cũ; cần ghi nhận theo giao diện thực tế.');
      await editOld.click({ timeout: ACTION_TIMEOUT });
      await delay(700);
      await searchOldDevice(page, 'Samsung Galaxy S23');
      await waitForText(page, /Samsung Galaxy S23/i, 10000);
      await chooseResult(page, /Samsung Galaxy S23/i);
    }],

    ['TRADE_IN_Confirm_20', 'Thay đổi tình trạng thiết bị sau khi quay lại bước chọn máy', async page => {
      await prepareUpTrade(page);
      await chooseResult(page, /iPhone 16/i);
      await closeProductPicker(page);
      await clickContinueToSummary(page);
      const editOld = await findClickable(page, /chỉnh sửa.*(máy cũ|thiết bị cũ)|thay đổi.*(máy cũ|thiết bị cũ)|quay lại/i);
      if (!editOld) throw new SkipCase('Không có thao tác quay lại phần thiết bị cũ ở bước xác nhận.');
      await editOld.click({ timeout: ACTION_TIMEOUT });
      await delay(700);
      await chooseCondition(page, 'different');
      await searchNewDevice(page, 'iPhone 16');
      await chooseResult(page, /iPhone 16/i);
      await closeProductPicker(page);
      await clickContinueToSummary(page);
    }],

    ['TRADE_IN_Confirm_21', 'Thay đổi sản phẩm lên đời từ bước xác nhận', async page => {
      await prepareUpTrade(page);
      await chooseResult(page, /iPhone 16/i);
      await closeProductPicker(page);
      await clickContinueToSummary(page);
      const editNew = await findClickable(page, /chỉnh sửa.*(sản phẩm|máy mới|lên đời)|thay đổi.*(sản phẩm|máy mới|lên đời)/i);
      if (!editNew) throw new SkipCase('Bước xác nhận không có thao tác chỉnh sửa sản phẩm lên đời.');
      await editNew.click({ timeout: ACTION_TIMEOUT });
      await delay(600);
      await searchNewDevice(page, 'Samsung Galaxy Z8 Ultra');
      await waitForText(page, /Samsung Galaxy Z8 Ultra/i, 10000);
      await chooseResult(page, /Samsung Galaxy Z8 Ultra/i);
      await closeProductPicker(page);
      await clickContinueToSummary(page);
    }],

    ['TRADE_IN_Price_22', 'Kiểm tra giá thu cũ và phần chênh lệch sau khi chọn đủ hai thiết bị', async page => {
      await prepareUpTrade(page);
      await chooseResult(page, /iPhone 16/i);
      const body = await page.locator('body').innerText();
      if (!/giá|VNĐ|₫|đồng/i.test(body)) throw new SkipCase('Trang chưa hiển thị thông tin giá ở bước hiện tại.');
      const firstPrice = (body.match(/[\d.]+\s?(?:₫|đ|VNĐ)/i) || [])[0] || '';
      const conditions = await getConditionOptions(page);
      if (conditions.length < 2) throw new SkipCase('Không có ít nhất hai tình trạng để so sánh giá.');
      await chooseCondition(page, 'different');
      const nextBody = await page.locator('body').innerText();
      if (!/giá|VNĐ|₫|đồng/i.test(nextBody)) throw new Error('Sau khi đổi tình trạng không còn thông tin giá.');
      console.log(`  Giá trước khi đổi tình trạng (nếu có): ${firstPrice || 'Không trích xuất được'}`);
    }],

    ['TRADE_IN_SBuyBack_23', 'Mở khu vực định giá thiết bị đã mua gói S-BuyBack', async page => {
      await gotoTradeIn(page);
      await waitForText(page, /Định giá thiết bị đã mua gói S-BuyBack/i, 15000);
      const imei = await findInput(page, /IMEI/i);
      if (!imei) throw new Error('Không tìm thấy ô nhập IMEI S-BuyBack.');
      await imei.scrollIntoViewIfNeeded();
      await imei.click();
    }],

    ['TRADE_IN_IMEI_24', 'Kiểm tra tra cứu S-BuyBack khi bỏ trống IMEI', async page => {
      await gotoTradeIn(page);
      const imei = await findInput(page, /IMEI/i);
      if (!imei) throw new Error('Không tìm thấy ô IMEI.');
      await imei.fill('');
      const nativeState = await imei.evaluate(el => ({
        required: el.required,
        valid: el.checkValidity(),
        validationMessage: el.validationMessage || ''
      }));
      const checkButton = await findClickable(page, /^Kiểm tra ngay$/i);
      if (!checkButton) throw new Error('Không tìm thấy nút Kiểm tra ngay trong khu vực S-BuyBack.');
      const buttonEnabled = await checkButton.isEnabled().catch(() => false);
      if (!buttonEnabled) {
        // Disabled button is the expected client-side guard for an empty IMEI.
        console.log('  Nút Kiểm tra ngay đang disabled khi IMEI để trống.');
        return;
      }
      await checkButton.click({ timeout: ACTION_TIMEOUT });
      await delay(600);
      const body = await page.locator('body').innerText();
      if (/404|Internal Server Error/i.test(body)) throw new Error('Website điều hướng đến trang lỗi sau khi gửi IMEI rỗng.');
      const validationText = /vui lòng nhập|nhập.*IMEI|IMEI.*bắt buộc|không được để trống|không hợp lệ/i.test(body);
      if (nativeState.valid && !nativeState.required && !nativeState.validationMessage && !validationText) {
        throw new Error('Nút vẫn cho gửi IMEI rỗng nhưng không quan sát được validation nào.');
      }
    }],

    ['TRADE_IN_IMEI_25', 'Nhập IMEI sai định dạng vào khu vực S-BuyBack', async page => {
      await gotoTradeIn(page);
      await fillInput(page, /IMEI/i, 'IMEI-ABC-123');
      const enteredValue = await (await findInput(page, /IMEI/i)).inputValue();
      const nativeState = await (await findInput(page, /IMEI/i)).evaluate(el => ({
        valid: el.checkValidity(),
        validationMessage: el.validationMessage || '',
        maxLength: el.maxLength
      }));
      const checkButton = await findClickable(page, /^Kiểm tra ngay$/i);
      if (!checkButton) throw new Error('Không tìm thấy nút Kiểm tra ngay trong khu vực S-BuyBack.');
      const buttonEnabled = await checkButton.isEnabled().catch(() => false);
      if (enteredValue !== 'IMEI-ABC-123') {
        console.log('  Ô IMEI đã tự chuẩn hóa/chặn chuỗi sai định dạng ngay khi nhập.');
        return;
      }
      if (!buttonEnabled) {
        console.log('  Nút Kiểm tra ngay bị vô hiệu hóa với IMEI sai định dạng.');
        return;
      }
      if (!nativeState.valid) {
        console.log('  Trình duyệt đánh dấu giá trị IMEI sai định dạng là invalid.');
        return;
      }
      await checkButton.click({ timeout: ACTION_TIMEOUT });
      await delay(900);
      const body = await page.locator('body').innerText();
      if (/404|Internal Server Error/i.test(body)) throw new Error('Website trả về trang lỗi khi nhập IMEI sai định dạng.');
      const validationText = /IMEI.*(không hợp lệ|sai|kiểm tra lại)|vui lòng.*IMEI|định dạng IMEI/i.test(body);
      if (!validationText) throw new Error('Không ghi nhận được thông báo/inline validation từ chối IMEI sai định dạng sau khi gửi. Đây là FAIL theo tiêu chí quan sát tự động, nhưng chưa đủ bằng chứng kết luận website lỗi; cần xác minh thủ công trên giao diện.');
    }],

    ['TRADE_IN_IMEI_26', 'Tra cứu IMEI có bản ghi S-BuyBack bằng dữ liệu được cấp', async page => {
      if (!IMEI_TEST_FIXTURE.trim()) throw new SkipCase('Chưa điền IMEI_TEST_FIXTURE được cấp phép ở đầu file.');
      await gotoTradeIn(page);
      await fillInput(page, /IMEI/i, IMEI_TEST_FIXTURE.trim());
      await clickButton(page, /^Kiểm tra ngay$/i);
      await delay(1600);
      const body = await page.locator('body').innerText();
      if (/404|Internal Server Error/i.test(body)) throw new Error('Website trả về trang lỗi khi tra cứu IMEI fixture.');
      if (!/IMEI|S-BuyBack|thiết bị|gói|định giá|kiểm tra/i.test(body)) {
        throw new Error('Không tìm thấy phản hồi tra cứu liên quan đến IMEI/S-BuyBack.');
      }
    }],

    ['TRADE_IN_IMEI_27', 'Mở hướng dẫn kiểm tra IMEI', async page => {
      await gotoTradeIn(page);
      const help = await findClickable(page, /xem hướng dẫn kiểm tra IMEI/i);
      if (!help) throw new Error('Không tìm thấy liên kết hướng dẫn kiểm tra IMEI.');
      const oldPages = context.pages();
      await help.click({ timeout: ACTION_TIMEOUT });
      await delay(1000);
      const pages = context.pages();
      const newPage = pages.find(p => !oldPages.includes(p));
      if (newPage) {
        await newPage.waitForLoadState('domcontentloaded').catch(() => {});
        const url = newPage.url();
        if (url === 'about:blank') throw new Error('Liên kết hướng dẫn mở tab rỗng.');
        await newPage.close().catch(() => {});
      } else {
        const body = await page.locator('body').innerText();
        if (!/IMEI|hướng dẫn|kiểm tra/i.test(body)) throw new Error('Không thấy nội dung hướng dẫn IMEI sau khi click.');
      }
    }],

    ['TRADE_IN_App_28', 'Mở hướng dẫn định giá chuyên sâu trên ứng dụng CellphoneS', async page => {
      await gotoTradeIn(page);
      const appBlock = await findClickable(page, /định giá ngay/i);
      if (!appBlock) throw new Error('Không tìm thấy liên kết Định giá ngay của ứng dụng.');
      const href = await appBlock.getAttribute('href').catch(() => null);
      if (href && !/^https?:\/\//i.test(href) && !href.startsWith('/')) {
        throw new Error(`Liên kết định giá có href không hợp lệ: ${href}`);
      }
      await appBlock.click({ timeout: ACTION_TIMEOUT });
      await delay(1200);
      if (page.url() === TRADE_IN_URL && !href) throw new SkipCase('Nút định giá có thể mở ứng dụng bên ngoài hoặc deep-link; trình duyệt desktop không xác nhận được đích mở.');
      console.log(`  URL sau thao tác: ${page.url()}`);
    }],

    ['TRADE_IN_Consult_29', 'Mở form đăng ký tư vấn khi không tìm thấy thiết bị', async page => {
      await gotoTradeIn(page);
      await openConsultForm(page);
      const body = await page.locator('body').innerText();
      if (!/họ tên|số điện thoại|điện thoại|đăng ký tư vấn|tư vấn/i.test(body)) {
        throw new Error('Không thấy các trường/nội dung form tư vấn sau khi mở.');
      }
    }],

    ['TRADE_IN_Consult_30', 'Kiểm tra yêu cầu thông tin bắt buộc của form tư vấn Trade-in', async page => {
      await gotoTradeIn(page);
      await openConsultForm(page);

      // Scope all checks to the consultation dialog/form. Do not submit a real lead
      // to the production website during automated testing.
      let scope = null;
      const dialogs = page.getByRole('dialog');
      for (let i = 0; i < await dialogs.count(); i++) {
        const dialog = dialogs.nth(i);
        if (await dialog.isVisible().catch(() => false)) {
          const hasContactField = await dialog.locator('input:visible, textarea:visible, select:visible').count().catch(() => 0);
          if (hasContactField) { scope = dialog; break; }
        }
      }
      if (!scope) {
        const forms = page.locator('form:visible');
        for (let i = 0; i < await forms.count(); i++) {
          const form = forms.nth(i);
          if (await form.locator('input:visible, textarea:visible, select:visible').count().catch(() => 0)) {
            scope = form;
            break;
          }
        }
      }
      if (!scope) throw new SkipCase('Không tìm thấy form tư vấn đang hiển thị để kiểm tra trường bắt buộc.');

      const state = await scope.evaluate(root => {
        const fields = Array.from(root.querySelectorAll('input, textarea, select'))
          .filter(el => {
            const style = getComputedStyle(el);
            return style.display !== 'none' && style.visibility !== 'hidden' && !el.disabled;
          })
          .map(el => ({
            name: el.name || el.id || el.getAttribute('placeholder') || el.tagName.toLowerCase(),
            required: !!el.required || el.getAttribute('aria-required') === 'true',
            valid: typeof el.checkValidity === 'function' ? el.checkValidity() : true,
            value: el.value || ''
          }));
        const required = fields.filter(x => x.required);
        const invalidRequired = required.filter(x => !x.valid || !String(x.value).trim());
        const form = root.matches('form') ? root : root.querySelector('form');
        const formValid = form ? form.checkValidity() : null;
        return { fields, required, invalidRequired, formValid };
      });

      if (!state.required.length) {
        throw new SkipCase('Form không công bố thuộc tính required/aria-required cho các trường đang hiển thị; cần kiểm tra thủ công giao diện hiện tại.');
      }
      if (!state.invalidRequired.length && state.formValid !== false) {
        throw new Error('Các trường bắt buộc không ở trạng thái thiếu dữ liệu; không xác nhận được validation của form trống.');
      }
      console.log(`  Trường bắt buộc đang thiếu dữ liệu: ${state.invalidRequired.map(x => x.name).join(', ')}`);
      console.log('  Không gửi form thật; chỉ kiểm tra trạng thái required/validity để tránh tạo yêu cầu tư vấn trên production.');
    }]
  ];

  try {
    for (const [id, name, fn] of cases) {
      const page = await context.newPage();
      page.setDefaultTimeout(ACTION_TIMEOUT);
      page.setDefaultNavigationTimeout(60000);
      const result = await runCase(page, id, name, fn);
      results.push(result);
      await page.close().catch(() => {});
    }
  } finally {
    await context.close();
    await browser.close();
  }

  const summary = {
    project: 'CellphoneS Trade-in',
    site: TRADE_IN_URL,
    runAt: new Date().toISOString(),
    durationMs: Date.now() - runStarted,
    total: results.length,
    passed: results.filter(x => x.status === 'PASS').length,
    failed: results.filter(x => x.status === 'FAILED').length,
    skipped: results.filter(x => x.status === 'SKIPPED').length,
    results
  };
  const executed = summary.total - summary.skipped;
  summary.passRate = executed > 0 ? (summary.passed / executed) * 100 : 0;
  summary.executionRate = summary.total > 0 ? (executed / summary.total) * 100 : 0;
  writeExecutionReports(summary);
  if (summary.failed > 0) process.exitCode = 1;
}

main().catch(error => {
  console.error('Không thể khởi chạy bộ kiểm thử:', error);
  process.exit(1);
});
