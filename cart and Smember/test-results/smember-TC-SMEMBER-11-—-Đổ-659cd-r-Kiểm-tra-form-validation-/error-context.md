# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smember.spec.js >> TC_SMEMBER_11 — Đổi mật khẩu tài khoản Smember (Kiểm tra form validation)
- Location: tests\smember.spec.js:6:3

# Error details

```
Error: Missing required environment variable: TEST_PHONE
```

# Page snapshot

```yaml
- generic [ref=f22e1]:
  - generic [ref=f22e3]:
    - generic [ref=f22e6]:
      - generic [ref=f22e7]:
        - generic [ref=f22e8]:
          - link [ref=f22e9] [cursor=pointer]:
            - /url: https://cellphones.com.vn
            - img "CellphoneS" [ref=f22e10]
          - link [ref=f22e11] [cursor=pointer]:
            - /url: https://dienthoaivui.com.vn
            - img "Điện thoại vui" [ref=f22e12]
        - generic [ref=f22e13]:
          - generic [ref=f22e14]: Nhập hội khách hàng thành viên SMEMBER
          - generic [ref=f22e15]: Để không bỏ lỡ các ưu đãi hấp dẫn từ CellphoneS
      - generic [ref=f22e16]:
        - generic [ref=f22e18]:
          - img "Pattern"
          - generic [ref=f22e19]:
            - generic [ref=f22e23]:
              - strong [ref=f22e24]: Chiết khấu đến 5%
              - text: khi mua các sản phẩm mua tại CellphoneS
            - generic [ref=f22e28]:
              - strong [ref=f22e29]: Miễn phí giao hàng
              - text: cho thành viên SMEM, SVIP và cho đơn hàng từ 300.000đ
            - generic [ref=f22e33]:
              - strong [ref=f22e34]: Tặng voucher sinh nhật đến 500.000đ
              - text: cho khách hàng thành viên
            - generic [ref=f22e38]:
              - text: Trợ giá thu cũ lên đời
              - strong [ref=f22e39]: đến 1 triệu
            - generic [ref=f22e43]:
              - text: Thăng hạng nhận voucher
              - strong [ref=f22e44]: đến 300.000đ
            - generic [ref=f22e48]:
              - text: Đặc quyền S-Student/S-Teacher
              - strong [ref=f22e49]: ưu đãi thêm đến 10%
            - generic [ref=f22e53]:
              - strong [ref=f22e54]: "S-Business:"
              - text: Chiết khấu đến 8% dành riêng cho khách hàng doanh nghiệp
          - link "Xem chi tiết chính sách ưu đãi Smember" [ref=f22e55] [cursor=pointer]:
            - /url: https://cellphones.com.vn/uu-dai-smember
        - img "Ant Promotion Smember"
    - generic [ref=f22e62]:
      - generic [ref=f22e63]:
        - heading "Đăng nhập SMEMBER" [level=1] [ref=f22e64]
        - generic [ref=f22e65]:
          - generic [ref=f22e66]:
            - generic [ref=f22e67]: Số điện thoại
            - textbox "Nhập số điện thoại của bạn" [active] [ref=f22e70]
          - generic [ref=f22e71]:
            - generic [ref=f22e72]: Mật khẩu
            - generic [ref=f22e74]:
              - textbox "Nhập mật khẩu của bạn" [ref=f22e75]
              - button "Show password" [ref=f22e76] [cursor=pointer]
          - generic [ref=f22e79]:
            - button "Đăng nhập" [ref=f22e80] [cursor=pointer]
            - link "Quên mật khẩu?" [ref=f22e81] [cursor=pointer]:
              - /url: /restore-password
        - generic [ref=f22e82]: Hoặc đăng nhập bằng
        - generic [ref=f22e86]:
          - button "Google Google" [ref=f22e87] [cursor=pointer]:
            - img "Google" [ref=f22e88]
            - generic [ref=f22e89]: Google
          - button "Google Zalo" [ref=f22e90] [cursor=pointer]:
            - img "Google" [ref=f22e91]
            - generic [ref=f22e92]: Zalo
      - generic [ref=f22e93]:
        - generic [ref=f22e94]: Bạn chưa có tài khoản?
        - link "Đăng ký ngay" [ref=f22e95] [cursor=pointer]:
          - /url: /register?action=login&client_id=cps&redirect_uri=https%3A%2F%2Fcellphones.com.vn%2F&response_type=authorization_code&state=7wSwA7Xok72dINMUOzdh4eB6XOlBZlm8RE9Og2DQ
      - generic [ref=f22e97]:
        - text: Mua sắm, sửa chữa tại
        - link "cellphones.com.vn" [ref=f22e98] [cursor=pointer]:
          - /url: https://cellphones.com.vn
        - text: và
        - link "dienthoaivui.com.vn" [ref=f22e99] [cursor=pointer]:
          - /url: https://dienthoaivui.com.vn
  - region "Notifications alt+T"
  - alert [ref=f22e100]
```

# Test source

```ts
  1 | const { expect } = require('@playwright/test');
  2 | const ENV = Object.fromEntries(['SMEMBER_PHONE','SMEMBER_PASSWORD','SMEMBER_NEW_PASSWORD','SMEMBER_EMAIL'].map(k => [k, process.env[k] || '']));
> 3 | function substitute(value) { return String(value ?? '').replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => { if (!ENV[key]) throw new Error(`Missing required environment variable: ${key}`); return ENV[key]; }); }
    |                                                                                                                          ^ Error: Missing required environment variable: TEST_PHONE
  4 | function candidates(target) { if (Array.isArray(target)) return target.map(x => typeof x === 'string' ? x : x.selector).filter(Boolean); return String(target).split(/,\s*(?![^\[]*\])/).map(x => x.trim()).filter(Boolean); }
  5 | function locator(page, selector) { return selector.startsWith('//') || selector.startsWith('(//') ? page.locator(`xpath=${selector}`) : page.locator(selector); }
  6 | async function visible(page, target) { for (const s of candidates(target)) { const l=locator(page,s).first(); try { await l.waitFor({state:'visible',timeout:5000}); return l; } catch {} } throw new Error(`No visible match for ${JSON.stringify(target)}. URL=${page.url()}`); }
  7 | async function runGhostSteps(page, steps) { for (const step of steps) { const target=substitute(step.target||''); const value=substitute(step.value||''); if(step.command==='goto') await page.goto(target,{waitUntil:'domcontentloaded'}); else if(['fill','assign'].includes(step.command)) await (await visible(page,target)).fill(value); else if(step.command==='click') await (await visible(page,target)).click(); else if(step.command==='assertElementPresent') await expect(await visible(page,target)).toBeVisible(); else if(step.command==='assertText') await expect(page.locator('body')).toContainText(value); else if(step.command==='select') await (await visible(page,target)).selectOption(value); else if(step.command==='reload') await page.reload({waitUntil:'domcontentloaded'}); else throw new Error(`Unsupported command: ${step.command}`); } }
  8 | module.exports={runGhostSteps};
  9 | 
```