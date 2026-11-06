const base = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

function markBlocked(details) {
  const flag = process.env.ASM7_BLOCK_FILE;
  if (!flag) throw new Error('Missing per-run blocking flag');
  fs.mkdirSync(path.dirname(flag), { recursive: true });
  fs.writeFileSync(flag, JSON.stringify({ at: new Date().toISOString(), ...details }, null, 2));
}

async function assertAvailable(page, response) {
  if (response?.status() === 403) {
    markBlocked({ reason: 'HTTP 403 main document', url: page.url() });
    throw new Error('Website trả HTTP 403; dừng các test còn lại của lượt chạy.');
  }
  const challenge = page.getByText(/Access to cellphones\.com\.vn was denied|HTTP ERROR 403|verify you are human|complete the CAPTCHA/i).first();
  if (await challenge.isVisible()) {
    markBlocked({ reason: 'Visible access challenge', url: page.url() });
    throw new Error('Trang có CAPTCHA/thông báo chặn; không tiếp tục hoặc vượt chặn.');
  }
}

const test = base.test.extend({
  group15Guard: [async ({ page, context }, use, testInfo) => {
    const flag = process.env.ASM7_BLOCK_FILE;
    test.skip(Boolean(flag && fs.existsSync(flag)), 'Lượt chạy đã gặp HTTP 403/CAPTCHA; không thử vượt chặn.');
    // Reviewed PD source skips cart/buy/payload. Keep real HTTP/cache behavior;
    // broad routing would disable the HTTP cache and alter navigation timing.
    const onResponse = response => {
      const request = response.request();
      if (request.isNavigationRequest() && request.resourceType() === 'document' && request.frame() === page.mainFrame() && new URL(response.url()).hostname === 'cellphones.com.vn' && response.status() === 403) {
        markBlocked({ reason: 'HTTP 403 navigation', url: response.url(), test: testInfo.title });
      }
    };
    page.on('response', onResponse);
    await page.addLocatorHandler(page.getByRole('button', { name: 'Từ chối', exact: true }), async button => { await button.click(); });
    await page.addLocatorHandler(page.getByRole('button', { name: 'Bữa khác nha!', exact: true }), async button => { await button.click(); });
    await use();
    page.off('response', onResponse);
  }, { auto: true }],
});

test.afterEach(async ({ page }, testInfo) => {
  if (page.isClosed() || testInfo.status === 'skipped') return;
  const root = process.env.GROUP15_EVIDENCE_DIR;
  const prefix = testInfo.title.match(/PRODUCT_(?:DETAIL|COMPARE|REVIEW)_[A-Z]+_[A-Za-z]+_\d+|PC-\d+|ST-\d+|SF-\d+|TT-\d+|TC_[A-Za-z0-9_]+/)?.[0] || 'supplement';
  const hash = crypto.createHash('sha256').update(testInfo.titlePath.join('/')).digest('hex').slice(0, 8);
  const file = path.join(root, 'screenshots', `${testInfo.project.name}_${prefix}_${hash}_${testInfo.status}.png`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await page.screenshot({ path: file, animations: 'disabled' });
  await testInfo.attach('execution-screenshot', { path: file, contentType: 'image/png' });
});

module.exports = { test, expect: base.expect, assertAvailable };
