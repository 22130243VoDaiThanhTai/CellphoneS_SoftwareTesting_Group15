// Nguồn: workbook chính, So sánh SP (25) và Đánh giá SP (29).
// Selector khảo sát trên Chrome thật ngày 05/11/2026. Không đăng nhập/gửi review.
const { test, expect, assertAvailable } = require('../../support/fixtures.cjs');
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
