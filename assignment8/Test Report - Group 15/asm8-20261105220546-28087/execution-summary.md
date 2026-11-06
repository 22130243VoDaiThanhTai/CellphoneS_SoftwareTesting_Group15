# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261105220546-28087. Bắt đầu: 2026-11-05T15:05:47.576Z. Thời gian: 262.03 giây.

**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 54; có kết quả: 10. Passed: 5; Failed: 4; Skipped: 0; Interrupted: 1.

Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| cp | PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed | 6.17 |
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | passed | 15.76 |
| cp | PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm | failed | 18.02 |
| cp | PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17 | failed | 23.15 |
| cp | PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng | timedOut | 80.78 |
| cp | PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng | passed | 21.57 |
| cp | PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập | failed | 17.96 |
| cp | PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay | passed | 29.09 |
| cp | PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP | passed | 10.98 |
| cp | PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai | interrupted | 7.08 |

## Các lỗi quan sát được

### cp: PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - locator resolved to <button class="btn btn-outline">Từ chối</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    13 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

```

### cp: PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - locator resolved to <button class="btn btn-outline">Từ chối</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    13 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

```

### cp: PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng

```text
[31mTest timeout of 60000ms exceeded.[39m
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) }).getByText('+ Chọn để so sánh', { exact: true })[22m
[2m    - locator resolved to <a class="select-to-compare has-text-centered mt-1">+ Chọn để so sánh</a>[22m
[2m  - attempting click action[22m
[2m    - waiting for element to be visible, enabled and stable[22m

```

### cp: PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - locator resolved to <button class="btn btn-outline">Từ chối</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is not stable[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is not stable[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m  13 × retrying click action[22m
[2m       - waiting 500ms[22m
[2m       - waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

```

### cp: PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveCount[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) })
Expected: [32m1[39m
Error: Test ended.

Call log:
[2m  - Expect "toHaveCount" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m  - Test ended.[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - locator resolved to <button class="btn btn-outline">Từ chối</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    3 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

```

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.
