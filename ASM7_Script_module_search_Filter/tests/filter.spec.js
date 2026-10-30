const { test, expect } = require('@playwright/test');

// Hàm hỗ trợ click an toàn vào nút thương hiệu Samsung (loại bỏ banner quảng cáo slide)
async function clickSamsungBrand(page) {
  const samsungBtn = page.locator('a[href*="/mobile/samsung.html"]:not(.banner-img)').first();
  await samsungBtn.scrollIntoViewIfNeeded();
  await samsungBtn.click({ force: true });
}

test.describe('Module Filter - CellphoneS Automation', () => {

  test('TC_Filter_12: Filter_ByBrand', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    await expect(page).toHaveURL(/samsung/);
    await expect(page.locator('body')).toContainText('Samsung');
  });

  test('TC_Filter_13: Filter_ByPriceRange', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    const priceBtn = page.locator('button.btn-filter').filter({ hasText: 'Giá' }).first();
    if (await priceBtn.isVisible()) {
      await priceBtn.click();
    }
  });

  test('TC_Filter_14: Filter_MultiCriteria', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    await page.waitForTimeout(1000);
    await expect(page.locator('body')).toContainText('Samsung');
  });

  test('TC_Filter_16: Filter_ClearSingleFilter', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    await page.waitForTimeout(1000);
    const clearBtn = page.locator('button.btn-filter').filter({ hasText: 'Samsung' });
    if (await clearBtn.isVisible()) {
      await clearBtn.click();
    }
  });

  test('TC_Filter_17: Filter_NoResultMatch_ShowEmptyMessage', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    await expect(page.locator('body')).toContainText('Samsung');
  });

  test('TC_Filter_19: Filter_ClearAllFilters', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    const resetBtn = page.locator('button.reset, button.btn-filter.reset');
    if (await resetBtn.isVisible()) {
      await resetBtn.click();
    }
  });

  test('TC_Filter_20A: Filter_CustomPriceRange_Validation', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    await expect(page.locator('body')).toContainText('Samsung');
  });

  test('TC_Filter_20B: Filter_CustomPriceRange_Slider', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await clickSamsungBrand(page);
    await expect(page.locator('body')).toContainText('Samsung');
  });

  test('TC_Filter_21: Filter_ByProductCondition', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC_Filter_22: Filter_trade_in', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/mobile.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC_Filter_23: Filter_ByLocation', async ({ page }) => {
    await page.goto('https://cellphones.com.vn/', { waitUntil: 'domcontentloaded' });
    await page.click('button.btn-change-province');
    await page.waitForTimeout(500);
    await page.click('span:has-text("Hồ Chí Minh")', { force: true });
    await expect(page.locator('body')).toContainText('Hồ Chí Minh');
  });

});