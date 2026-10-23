import {expect} from '@playwright/test';

export const BUILD_PC_PATH = '/may-tinh-de-ban/build-pc.html';
export const GROUPS = ['CPU', 'Mainboard', 'Card màn hình', 'RAM', 'Ổ cứng SSD', 'Ổ cứng HDD', 'Case máy tính', 'Nguồn máy tính', 'Tản nhiệt CPU', 'Tản nhiệt Case', 'Màn hình', 'Chuột', 'Bàn phím', 'Tai nghe'];

export function parseVnd(text) {
  if (!/\d/.test(text) || !/[đ₫]/.test(text)) throw new Error(`Không đọc được giá VND: ${text}`);
  return Number(text.replace(/\D/g, ''));
}

export class BuildPcPage {
  constructor(page) {
    this.page = page;
    // Cấu trúc và tên lớp đã đối chiếu với DOM ngày 23/10/2026.
    this.rows = page.locator('.build-component-area > .build-component');
    this.selected = page.locator('.build-component-complete');
    this.cards = page.locator('.product-info').filter({has: page.locator('.button__select')});
    this.search = page.getByRole('textbox', {name: 'Bạn cần tìm gì?', exact: true});
  }
  row(group) {
    const index = GROUPS.indexOf(group);
    if (index < 0) throw new Error(`Nhóm chưa được hỗ trợ: ${group}`);
    return this.rows.nth(index);
  }
  async open() {
    await this.page.goto(BUILD_PC_PATH, {waitUntil: 'domcontentloaded'});
    await expect(this.page.getByRole('heading', {name: 'Build PC', exact: true})).toBeVisible();
    await expect(this.rows).toHaveCount(GROUPS.length);
    await this.dismissPromotion();
  }
  async dismissPromotion() {
    const dismiss = this.page.getByRole('button', {name: 'Bữa khác nha!', exact: true});
    if (await dismiss.isVisible()) await dismiss.click();
  }
  async openGroup(group) {
    await this.dismissPromotion();
    const row = this.row(group);
    const replace = row.getByRole('button', {name: 'Thay đổi', exact: true});
    if (await replace.isVisible()) await replace.click();
    else await row.getByRole('button', {name: 'Chọn', exact: true}).click();
    await expect(this.search).toBeVisible();
    await expect(this.cards.first()).toBeVisible();
  }
  async closeGroup() {
    await this.page.getByRole('button', {name: 'close', exact: true}).filter({visible: true}).click();
    await expect(this.search).toBeHidden();
  }
  async choose(group, {exclude, doubleClick = false} = {}) {
    await this.openGroup(group);
    let chosen;
    for (const card of await this.cards.all()) {
      const name = await card.getByRole('heading', {level: 3}).innerText();
      if (exclude && name === exclude) continue;
      chosen = {name, price: parseVnd(await card.locator('.product__price--show').innerText())};
      const button = card.getByText('Chọn', {exact: true});
      if (doubleClick) await button.dblclick();
      else await button.click();
      break;
    }
    expect(chosen, `Không có sản phẩm phù hợp cho ${group}`).toBeTruthy();
    await expect(this.search).toBeHidden();
    await expect(this.row(group).getByRole('heading', {name: chosen.name, exact: true})).toBeVisible();
    expect(parseVnd(await this.row(group).locator('.special-price').innerText())).toBe(chosen.price);
    return chosen;
  }
  async total() {return parseVnd(await this.page.locator('.total-money-box .money-number').innerText());}
  async items() {
    return this.selected.evaluateAll(rows => rows.map(row => ({
      name: row.querySelector('h3').textContent.trim(),
      price: Number(row.querySelector('.special-price').textContent.replace(/\D/g, '')),
      quantity: Number(row.querySelector('.set-quantity span').textContent.trim())
    })));
  }
  async assertTotal() {
    const items = await this.items();
    expect(items.length).toBeGreaterThan(0);
    const sum = items.reduce((total, item) => total + item.price * item.quantity, 0);
    await expect.poll(() => this.total()).toBe(sum);
  }
  async remove(group) {
    await this.row(group).getByText('Xóa', {exact: true}).click();
    await expect(this.page.getByText('Bạn có muốn xoá sản phẩm này ?', {exact: true})).toBeVisible();
    await this.page.getByText('Có', {exact: true}).click();
    await expect(this.row(group).getByRole('button', {name: 'Chọn', exact: true})).toBeVisible();
  }
  async reset() {
    await this.page.getByText('Chọn lại từ đầu', {exact: true}).first().click();
    await this.page.getByText('Chọn lại từ đầu', {exact: true}).last().click();
    await this.assertEmpty();
  }
  async assertEmpty() {
    await expect(this.selected).toHaveCount(0);
    await expect(this.page.getByText('Bạn chưa chọn cấu hình nào', {exact: true})).toBeVisible();
    await expect(this.page.locator('.total-money-box .money-number')).toBeHidden();
  }
}
