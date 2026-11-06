const {test,expect,assertAvailable}=require('../../support/fixtures.cjs');
// Public-read adapter of ThanhTai's Python flow. Checkout/login/payment needs a test account and environment.
async function open(page){
  await assertAvailable(page,await page.goto('/iphone-18-pro-max.html',{waitUntil:'domcontentloaded'}));
  await expect(page.locator('#installmentCta').first()).toBeVisible();
  await page.locator('#installmentCta').first().click();
  await expect(page.locator('p > select').first()).toBeVisible();
}
test('TT-001: mở thông tin trả góp qua công ty tài chính',async ({page})=>{
  await open(page);
  await expect(page.locator('p > select').first()).toBeVisible();
  await expect(page.locator('p > select').first().locator('option')).not.toHaveCount(0);
});
test('TT-002: tỷ lệ trả trước giữ đúng lựa chọn 0,30,50,80',async ({page})=>{
  await open(page);
  const select=page.locator('p > select').first();
  for(const value of ['0','30','50','80']){await select.selectOption(value);await expect(select).toHaveValue(value);}
});
test('TT-003: checkout, đăng nhập và chuyển cổng thanh toán',async()=>{test.skip(true,'Source cần tài khoản Smember và luồng đặt mua/thanh toán. Chưa có môi trường test và dữ liệu tài khoản.');});
