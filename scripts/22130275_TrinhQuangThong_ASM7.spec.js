// Assignment 7 — 22130275 Trịnh Quang Thông — Group15
// Hợp nhất ba chức năng từ source đã chạy ASM8 ngày 05/11/2026.
// Không đăng nhập, gửi review, thêm giỏ/mua hoặc mở URL payload.
const { test, expect, assertAvailable } = require('./support/fixtures.cjs');

const PRODUCT_256 = '/iphone-17-256gb.html';
const PRODUCT_512 = '/iphone-17-512gb.html';
const colors = ['Xanh Lá Xô Thơm', 'Đen', 'Trắng', 'Xanh Lam Khói', 'Tím Oải Hương'];
const allowCart = process.env.ALLOW_CART === '1';
const fs = require('fs');
const blockFile = process.env.ASM7_BLOCK_FILE;
function markBlocked() { if (blockFile) fs.writeFileSync(blockFile, 'Website blocked'); }

test.beforeEach(() => {
  test.skip(Boolean(blockFile && fs.existsSync(blockFile)), 'Dừng các case còn lại vì website đã trả 403 hoặc CAPTCHA.');
});

async function openProduct(page, path = PRODUCT_256) {
  const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
  if (response && response.status() === 403) {
    markBlocked();
    throw new Error(`Website trả HTTP 403 khi mở ${path}; dừng test theo ràng buộc.`);
  }
  await dismissNotice(page);
  const blockedMessage = page.getByText(/Access to cellphones\.com\.vn was denied|HTTP ERROR 403|verify you are human|complete the CAPTCHA/i).first();
  if (await blockedMessage.count() && await blockedMessage.isVisible()) {
    markBlocked();
    throw new Error('Trang hiển thị thông báo chặn hoặc CAPTCHA; dừng suite theo ràng buộc.');
  }
  return response;
}

async function dismissNotice(page) {
  const rejectCookies = page.getByRole('button', { name: 'Từ chối', exact: true });
  if (await rejectCookies.isVisible()) await rejectCookies.click();
  const noticeHeading = page.getByText('THÔNG BÁO', { exact: true });
  if (await noticeHeading.count()) {
    const closeButton = page.getByRole('button', { name: 'close', exact: true });
    if (await noticeHeading.first().isVisible() && await closeButton.count()) {
      await closeButton.first().click();
    }
  }
}

function colorOption(page, color) {
  return page.locator('a[href*="product_id="]').filter({ hasText: color }).first();
}

function galleryThumbnail(page, imageNumber) {
  const alt = `iPhone 17 256GB | Chính hãng - ${imageNumber}`;
  return page.locator('.button__view-gallery').filter({
    has: page.getByRole('img', { name: alt, exact: true }),
  });
}

function activeProductImage(page) {
  return page.locator('.swiper-slide-active a.spotlight img');
}

// Hai case phụ thuộc dữ liệu vùng giá/ảnh/khuyến mãi tải sau DOMContentLoaded.
// Selector và trạng thái Đang tải... đã đo trên DOM thật ngày 31/10/2026.
// Chờ có giới hạn, không retry, không đổi Expected khi dữ liệu chưa sẵn sàng.
async function waitForRegionalProductData(page) {
  const region = page.locator('button.button__change-province');
  await expect(region).toBeVisible();
  await expect(region, 'Dữ liệu khu vực còn Đang tải..., chưa sẵn sàng kiểm tra ảnh/khuyến mãi')
    .not.toContainText(/Đang tải/, { timeout: 30_000 });
}

async function chooseColor(page, color) {
  const option = colorOption(page, color);
  await expect(option).toBeVisible();
  await option.click();
  await expect(page).toHaveURL(/product_id=\d+/);
  await expect(option.locator('xpath=ancestor::li[contains(@class,"item-variant")]')).toHaveClass(/active/);
}

test.describe('Trang chi tiết sản phẩm', () => {
  test('PRODUCT_DETAIL_INFO_Open_01 - mở URL sản phẩm cố định', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByRole('heading', { name: 'iPhone 17 256GB | Chính hãng', exact: true })).toBeVisible();
  });

  test('PRODUCT_DETAIL_INFO_View_01 - hiển thị tên, giá, ảnh và thông số', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByRole('heading', { name: 'iPhone 17 256GB | Chính hãng', exact: true })).toBeVisible();
    await expect(page.locator('.sale-price').first()).toContainText(/\d[\d.]*đ/);
    await expect(page.locator('.swiper-slide-active img').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Thông số kỹ thuật' }).first()).toBeVisible();
  });

  test('PRODUCT_DETAIL_INFO_View_02 - giá bán và giá gốc đang hiển thị', async ({ page }) => {
    await openProduct(page);
    const region = page.locator('.box-product-price-wrapper .smember-price-label');
    const price = region.locator('.sale-price');
    await expect(price).toBeVisible();
    await expect(price).toHaveText(/^\s*\d[\d.]*\s*[đ₫]\s*$/);
    const toVnd = text => {
      const value = text.trim();
      expect(value).toMatch(/^\d[\d.]*\s*[đ₫]$/);
      return Number(value.replace(/[^0-9]/g, ''));
    };
    const saleValue = toVnd(await price.innerText());
    expect(saleValue).toBeGreaterThan(0);
    // Theo yêu cầu 30/10/2026: giá gốc là tùy chọn, không bắt buộc xuất hiện.
    // Chỉ đọc phần tử thực sự gạch ngang trong vùng giá chính, không dùng giá trả góp.
    const originals = await region.evaluate(el => Array.from(el.querySelectorAll('*'))
      .filter(e => getComputedStyle(e).textDecorationLine.includes('line-through') && /[0-9]/.test(e.textContent))
      .map(e => e.textContent.trim()));
    for (const original of originals) expect(toVnd(original)).toBeGreaterThan(saleValue);
    test.info().annotations.push({ type: 'price-observation', description: originals.length ? `Đã so sánh ${originals.length} phần tử giá gốc > giá bán` : 'Không có phần tử giá gốc gạch ngang; nhánh so sánh không áp dụng' });
  });

  test('PRODUCT_DETAIL_INFO_View_03 - không có nhãn phần trăm giảm cạnh giá', async ({ page }) => {
    await openProduct(page);
    const region = page.locator('.box-product-price-wrapper .smember-price-label');
    await expect(region).toBeVisible();
    await expect(region.locator('.sale-price')).toContainText(/\d[\d.]*đ/);
    // Chỉ kiểm tra vùng giá bán, không nhầm lãi suất trả góp 0% là nhãn giảm giá.
    await expect(region).not.toContainText(/\d+(?:[.,]\d+)?\s*%/);
  });

  test('PRODUCT_DETAIL_VARIANT_Select_01 - chọn 256GB', async ({ page }) => {
    await openProduct(page);
    const option = page.getByRole('link', { name: /^256GB/ });
    await option.click();
    await expect(option).toHaveClass(/active/);
    await expect(page.getByRole('row').filter({ hasText: 'Bộ nhớ trong' })).toContainText('256 GB');
  });

  test('PRODUCT_DETAIL_VARIANT_Select_02 - chọn 512GB', async ({ page }) => {
    await openProduct(page);
    await page.getByRole('link', { name: /^512GB/ }).click();
    await expect(page).toHaveURL(/\/iphone-17-512gb\.html/);
    await expect(page.getByRole('heading', { name: 'iPhone 17 512GB | Chính hãng', exact: true })).toBeVisible();
    await expect(page.getByRole('row').filter({ hasText: 'Bộ nhớ trong' })).toContainText('512 GB');
  });

  test('PRODUCT_DETAIL_VARIANT_Switch_01 - chuyển 512GB rồi về 256GB', async ({ page }) => {
    await openProduct(page);
    await page.getByRole('link', { name: /^512GB/ }).click();
    await expect(page).toHaveURL(/\/iphone-17-512gb\.html/);
    await expect(page.getByRole('heading', { name: 'iPhone 17 512GB | Chính hãng', exact: true })).toBeVisible();
    await page.getByRole('link', { name: /^256GB/ }).click();
    await expect(page).toHaveURL(/\/iphone-17-256gb\.html/);
    await expect(page.getByRole('heading', { name: 'iPhone 17 256GB | Chính hãng', exact: true })).toBeVisible();
  });

  test('PRODUCT_DETAIL_VARIANT_Open_01 - mở trực tiếp URL 512GB', async ({ page }) => {
    await openProduct(page, PRODUCT_512);
    await expect(page.getByRole('heading', { name: 'iPhone 17 512GB | Chính hãng', exact: true })).toBeVisible();
    await expect(page.getByRole('row').filter({ hasText: 'Bộ nhớ trong' })).toContainText('512 GB');
  });

  test('PRODUCT_DETAIL_COLOR_Select_01 - chọn lần lượt các màu đang hiển thị', async ({ page }) => {
    await openProduct(page);
    for (const color of colors) await chooseColor(page, color);
  });

  test('PRODUCT_DETAIL_COLOR_Select_02 - chọn Xanh Lá Xô Thơm và kiểm tra ảnh', async ({ page }) => {
    test.setTimeout(60_000);
    await openProduct(page);
    await waitForRegionalProductData(page);
    await chooseColor(page, 'Xanh Lá Xô Thơm');
    await expect(page).toHaveURL(/product_id=112602/);
    const image = page.locator('.gallery-product-detail .gallery-top .swiper-slide-active a.spotlight img');
    await expect(image).toBeVisible({ timeout: 15_000 });
    await expect(image).toHaveAttribute('alt', 'Xanh Lá Xô Thơm');
    await expect(image).toHaveAttribute('src', /sage/);
  });

  test('PRODUCT_DETAIL_VARIANT_Switch_02 - giữ màu Tím khi đổi sang 512GB', async ({ page }) => {
    await openProduct(page);
    await chooseColor(page, 'Tím Oải Hương');
    await page.getByRole('link', { name: /^512GB/ }).click();
    await expect(page).toHaveURL(/\/iphone-17-512gb\.html/);
    await expect(colorOption(page, 'Tím Oải Hương').locator('xpath=ancestor::li[contains(@class,"item-variant")]')).toHaveClass(/active/);
  });

  test('PRODUCT_DETAIL_GALLERY_Select_01 - chọn ảnh thu nhỏ', async ({ page }) => {
    await openProduct(page);
    await galleryThumbnail(page, 2).click();
    await expect(page.locator('.swiper-slide-thumb-active img')).toHaveAttribute('alt', 'iPhone 17 256GB | Chính hãng - 2');
    await expect(activeProductImage(page)).toHaveAttribute('alt', 'iPhone 17 256GB | Chính hãng - 2');
    await activeProductImage(page).click();
    await expect(page.locator('.spl-page')).toHaveText(/^\s*\d+\s*\/\s*\d+\s*$/);
  });

  test('PRODUCT_DETAIL_GALLERY_Navigate_01 - chuyển ảnh bằng Next', async ({ page }) => {
    await openProduct(page, PRODUCT_512);
    const next = page.getByRole('button', { name: 'Next slide' }).first();
    await next.click();
    await expect(activeProductImage(page)).toHaveAttribute('alt', 'iPhone 17 512GB | Chính hãng - 1');
    await expect(page.locator('.swiper-slide-thumb-active img')).toHaveAttribute('alt', 'iPhone 17 512GB | Chính hãng - 1');
  });

  test('PRODUCT_DETAIL_GALLERY_Navigate_02 - Previous tại slide đầu', async ({ page }) => {
    await openProduct(page);
    await expect(page.locator('.ksp-gallery.swiper-slide-active img')).toHaveAttribute('alt', 'Video thumbnail');
    await page.getByRole('button', { name: 'Previous slide' }).first().click();
    await expect(page.locator('.ksp-gallery.swiper-slide-active img')).toHaveAttribute('alt', 'Video thumbnail');
  });

  test('PRODUCT_DETAIL_GALLERY_Open_01 - mở ảnh lớn, Escape và đóng hộp thoại video', async ({ page }) => {
    await openProduct(page);
    await galleryThumbnail(page, 2).click();
    await activeProductImage(page).click();
    await expect(page.locator('.spl-page')).toHaveText(/^\s*\d+\s*\/\s*\d+\s*$/);
    await page.keyboard.press('Escape');
    await expect(page.locator('.spl-page')).toBeHidden();
    const close = page.locator('.teleport-modal-boxProductTvc button[aria-label="close"]');
    await expect(close).toBeVisible();
    await close.click();
    await expect(page.getByRole('heading', { name: 'iPhone 17 256GB | Chính hãng', exact: true })).toBeVisible();
  });

  test('PRODUCT_DETAIL_INFO_View_04 - hiển thị khối Khuyến mãi đi kèm', async ({ page }) => {
    test.setTimeout(60_000);
    await openProduct(page);
    await waitForRegionalProductData(page);
    const promotion = page.locator('.box-product-promotion-header').filter({ hasText: 'Khuyến mãi đi kèm' });
    await expect(promotion).toBeVisible({ timeout: 15_000 });
    await expect(promotion.getByText('Khuyến mãi đi kèm', { exact: true })).toBeVisible();
  });

  test('PRODUCT_DETAIL_INFO_Open_02 - mở phần mô tả sản phẩm', async ({ page }) => {
    await openProduct(page);
    await page.locator('a').filter({ hasText: /^Mô tả sản phẩm$/ }).click();
    await expect(page.locator('#cpsContent')).toBeVisible();
  });

  test('PRODUCT_DETAIL_SPECS_View_01 - hiển thị các hàng thông số', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByRole('row').filter({ hasText: 'Hệ điều hành khi ra mắt' })).toBeVisible();
    await expect(page.getByRole('row').filter({ hasText: 'Chipset' })).toBeVisible();
    await expect(page.getByRole('row').filter({ hasText: 'Bộ nhớ trong' })).toBeVisible();
  });

  test('PRODUCT_DETAIL_SPECS_Open_01 - mở bảng thông số mở rộng', async ({ page }) => {
    await openProduct(page);
    await page.locator('button.button__show-modal-technical').click();
    await expect(page.getByRole('heading', { name: 'Thông số kỹ thuật' }).last()).toBeVisible();
    for (const group of ['Cấu hình & Bộ nhớ', 'Màn hình', 'Camera sau', 'Camera trước', 'Pin & công nghệ sạc', 'Giao tiếp & kết nối', 'Công nghệ & Tiện ích', 'Thiết kế & Chất liệu']) {
      await expect(page.locator('li.technical-tab-item').filter({ has: page.locator('span', { hasText: group }) })).toBeVisible();
    }
  });

  test('PRODUCT_DETAIL_SPECS_Switch_01 - chuyển nhóm Màn hình', async ({ page }) => {
    await openProduct(page);
    await page.locator('button.button__show-modal-technical').click();
    await page.locator('li.technical-tab-item[data-label="Màn hình"]').click();
    await expect(page.locator('li.technical-tab-item[data-label="Màn hình"]')).toHaveClass(/active/);
    await expect(page.getByText('Kích thước màn hình', { exact: true }).last()).toBeVisible();
    await expect(page.getByText('Công nghệ màn hình', { exact: true }).last()).toBeVisible();
    await expect(page.getByText('Độ phân giải màn hình', { exact: true }).last()).toBeVisible();
  });

  (allowCart ? test : test.skip)('PRODUCT_DETAIL_ACTION_Add_01 - thêm vào giỏ và dọn sản phẩm kiểm thử', async ({ page }) => {
    test.skip(!allowCart, 'Làm thay đổi giỏ hàng thật; chỉ chạy khi ALLOW_CART=1.');
    test.skip(true, 'Chưa xác minh selector xóa sản phẩm và cleanup trên giao diện hiện tại; chưa cho phép chạy thao tác giỏ dù ALLOW_CART=1.');
    // Chỉ triển khai thao tác thật sau khi xác minh được nút xóa và cleanup.

  });

  (allowCart ? test : test.skip)('PRODUCT_DETAIL_ACTION_Buy_01 - MUA NGAY tới giỏ rồi dọn sản phẩm kiểm thử', async ({ page }) => {
    test.skip(!allowCart, 'Làm thay đổi giỏ hàng thật; chỉ chạy khi ALLOW_CART=1.');
    test.skip(true, 'Chưa xác minh selector xóa sản phẩm và cleanup trên giao diện hiện tại; chưa cho phép chạy thao tác giỏ dù ALLOW_CART=1.');
    // Chỉ triển khai thao tác thật sau khi xác minh được nút xóa và cleanup.

  });

  test('PRODUCT_DETAIL_COLOR_Switch_01 - đổi giữa hai màu', async ({ page }) => {
    await openProduct(page);
    await chooseColor(page, 'Xanh Lá Xô Thơm');
    await expect(page).toHaveURL(/product_id=112602/);
    await chooseColor(page, 'Tím Oải Hương');
    await expect(page).toHaveURL(/product_id=112601/);
  });

  test('PRODUCT_DETAIL_ERROR_Open_01 - URL không tồn tại', async ({ page }) => {
    const response = await openProduct(page, '/san-pham-khong-ton-tai-qa-000.html');
    expect(response.status()).toBe(404);
    // Nguyên văn đã xác minh trên trang thật; khác tiêu đề trong workbook cũ.
    await expect(page.getByText('Trang bạn đang tìm không tồn tại.', { exact: true })).toBeVisible();
    await expect(page.getByText('Vui lòng kiểm tra lại đường dẫn.', { exact: true })).toBeVisible();
  });

  test.skip('PRODUCT_DETAIL_ERROR_Security_01 - URL chứa payload script', async ({ page }) => {
    test.skip(true, 'Bỏ qua theo yêu cầu: URL payload trả HTTP 403, không truy cập trong automation.');
  });

  test('PRODUCT_DETAIL_COMPAT_Reload_01 - tải lại vẫn giữ màu và URL', async ({ page }) => {
    await openProduct(page);
    await chooseColor(page, 'Đen');
    const selectedUrl = page.url();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await dismissNotice(page);
    await expect(page).toHaveURL(selectedUrl);
    await expect(colorOption(page, 'Đen').locator('xpath=ancestor::li[contains(@class,"item-variant")]')).toHaveClass(/active/);
  });

  test('PRODUCT_DETAIL_COMPAT_Navigate_01 - Back rồi Forward', async ({ page }) => {
    await openProduct(page);
    await chooseColor(page, 'Đen');
    await page.getByRole('link', { name: /^512GB/ }).click();
    await expect(page).toHaveURL(/\/iphone-17-512gb\.html/);
    await page.goBack({ waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/\/iphone-17-256gb\.html\?product_id=\d+/);
    await expect(colorOption(page, 'Đen').locator('xpath=ancestor::li[contains(@class,"item-variant")]')).toHaveClass(/active/);
    await page.goForward({ waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/\/iphone-17-512gb\.html/);
  });

  test('PRODUCT_DETAIL_COMPAT_View_01 - hiển thị ở viewport 390x844', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await openProduct(page);
    await expect(page.locator('.swiper-slide-active img').first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^256GB/ })).toBeVisible();
    await expect(page.getByText('Màu sắc', { exact: true }).first()).toBeVisible();
    for (const element of [page.getByRole('link', {name: /^256GB/}), colorOption(page, 'Đen'), page.locator('.swiper-slide-active img').first()]) {
      await element.scrollIntoViewIfNeeded();
      const box = await element.boundingBox();
      expect(box).not.toBeNull();
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(390);
    }
  });
});


// Phạm vi CP/RV riêng để tránh trùng helper và dữ liệu với PD.
{
// Nguồn: workbook chính, So sánh SP (25) và Đánh giá SP (29).
// Selector khảo sát trên Chrome thật ngày 05/11/2026. Không đăng nhập/gửi review.
// test, expect và assertAvailable dùng fixture chung ở đầu file.
const PDP = '/iphone-17-256gb.html';
const COMPARE = '/so-sanh/iphone-17-256gb';
const IPHONE = 'iPhone 17 256GB | Chính hãng';
const PRO = 'iPhone 17 Pro 256GB | Chính hãng';
const SAMSUNG = 'Samsung Galaxy S26 Ultra 5G 12GB 256GB';
async function open(page, url = COMPARE) {
  await page.addLocatorHandler(page.getByRole('button', { name: 'Từ chối', exact: true }), async () => {
    // Cookie có thể nằm dưới modal so sánh. Đóng/mở modal bằng UI, giữ truy vấn.
    const modal = searchModal(page);
    const restoreSearch = await modal.isVisible();
    const query = restoreSearch ? await modal.getByPlaceholder('Nhập tên sản phẩm muốn so sánh').inputValue() : '';
    if (restoreSearch) await modal.getByRole('button', { name: 'close', exact: true }).click();
    await page.getByRole('button', { name: 'Từ chối', exact: true }).click();
    if (restoreSearch) {
      await page.getByText('Thêm sản phẩm để so sánh', { exact: true }).first().click();
      await expect(modal).toBeVisible();
      if (query) await modal.getByPlaceholder('Nhập tên sản phẩm muốn so sánh').fill(query);
    }
  });
  await page.addLocatorHandler(page.getByText('THÔNG BÁO', { exact: true }), async () => {
    await page.locator('.modal-card').filter({has:page.getByText('THÔNG BÁO',{exact:true})}).getByRole('button', {name:'close', exact:true}).click();
  });
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
  await assertAvailable(page, response);
  const region = page.locator('button.button__change-province');
  await expect(region).toBeVisible();
  await expect(region).not.toContainText(/Đang tải/, { timeout: 30000 });
}
const title = page => page.locator('h1.box-compare__title');
const columns = page => page.locator('.product-info--items > .product-info--item').filter({ has: page.locator('.product-name') });
const slots = page => page.locator('.product-info--items .box-none-product');
const searchModal = page => page.locator('.modal.is-active').filter({ has: page.getByPlaceholder('Nhập tên sản phẩm muốn so sánh') });
async function search(page, query = '') {
  await page.getByText('Thêm sản phẩm để so sánh', { exact: true }).first().click();
  const modal = searchModal(page);
  await expect(modal).toBeVisible();
  await expect(modal.getByText('Tìm sản phẩm để so sánh', { exact: true })).toBeVisible();
  if (query) await modal.getByPlaceholder('Nhập tên sản phẩm muốn so sánh').fill(query);
  return modal;
}
function productResult(page, name) {
  return searchModal(page).locator('.product-item').filter({ has: page.locator('.product-name', { hasText: new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }) });
}
async function add(page, name) {
  await search(page, name.replace(' | Chính hãng', ''));
  const result = productResult(page, name);
  await expect(result).toHaveCount(1);
  await result.getByText('+ Chọn để so sánh', { exact: true }).click();
  await expect(searchModal(page)).toBeHidden();
  await expect(title(page)).toContainText(name);
}
async function two(page) { await open(page); await add(page, PRO); await expect(columns(page)).toHaveCount(2); }
async function removeSecond(page) { await columns(page).nth(1).locator('.box-remove-icon a').click(); await expect(columns(page)).toHaveCount(1); }
function row(page, label) { return page.getByRole('row').filter({ has: page.locator('th', { hasText: new RegExp('^'+label+'$') }) }).first(); }

test.describe('So sánh sản phẩm', () => {
  test.setTimeout(60000);
  test('PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm', async ({ page }) => { await open(page); await expect(title(page)).toContainText(IPHONE); await expect(columns(page)).toHaveCount(1); await expect(slots(page)).toHaveCount(2); });
  // Khay PDP có đường chuẩn bị và cleanup riêng, chỉ dùng UI, không sửa localStorage.
  test('PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP', async ({ page }) => { await openTray(page); await expect(tray(page)).toContainText(/Đã chọn 1 sản\s+phẩm/); await expect(tray(page)).toContainText(IPHONE); await expect(tray(page).getByText('So sánh', { exact: true })).toBeVisible(); await attachTray(page); await clearTray(page); });
  test('PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm', async ({ page }) => { await open(page); const m=await search(page); await expect(m.getByPlaceholder('Nhập tên sản phẩm muốn so sánh')).toBeVisible(); await expect(m.locator('.select-to-compare').first()).toBeVisible(); });
  test('PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17', async ({ page }) => { await open(page); await search(page,'iPhone 17'); await expect(productResult(page,PRO)).toBeVisible(); await expect(productResult(page,PRO).locator('.select-to-compare')).toBeVisible(); });
  test('PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng', async ({ page }) => { await two(page); await expect(columns(page).nth(0)).toContainText(IPHONE); await expect(columns(page).nth(1)).toContainText(PRO); });
  test('PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng', async ({ page }) => { await open(page); await add(page,SAMSUNG); await expect(columns(page)).toHaveCount(2); await expect(columns(page).nth(0)).toContainText(IPHONE); await expect(columns(page).nth(1)).toContainText(SAMSUNG); await expect(page).toHaveURL(/so-sanh\/iphone-17-256gb-vs-/); });
  test('PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập', async ({ page }) => { await two(page); await add(page,SAMSUNG); await expect(columns(page)).toHaveCount(3); for(const [i,n] of [IPHONE,PRO,SAMSUNG].entries()) await expect(columns(page).nth(i)).toContainText(n); });
  test('PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay', async ({ page }) => { await openTray(page); await addToTray(page,PRO); await addToTray(page,SAMSUNG); await expect(tray(page)).toContainText(/Đã chọn 3 sản\s+phẩm/); await page.getByRole('link',{name:/^512GB/}).click(); await expect(page).toHaveURL(/iphone-17-512gb/); await page.locator('.pdp-compare-button-box .label').click(); await expect(tray(page)).toContainText(/Đã chọn 3 sản\s+phẩm/); for(const n of [IPHONE,PRO,SAMSUNG]) await expect(tray(page)).toContainText(n); await expect(tray(page)).not.toContainText('iPhone 17 512GB'); await attachTray(page); await clearTray(page); });
  test('PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP', async ({ page }) => { await openTray(page); await page.locator('.pdp-compare-button-box .label').click(); await expect(tray(page)).toContainText(/Đã chọn 1 sản\s+phẩm/); await expect(tray(page).locator('.compare-product.has-product')).toHaveCount(1); await attachTray(page); await clearTray(page); });
  test('PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai', async ({ page }) => { await two(page); await removeSecond(page); await expect(page).toHaveURL(/\/so-sanh\/iphone-17-256gb\/?$/); await expect(columns(page).first()).toContainText(IPHONE); await expect(slots(page)).toHaveCount(2); });
  test('PRODUCT_COMPARE_LIST_Remove_02 - bỏ cột cuối', async ({ page }) => { await open(page); await columns(page).first().locator('.box-remove-icon a').click(); await expect(page).toHaveURL(/\/so-sanh\/?$/); await expect(title(page)).toContainText(/So sánh sản phẩm/i); await expect(slots(page)).toHaveCount(3); });
  test('PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ', async ({ page }) => { await two(page); await removeSecond(page); await add(page,PRO); await expect(columns(page)).toHaveCount(2); await expect(columns(page).nth(1)).toContainText(PRO); });
  test('PRODUCT_COMPARE_SPECS_View_01 - tên hàng cơ bản', async ({ page }) => { await open(page); await expect(page.getByText('Thông tin cơ bản',{exact:true})).toBeVisible(); for(const n of ['Hệ điều hành khi ra mắt','Chipset','Bộ nhớ trong']) await expect(row(page,n)).toBeVisible(); });
  test('PRODUCT_COMPARE_SPECS_View_02 - dung lượng 256 GB', async ({ page }) => { await open(page); await expect(row(page,'Bộ nhớ trong').locator('td').first()).toContainText('256 GB'); });
  test('PRODUCT_COMPARE_SPECS_View_03 - giá trị cùng hàng Chipset', async ({ page }) => { await two(page); const r=row(page,'Chipset'); await expect(r.locator('th')).toHaveText('Chipset'); for(const i of [0,1]) await expect(r.locator('td').nth(i).locator('div')).toHaveText(/\S+/); });
  test('PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết', async ({ page }) => { await open(page); await page.getByText(/Xem so sánh cấu hình chi tiết/).click(); const m=page.locator('.box-popup__wrapper'); await expect(m.locator('.box-popup--title')).toContainText('So sánh chi tiết'); for(const n of ['Cấu hình & Bộ nhớ','Màn hình']) await expect(m.getByText(n,{exact:true}).first()).toBeVisible(); await expect(m.getByText('Đóng',{exact:true})).toBeVisible(); });
  test('PRODUCT_COMPARE_SEARCH_Search_02 - từ khóa không tồn tại', async ({ page }) => { await noResults(page,'zzzz_qa_22130275_987654'); });
  test('PRODUCT_COMPARE_SEARCH_Clear_01 - xóa từ khóa', async ({ page }) => { await open(page); const m=await search(page,'iPhone 17'); const input=m.getByPlaceholder('Nhập tên sản phẩm muốn so sánh'); await input.fill(''); await expect(input).toHaveValue(''); await expect(input).toHaveAttribute('placeholder','Nhập tên sản phẩm muốn so sánh'); await expect(columns(page)).toHaveCount(1); });
  test('PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách', async ({ page }) => { await noResults(page,'   '); });
  test('PRODUCT_COMPARE_SEARCH_Input_02 - ký tự đặc biệt', async ({ page }) => { await noResults(page,'@#$%&'); });
  test('PRODUCT_COMPARE_SEARCH_Input_03 - tiếng Việt có dấu', async ({ page }) => { await open(page); const m=await search(page,'Điện thoại'); await expect(m.getByPlaceholder('Nhập tên sản phẩm muốn so sánh')).toHaveValue('Điện thoại'); await expect(page).toHaveURL(/\/so-sanh\/iphone-17-256gb\/?$/); });
  test('PRODUCT_COMPARE_PAGE_Reload_01 - reload theo URL', async ({ page }) => { await open(page); const r=await page.reload({waitUntil:'domcontentloaded'}); await assertAvailable(page,r); await expect(title(page)).toContainText(IPHONE); await expect(row(page,'Bộ nhớ trong').locator('td').first()).toContainText('256 GB'); });
  test('PRODUCT_COMPARE_PAGE_Open_02 - tab mới từ URL', async ({ context }) => { const page=await context.newPage(); await open(page); await expect(title(page)).toContainText(IPHONE); await expect(slots(page)).toHaveCount(2); const screenshot=test.info().outputPath('compare-direct-tab.png'); await page.screenshot({path:screenshot}); await test.info().attach('compare-direct-tab',{path:screenshot,contentType:'image/png'}); await page.close(); });
  test('PRODUCT_COMPARE_PAGE_View_01 - chỉ kiểm tra href Mua ngay', async ({ page }) => { await open(page); await expect(columns(page).first().locator('a.product-detail-url')).toHaveAttribute('href','https://cellphones.com.vn/iphone-17-256gb.html'); });
  test('PRODUCT_COMPARE_PAGE_Responsive_01 - viewport 390x844', async ({ page }) => { await page.setViewportSize({width:390,height:844}); await open(page); await expect(title(page)).toBeVisible(); await expect(columns(page)).toHaveCount(1); await expect(slots(page)).toHaveCount(2); for(const el of [title(page),columns(page).first(),slots(page).first(),slots(page).nth(1)]) { const b=await el.boundingBox(); expect(b).not.toBeNull(); expect(b.x).toBeGreaterThanOrEqual(0); expect(b.x+b.width).toBeLessThanOrEqual(391); } await expect(row(page,'Bộ nhớ trong').locator('td').first()).toContainText('256 GB'); await search(page); test.info().annotations.push({type:'scope',description:'Kiểm tra geometry/phần tử; vẫn cần xem ảnh để đánh giá khả năng đọc toàn bố cục.'}); });
});
async function noResults(page,value){ await open(page); const m=await search(page,value); await expect(m.getByPlaceholder('Nhập tên sản phẩm muốn so sánh')).toHaveValue(value); await expect(m.getByText('Không tìm được sản phẩm phù hợp',{exact:true})).toBeVisible(); await expect(m.locator('.product-item')).toHaveCount(0); await expect(columns(page)).toHaveCount(1); await expect(page).toHaveURL(/\/so-sanh\/iphone-17-256gb\/?$/); }
// Khay selectors: điền từ DOM đã quan sát, không dựng trạng thái qua JS.
function tray(page){return page.locator('.compare-products');}
async function openTray(page){await open(page,PDP);await page.locator('.pdp-compare-button-box .label').click();await expect(tray(page)).toBeVisible();}
async function addToTray(page, name) {
  await tray(page).getByText('Chọn sản phẩm so sánh', { exact: true }).first().click();
  const popup = page.locator('.popup-select-product.show #select-product-to-compare');
  await expect(popup).toBeVisible();
  await popup.getByPlaceholder('Tìm sản phẩm muốn so sánh', { exact: true }).fill(name.replace(' | Chính hãng', ''));
  const result = popup.locator('.product-item').filter({ has: page.locator('.product-name', { hasText: name }) });
  await expect(result).toHaveCount(1);
  await result.getByText('Chọn', { exact: true }).click();
  await expect(popup).toBeHidden();
  await expect(tray(page)).toContainText(name);
}

async function attachTray(page) {
  const file = test.info().outputPath('compare-tray-before-cleanup.png');
  await tray(page).screenshot({path:file});
  await test.info().attach('compare-tray-before-cleanup', {path:file,contentType:'image/png'});
}

async function clearTray(page){const items=tray(page).locator('.compare-product.has-product');while(await items.count()){await items.first().locator('.remove-compare-product').click();}await expect(items).toHaveCount(0);}

const reviewBox = page => page.locator('.boxReview');
const cards = page => reviewBox(page).locator('#review .boxReview-comment-item');
async function reviews(page){await open(page,PDP);const box=reviewBox(page);await box.getByRole('heading',{name:'Đánh giá '+IPHONE,exact:true}).scrollIntoViewIfNeeded();await expect(box.locator('.boxReview-score__count')).toContainText(/\d+ lượt đánh giá/);return box;}
async function filter(page,label){const item=reviewBox(page).locator('.filter-item').filter({hasText:new RegExp('^\\s*'+label+'\\s*$')});await item.click();await expect(item).toHaveClass(/active/);return item;}
const emptyMessage = page => reviewBox(page).locator('p').filter({hasText:/^Hiện chưa có đánh giá nào\./});
async function emptyReviews(page){await expect(cards(page)).toHaveCount(0);await expect(emptyMessage(page)).toHaveText('Hiện chưa có đánh giá nào. Bạn sẽ là người đầu tiên đánh giá sản phẩm này chứ?');}

test.describe('Đánh giá sản phẩm',()=>{
 test.setTimeout(60000);
 test('PRODUCT_REVIEW_SUMMARY_View_01 - tiêu đề khu vực',async({page})=>{const b=await reviews(page);await expect(b.getByRole('heading',{name:'Đánh giá '+IPHONE,exact:true})).toBeVisible();});
 test('PRODUCT_REVIEW_SUMMARY_View_02 - điểm trung bình',async({page})=>{const b=await reviews(page);const score=b.locator('.average-rating');await expect(score).toHaveText(/^\d(?:\.\d+)?$/);const n=Number(await score.innerText());expect(n).toBeGreaterThanOrEqual(0);expect(n).toBeLessThanOrEqual(5);await expect(b.locator('.boxReview-score .rating')).toContainText('/5');});
 test('PRODUCT_REVIEW_SUMMARY_View_03 - tổng lượt hiện tại',async({page})=>{const b=await reviews(page);await expect(b.locator('.boxReview-score__count')).toHaveText(/^\s*\d+ lượt đánh giá\s*$/);});
 test('PRODUCT_REVIEW_SUMMARY_View_04 - phân bố năm sao',async({page})=>{const b=await reviews(page);const levels=b.locator('.rating-level');await expect(levels).toHaveCount(5);for(const [i,n]of[5,4,3,2,1].entries()){await expect(levels.nth(i).locator('.star-count')).toHaveText(String(n));await expect(levels.nth(i).locator('progress')).toBeVisible();await expect(levels.nth(i).locator('span')).toHaveText(/^\d+ đánh giá$/);}});
 test('PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm',async({page})=>{const b=await reviews(page);for(const n of ['Hiệu năng','Thời lượng pin','Chất lượng camera']){const item=b.locator('.experience-review__item').filter({has:page.getByText(n,{exact:true})});await expect(item.locator('.item-point')).toHaveText(/^\d(?:\.\d+)?\/5$/);await expect(item.locator('.item-review-count')).toContainText(/\d+ đánh giá/);}});
 test('PRODUCT_REVIEW_FILTER_Select_01 - lọc 5 sao',async({page})=>{await reviews(page);await filter(page,'5 sao');await expect(cards(page).first()).toBeVisible();await expect.poll(async()=>cards(page).locator('.rating-label').allTextContents()).toEqual(expect.arrayContaining(['Tuyệt vời']));for(const card of await cards(page).all()){await expect(card.locator('.rating-label')).toHaveText('Tuyệt vời');await expect(card.locator('.item-review-rating__star > .icon.is-active')).toHaveCount(5);}});
 for(const[n,id]of[[4,'02'],[3,'03'],[2,'04'],[1,'05']])test(`PRODUCT_REVIEW_FILTER_Select_${id} - nhánh rỗng ${n} sao`,async({page})=>{const b=await reviews(page);const level=b.locator('.rating-level').filter({has:page.locator('.star-count',{hasText:new RegExp('^\\s*'+n+'\\s*$')})});await expect(level.locator('progress')).toHaveAttribute('value',/^\d+$/);const count=Number(await level.locator('progress').getAttribute('value'));test.skip(count!==0,`Tiền đề workbook không còn: ${n} sao đang có ${count} đánh giá, không dùng case dữ liệu rỗng.`);await filter(page,`${n} sao`);await emptyReviews(page);});
 test('PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao',async({page})=>{await reviews(page);const count=Number(await reviewBox(page).locator('.rating-level').nth(1).locator('progress').getAttribute('value'));test.skip(count!==0,'Nhánh 4 sao rỗng trong workbook không còn đúng.');await filter(page,'4 sao');await emptyReviews(page);await filter(page,'Tất cả');await expect(cards(page).first()).toBeVisible();await expect(emptyMessage(page)).toBeHidden();});
 test('PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng',async({page})=>{await reviews(page);await filter(page,'Có hình ảnh');await emptyReviews(page);});
 test('PRODUCT_REVIEW_FILTER_Select_07 - Đã mua hàng',async({page})=>{await reviews(page);await filter(page,'Đã mua hàng');await expect(cards(page).first().locator('.bought-cps')).toBeVisible();await expect.poll(async()=>cards(page).count()).toBeGreaterThan(0);await expect.poll(async()=>await cards(page).count()-await cards(page).locator('.bought-cps').count()).toBe(0);for(const card of await cards(page).all())await expect(card.locator('.bought-cps')).toContainText('Đã mua tại CellphoneS');});
 test('PRODUCT_REVIEW_LIST_Open_01 - Xem tất cả đánh giá',async({page,context})=>{await reviews(page);const popup=context.waitForEvent('page');await reviewBox(page).getByText('Xem tất cả đánh giá',{exact:true}).click();const dest=await popup;await dest.waitForLoadState('domcontentloaded');await assertAvailable(dest);await expect(dest).toHaveURL('https://cellphones.com.vn/iphone-17-256gb/review');await expect(dest.getByText('Xem thêm đánh giá',{exact:true})).toBeVisible();await expect(dest.getByText(/Đánh giá.*iPhone 17 256GB/).first()).toBeVisible();await dest.screenshot({path:test.info().outputPath('review-full.png')});await test.info().attach('review-full',{path:test.info().outputPath('review-full.png'),contentType:'image/png'});await dest.close();});

 test.skip("PRODUCT_REVIEW_FORM_Open_01 - Mở form khi tài khoản thường đã đăng nhập",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_FORM_View_01 - Hiển thị năm nhãn đánh giá sao",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_RATING_Select_01 - Chọn mức sao thấp nhất",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_RATING_Switch_01 - Đổi từ sao thấp nhất sang cao nhất",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_View_01 - Hiển thị hướng dẫn tối thiểu 15 ký tự",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Clear_01 - Xóa nội dung về rỗng trước khi gửi",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Validate_01 - Nội dung ngắn hơn hướng dẫn tối thiểu",{annotation:{type:"skip-reason",description:"Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Input_01 - Nhập đúng 15 ký tự, chưa gửi",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Input_02 - Nhập 16 ký tự, chưa gửi",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Limit_01 - Nhập nội dung dài 1000 ký tự",{annotation:{type:"skip-reason",description:"Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Validate_02 - Nội dung chỉ có 15 dấu cách",{annotation:{type:"skip-reason",description:"Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Input_03 - Nhập ký tự đặc biệt dưới dạng văn bản",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Input_04 - Nhập tiếng Việt và emoji",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_CONTENT_Security_01 - Nhập chuỗi script như văn bản, không gửi",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
 test.skip("PRODUCT_REVIEW_ATTACHMENT_View_01 - Hiển thị tùy chọn thêm ảnh và loại file khai báo",{annotation:{type:"skip-reason",description:"Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá."}},async()=>{});
});

}
