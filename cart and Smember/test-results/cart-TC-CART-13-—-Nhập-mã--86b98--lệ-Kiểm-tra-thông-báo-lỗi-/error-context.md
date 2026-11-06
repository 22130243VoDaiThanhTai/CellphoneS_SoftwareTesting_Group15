# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> TC_CART_13 — Nhập mã giảm giá không hợp lệ (Kiểm tra thông báo lỗi)
- Location: tests\cart.spec.js:6:3

# Error details

```
Error: No visible match for "input[name='coupon']". URL=https://cellphones.com.vn/cart/
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - banner [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e10]:
        - generic [ref=e11]:
          - text: Sản phẩm
          - strong [ref=e15]: Chính hãng - Xuất VAT
          - text: đầy đủ
        - generic [ref=e16]:
          - strong [ref=e20]: Giao nhanh - Miễn phí
          - text: cho đơn 300k
        - generic [ref=e21]:
          - strong [ref=e24]: Thu cũ
          - text: giá ngon -
          - strong [ref=e25]: Lên đời
          - text: tiết kiệm
        - generic [ref=e26]:
          - text: Sản phẩm
          - strong [ref=e30]: Chính hãng - Xuất VAT
          - text: đầy đủ
        - generic [ref=e31]:
          - strong [ref=e35]: Giao nhanh - Miễn phí
          - text: cho đơn 300k
        - generic [ref=e36]:
          - strong [ref=e39]: Thu cũ
          - text: giá ngon -
          - strong [ref=e40]: Lên đời
          - text: tiết kiệm
      - generic [ref=e41]:
        - link "Cửa hàng gần bạn" [ref=e42] [cursor=pointer]:
          - /url: https://cellphones.com.vn/dia-chi-cua-hang
        - link "Tra cứu đơn hàng" [ref=e48] [cursor=pointer]:
          - /url: https://smember.com.vn/order?company_id=cellphones
        - link "1800 2097" [ref=e53] [cursor=pointer]:
          - /url: tel:18002097
    - generic [ref=e57]:
      - link "Logo CellphoneS Logo CellphoneS" [ref=e58] [cursor=pointer]:
        - /url: https://cellphones.com.vn/
        - img "Logo CellphoneS" [ref=e59]
        - img "Logo CellphoneS"
      - button "Danh mục" [ref=e85] [cursor=pointer]
      - button "Hồ Chí Minh" [ref=e93] [cursor=pointer]
      - textbox "Bạn muốn mua gì hôm nay?" [ref=e108]
      - generic [ref=e109] [cursor=pointer]: Giỏ hàng
      - button "Đăng nhập" [ref=e117] [cursor=pointer]
  - generic [ref=e122]:
    - navigation "Breadcrumb" [ref=e124]:
      - generic [ref=e125]:
        - generic [ref=e126]: Tiếp tục mua sắm
        - generic [ref=e131]:
          - generic [ref=e132]: /
          - generic [ref=e133]: Giỏ hàng của bạn
      - generic [ref=e135]: Miễn phí vận chuyển với đơn hàng từ 300.000đ
    - generic [ref=e139]:
      - generic [ref=e140]:
        - tablist "Loai gio hang" [ref=e141]:
          - generic [ref=e142]: Tất cả
          - tab "Mặc định" [ref=e147] [cursor=pointer]
        - generic [ref=e169]:
          - paragraph [ref=e170]: Giỏ hàng của bạn đang trống. Hãy chọn thêm sản phẩm để mua sắm nhé
          - link "Xem thêm sản phẩm" [ref=e171] [cursor=pointer]:
            - /url: https://cellphones.com.vn/
      - generic [ref=e172]:
        - complementary [ref=e173]:
          - generic [ref=e174]:
            - generic [ref=e175]: Thông tin đơn hàng
            - generic [ref=e176]:
              - generic [ref=e177]:
                - paragraph [ref=e178]: Số lượng sản phẩm
                - paragraph [ref=e179]: "-"
              - generic [ref=e180]:
                - paragraph [ref=e181]: Tổng tiền hàng
                - paragraph [ref=e182]: "-"
            - separator [ref=e183]
            - generic [ref=e185]:
              - paragraph [ref=e186]: Giảm giá trực tiếp
              - paragraph [ref=e187]: "-"
            - separator [ref=e188]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e192]: TỔNG TIỀN
                - generic [ref=e193]: (Đã bao gồm VAT và được làm tròn)
              - paragraph [ref=e194]: "-"
          - button "Mua ngay Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng" [disabled] [ref=e197]:
            - generic [ref=e198]: Mua ngay
            - generic [ref=e199]: Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng
        - complementary [ref=e201]:
          - img "QR tải app" [ref=e202]
          - generic [ref=e203]: Đăng nhập qua ứng dụng CellphoneS để tận hưởng thêm nhiều ưu đãi
```

# Test source

```ts
  1 | const { expect } = require('@playwright/test');
  2 | const ENV = Object.fromEntries(['SMEMBER_PHONE','SMEMBER_PASSWORD','SMEMBER_NEW_PASSWORD','SMEMBER_EMAIL'].map(k => [k, process.env[k] || '']));
  3 | function substitute(value) { return String(value ?? '').replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => { if (!ENV[key]) throw new Error(`Missing required environment variable: ${key}`); return ENV[key]; }); }
  4 | function candidates(target) { if (Array.isArray(target)) return target.map(x => typeof x === 'string' ? x : x.selector).filter(Boolean); return String(target).split(/,\s*(?![^\[]*\])/).map(x => x.trim()).filter(Boolean); }
  5 | function locator(page, selector) { return selector.startsWith('//') || selector.startsWith('(//') ? page.locator(`xpath=${selector}`) : page.locator(selector); }
> 6 | async function visible(page, target) { for (const s of candidates(target)) { const l=locator(page,s).first(); try { await l.waitFor({state:'visible',timeout:5000}); return l; } catch {} } throw new Error(`No visible match for ${JSON.stringify(target)}. URL=${page.url()}`); }
    |                                                                                                                                                                                                   ^ Error: No visible match for "input[name='coupon']". URL=https://cellphones.com.vn/cart/
  7 | async function runGhostSteps(page, steps) { for (const step of steps) { const target=substitute(step.target||''); const value=substitute(step.value||''); if(step.command==='goto') await page.goto(target,{waitUntil:'domcontentloaded'}); else if(['fill','assign'].includes(step.command)) await (await visible(page,target)).fill(value); else if(step.command==='click') await (await visible(page,target)).click(); else if(step.command==='assertElementPresent') await expect(await visible(page,target)).toBeVisible(); else if(step.command==='assertText') await expect(page.locator('body')).toContainText(value); else if(step.command==='select') await (await visible(page,target)).selectOption(value); else if(step.command==='reload') await page.reload({waitUntil:'domcontentloaded'}); else throw new Error(`Unsupported command: ${step.command}`); } }
  8 | module.exports={runGhostSteps};
  9 | 
```