const {test, expect, assertAvailable} = require('../../support/fixtures.cjs');
const STORE='/dia-chi-cua-hang';
const cards=page=>page.locator('.boxMap-store');
async function open(page) {
  await assertAvailable(page,await page.goto(STORE,{waitUntil:'domcontentloaded'}));
  await expect(page.locator('select.button__search-province option')).not.toHaveCount(1);
  await expect(cards(page).first()).toBeVisible();
}
async function province(page,label) {
  await page.locator('select.button__search-province').selectOption({label});
  await expect(page.locator('select.button__search-province option:checked')).toHaveText(label);
}
test.beforeEach(async ({page})=>open(page));
test('ST-001: mở trang và đối chiếu số cửa hàng hiển thị',async ({page})=>{
  const n=await cards(page).count();
  expect(n).toBeGreaterThan(0);
  await expect(page.locator('.boxMap-store-count')).toContainText(new RegExp(`Có\\s+${n}\\s+cửa hàng`));
});
test('ST-002: lọc Hồ Chí Minh chỉ hiển thị địa chỉ cùng tỉnh',async ({page})=>{
  await province(page,'Hồ Chí Minh');
  await expect.poll(async()=>await cards(page).locator('.boxMap-store-address').allTextContents()).toEqual(expect.arrayContaining([expect.stringMatching(/TP\. HCM|Hồ Chí Minh/)]));
  const names=await cards(page).locator('.boxMap-store-address').allTextContents();
  expect(names.length).toBeGreaterThan(0);
  for(const name of names) expect(name).toMatch(/TP\. HCM|Hồ Chí Minh/i);
});
test('ST-003: lọc Quận 1 và đối chiếu địa chỉ',async ({page})=>{
  await province(page,'Hồ Chí Minh');
  await expect(page.locator('select.button__search-district option')).not.toHaveCount(1);
  await page.locator('select.button__search-district').selectOption({label:'Quận 1'});
  await expect.poll(()=>cards(page).count()).toBeGreaterThan(0);
  await expect.poll(async()=>{const x=await cards(page).locator('.boxMap-store-address').allTextContents(); return x.length>0 && x.every(t=>/Q\.?\s*1(?:,|\s)|Quận 1(?:,|\s)/i.test(t));}).toBe(true);
});
test('ST-004: đổi tỉnh sang Hà Nội và reset quận',async ({page})=>{
  await province(page,'Hồ Chí Minh');
  await page.locator('select.button__search-district').selectOption({label:'Quận 1'});
  await province(page,'Hà Nội');
  await expect(page.locator('select.button__search-district')).toHaveValue('0');
  await expect.poll(async()=>{const a=await cards(page).locator('.boxMap-store-address').allTextContents();return a.length>0&&a.every(x=>/Hà Nội/i.test(x));}).toBe(true);
});
test('ST-005: cửa hàng có địa chỉ, giờ mở cửa và số điện thoại hợp lệ',async ({page})=>{
  const c=cards(page).first();
  await expect(c.locator('.boxMap-store-address')).toContainText('CellphoneS');
  await expect(c.locator('.boxMap-store-time')).toContainText(/\d{1,2}h\d{2}/);
  const phone=(await c.locator('.boxMap-store-phone').innerText()).replace(/\D/g,'');
  expect(phone).toMatch(/^0\d{9,10}$/);
  await expect(c.locator('a[href^="tel:"]')).toHaveAttribute('href',`tel:${phone}`);
});
test('ST-006: liên kết chỉ đường có đích Google Maps hợp lệ',async ({page})=>{
  const c=cards(page).first();
  const url=new URL(await c.getByRole('link',{name:/Xem đường đi/}).getAttribute('href'));
  expect(url.hostname).toBe('www.google.com');
  expect(url.pathname).toBe('/maps');
  expect(url.searchParams.get('daddr')).toContain('CellphoneS');
  expect(url.searchParams.get('daddr').length).toBeGreaterThan(15);
});
