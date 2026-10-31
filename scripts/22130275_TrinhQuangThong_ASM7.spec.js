const { test, expect } = require('@playwright/test');

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
    await openProduct(page);
    await chooseColor(page, 'Xanh Lá Xô Thơm');
    await expect(page).toHaveURL(/product_id=112602/);
    await expect(activeProductImage(page)).toBeVisible();
    await expect(activeProductImage(page)).toHaveAttribute('alt', 'Xanh Lá Xô Thơm');
    await expect(activeProductImage(page)).toHaveAttribute('src', /sage/);
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
    await openProduct(page);
    const promotion = page.locator('.box-product-promotion-header').filter({ hasText: 'Khuyến mãi đi kèm' });
    await expect(promotion).toBeVisible();
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
    await page.goBack();
    await expect(page).toHaveURL(/\/iphone-17-256gb\.html\?product_id=\d+/);
    await expect(colorOption(page, 'Đen').locator('xpath=ancestor::li[contains(@class,"item-variant")]')).toHaveClass(/active/);
    await page.goForward();
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
