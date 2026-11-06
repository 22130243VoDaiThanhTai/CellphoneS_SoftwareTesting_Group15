const {test, expect, assertAvailable} = require('../../support/fixtures.cjs');
const HOME='/sforum';
const search=page=>page.getByPlaceholder('Tìm kiếm',{exact:true});
const articles=page=>page.locator('main a').filter({has:page.locator('h3')});
async function open(page){await assertAvailable(page,await page.goto(HOME,{waitUntil:'domcontentloaded'}));await expect(search(page)).toBeVisible();await expect(page.getByRole('link',{name:'Tin công nghệ',exact:true}).first()).toBeVisible({timeout:30000});}
async function find(page,term){await search(page).fill(term);await search(page).press('Enter');await expect(page).toHaveURL(new RegExp('/sforum/search\\?tim_kiem='+encodeURIComponent(term),'i'));}
test.beforeEach(async ({page})=>open(page));
test('SF-001: trang chủ có logo và danh sách bài viết',async ({page})=>{
  await expect(page.locator('#logo-header')).toBeVisible();
  await expect(page.locator('h3').filter({visible:true}).first()).toBeVisible();
  expect(await page.locator('h3').count()).toBeGreaterThan(0);
});
test('SF-002: tìm iPhone bằng Enter và kiểm tra kết quả liên quan',async ({page})=>{
  await find(page,'iPhone');
  await expect(page.locator('h1')).toContainText('iPhone');
  await expect(page.locator('h3').filter({visible:true}).first()).toContainText(/iPhone/i);
  const titles=await page.locator('main h3').allTextContents();
  expect(titles.filter(x=>/iPhone/i.test(x)).length).toBeGreaterThan(0);
});
test('SF-003: từ khóa không tồn tại hiển thị trạng thái rỗng',async ({page})=>{
  await find(page,'zzxnoarticle987654');
  await expect(page.getByText(/Không tìm thấy|Không có kết quả|không tìm được/i).first()).toBeVisible();
});
test('SF-004: mở bài từ kết quả và đối chiếu tiêu đề, nội dung',async ({page})=>{
  await find(page,'iPhone');
  const heading=page.locator('main h3').first();
  // Search results load after the sidebar. Wait for the relevant result, not a popular sidebar article.
  await expect(heading).toContainText(/iPhone/i);
  const title=(await heading.innerText()).trim();
  await heading.click();
  await expect(page).not.toHaveURL(/\/search\?/);
  await expect(page.locator('h1')).toHaveText(title);
  await expect(page.locator('article')).toBeVisible();
  expect((await page.locator('article').innerText()).length).toBeGreaterThan(300);
});
test('SF-005: điều hướng danh mục Tin công nghệ',async ({page})=>{
  const link=page.getByRole('link',{name:'Tin công nghệ',exact:true}).first();
  await expect(link).toBeVisible();
  const href=await link.getAttribute('href');
  await link.click();
  await expect(page).toHaveURL(new URL(href,'https://cellphones.com.vn').href);
  await expect(page.locator('h1')).toContainText(/Tin công nghệ/i);
  await expect(page.locator('h3').filter({visible:true}).first()).toBeVisible();
});
test('SF-006: logo đưa từ kết quả tìm kiếm về trang chủ Sforum',async ({page})=>{
  await find(page,'iPhone');
  await page.locator('#logo-header').click();
  await expect(page).toHaveURL(/\/sforum\/?$/);
  await expect(page.getByText('NỔI BẬT NHẤT',{exact:true})).toBeVisible();
});
