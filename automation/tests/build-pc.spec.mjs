import {test, expect} from '@playwright/test';
import {BuildPcPage, BUILD_PC_PATH} from '../pages/build-pc.mjs';

test.beforeEach(async ({page}) => {await new BuildPcPage(page).open();});

test('PC-001 PC-002 PC-023: trang và trạng thái rỗng', async ({page}) => {
  await new BuildPcPage(page).assertEmpty();
});

test('PC-003: từ danh mục máy tính tới Build PC', async ({page}) => {
  await page.getByRole('link', {name: 'Máy tính để bàn', exact: true}).first().click();
  await page.getByRole('link', {name: 'Build PC', exact: true}).first().click();
  await expect(page).toHaveURL(new RegExp(BUILD_PC_PATH.replaceAll('.', '\\.')));
  await expect(page.getByRole('heading', {name: 'Build PC', exact: true})).toBeVisible();
});

test('PC-004 PC-005: mở và đóng CPU không chọn', async ({page}) => {
  const pc = new BuildPcPage(page);
  await pc.openGroup('CPU');
  await expect(pc.cards.first().getByRole('heading', {level: 3})).toContainText(/CPU/i);
  await pc.closeGroup();
  await pc.assertEmpty();
});

test('PC-006 PC-019: chọn CPU và tổng một linh kiện', async ({page}) => {
  const pc = new BuildPcPage(page);
  const product = await pc.choose('CPU');
  await expect(pc.selected).toHaveCount(1);
  expect(await pc.total()).toBe(product.price);
});

test('PC-007..014: chọn đủ tám nhóm cốt lõi', async ({page}, testInfo) => {
  const pc = new BuildPcPage(page);
  const selected = [];
  for (const group of ['CPU', 'Mainboard', 'RAM', 'Ổ cứng SSD', 'Card màn hình', 'Nguồn máy tính', 'Case máy tính', 'Tản nhiệt CPU']) {
    selected.push(await pc.choose(group));
    await expect(pc.selected).toHaveCount(selected.length);
    expect((await pc.items()).map(x => x.name)).toEqual(expect.arrayContaining(selected.map(x => x.name)));
    await pc.assertTotal();
  }
  await testInfo.attach('products.json', {body: JSON.stringify(selected, null, 2), contentType: 'application/json'});
});

test('PC-015 PC-021: thay CPU và tính chênh lệch', async ({page}) => {
  const pc = new BuildPcPage(page);
  const a = await pc.choose('CPU');
  const ram = await pc.choose('RAM');
  const previous = await pc.total();
  const b = await pc.choose('CPU', {exclude: a.name});
  await expect(pc.selected).toHaveCount(2);
  await expect(pc.row('RAM').getByRole('heading', {name: ram.name, exact: true})).toBeVisible();
  expect(await pc.total()).toBe(previous - a.price + b.price);
});

test('PC-016 PC-017 PC-022: thay/xóa RAM giữ SSD', async ({page}) => {
  const pc = new BuildPcPage(page);
  await pc.choose('CPU');
  const ramA = await pc.choose('RAM');
  const ssd = await pc.choose('Ổ cứng SSD');
  const ramB = await pc.choose('RAM', {exclude: ramA.name});
  await expect(pc.row('Ổ cứng SSD').getByRole('heading', {name: ssd.name, exact: true})).toBeVisible();
  await pc.assertTotal();
  const previous = await pc.total();
  await pc.remove('RAM');
  expect(await pc.total()).toBe(previous - ramB.price);
  await expect(pc.row('Ổ cứng SSD').getByRole('heading', {name: ssd.name, exact: true})).toBeVisible();
});

test('PC-018 PC-020: ba linh kiện, cộng giá và reset', async ({page}) => {
  const pc = new BuildPcPage(page);
  for (const group of ['CPU', 'RAM', 'Ổ cứng SSD']) await pc.choose(group);
  await expect(pc.selected).toHaveCount(3);
  await pc.assertTotal();
  await pc.reset();
});

test('PC-025 PC-026: tìm CPU và chuỗi không khớp', async ({page}) => {
  const pc = new BuildPcPage(page);
  await pc.openGroup('CPU');
  const name = await pc.cards.first().getByRole('heading', {level: 3}).innerText();
  await pc.search.fill(name);
  await expect(pc.cards.first().getByRole('heading', {level: 3})).toContainText(name);
  await pc.search.fill('zzx_no_product_987654');
  await expect(page.getByText('Không tìm thấy sản phẩm', {exact: true})).toBeVisible();
  await expect(pc.cards).toHaveCount(0);
  await pc.search.fill('');
  await expect(pc.cards.first()).toBeVisible();
});

test('PC-030: nhấp đúp không thêm CPU trùng', async ({page}) => {
  const pc = new BuildPcPage(page);
  const cpu = await pc.choose('CPU', {doubleClick: true});
  await expect(pc.selected).toHaveCount(1);
  expect((await pc.items())[0].quantity).toBe(1);
  expect(await pc.total()).toBe(cpu.price);
});

test('Bổ sung: tăng/giảm số lượng và hủy xóa tại 1', async ({page}) => {
  const pc = new BuildPcPage(page);
  const cpu = await pc.choose('CPU');
  await pc.row('CPU').getByRole('button', {name: '+', exact: true}).click();
  await expect.poll(() => pc.total()).toBe(cpu.price * 2);
  await pc.row('CPU').getByRole('button', {name: '-', exact: true}).click();
  await expect.poll(() => pc.total()).toBe(cpu.price);
  await pc.row('CPU').getByRole('button', {name: '-', exact: true}).click();
  await expect(page.getByText('Bạn có muốn xoá sản phẩm này ?', {exact: true})).toBeVisible();
  await page.getByText('Không', {exact: true}).click();
  expect((await pc.items())[0].quantity).toBe(1);
  expect(await pc.total()).toBe(cpu.price);
});

// Không tạo test skip giả làm kết quả thực thi cho PC-024, PC-027–029.
// Các case này có trạng thái Blocked/N/A và lý do trong execution-report.md.
