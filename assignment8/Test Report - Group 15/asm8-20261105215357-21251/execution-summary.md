# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261105215357-21251. Bắt đầu: 2026-11-05T14:53:57.908Z. Thời gian: 489.35 giây.

**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 54; có kết quả: 54. Passed: 30; Failed: 9; Skipped: 15; Interrupted: 0.

Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| cp | PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed | 4.25 |
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | failed | 33.34 |
| cp | PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm | passed | 5.18 |
| cp | PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17 | passed | 5.41 |
| cp | PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng | passed | 8.04 |
| cp | PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng | passed | 7.84 |
| cp | PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập | passed | 11.54 |
| cp | PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay | failed | 31.07 |
| cp | PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP | failed | 37.85 |
| cp | PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai | passed | 9.10 |
| cp | PRODUCT_COMPARE_LIST_Remove_02 - bỏ cột cuối | passed | 5.56 |
| cp | PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ | passed | 12.00 |
| cp | PRODUCT_COMPARE_SPECS_View_01 - tên hàng cơ bản | passed | 3.70 |
| cp | PRODUCT_COMPARE_SPECS_View_02 - dung lượng 256 GB | passed | 3.58 |
| cp | PRODUCT_COMPARE_SPECS_View_03 - giá trị cùng hàng Chipset | passed | 7.38 |
| cp | PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết | passed | 4.94 |
| cp | PRODUCT_COMPARE_SEARCH_Search_02 - từ khóa không tồn tại | passed | 5.49 |
| cp | PRODUCT_COMPARE_SEARCH_Clear_01 - xóa từ khóa | passed | 6.12 |
| cp | PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách | passed | 5.44 |
| cp | PRODUCT_COMPARE_SEARCH_Input_02 - ký tự đặc biệt | passed | 5.38 |
| cp | PRODUCT_COMPARE_SEARCH_Input_03 - tiếng Việt có dấu | passed | 5.15 |
| cp | PRODUCT_COMPARE_PAGE_Reload_01 - reload theo URL | passed | 5.47 |
| cp | PRODUCT_COMPARE_PAGE_Open_02 - tab mới từ URL | passed | 3.91 |
| cp | PRODUCT_COMPARE_PAGE_View_01 - chỉ kiểm tra href Mua ngay | passed | 3.42 |
| cp | PRODUCT_COMPARE_PAGE_Responsive_01 - viewport 390x844 | passed | 4.63 |
| rv | PRODUCT_REVIEW_SUMMARY_View_01 - tiêu đề khu vực | passed | 7.72 |
| rv | PRODUCT_REVIEW_SUMMARY_View_02 - điểm trung bình | passed | 8.13 |
| rv | PRODUCT_REVIEW_SUMMARY_View_03 - tổng lượt hiện tại | passed | 7.95 |
| rv | PRODUCT_REVIEW_SUMMARY_View_04 - phân bố năm sao | passed | 9.77 |
| rv | PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm | passed | 8.13 |
| rv | PRODUCT_REVIEW_FILTER_Select_01 - lọc 5 sao | passed | 10.23 |
| rv | PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao | failed | 16.60 |
| rv | PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao | failed | 16.80 |
| rv | PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao | failed | 16.53 |
| rv | PRODUCT_REVIEW_FILTER_Select_05 - nhánh rỗng 1 sao | failed | 16.62 |
| rv | PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao | failed | 19.00 |
| rv | PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng | failed | 36.87 |
| rv | PRODUCT_REVIEW_FILTER_Select_07 - Đã mua hàng | passed | 14.97 |
| rv | PRODUCT_REVIEW_LIST_Open_01 - Xem tất cả đánh giá | passed | 22.04 |
| rv | PRODUCT_REVIEW_FORM_Open_01 - Mở form khi tài khoản thường đã đăng nhập | skipped | 0.00 |
| rv | PRODUCT_REVIEW_FORM_View_01 - Hiển thị năm nhãn đánh giá sao | skipped | 0.00 |
| rv | PRODUCT_REVIEW_RATING_Select_01 - Chọn mức sao thấp nhất | skipped | 0.00 |
| rv | PRODUCT_REVIEW_RATING_Switch_01 - Đổi từ sao thấp nhất sang cao nhất | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_View_01 - Hiển thị hướng dẫn tối thiểu 15 ký tự | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Clear_01 - Xóa nội dung về rỗng trước khi gửi | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Validate_01 - Nội dung ngắn hơn hướng dẫn tối thiểu | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Input_01 - Nhập đúng 15 ký tự, chưa gửi | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Input_02 - Nhập 16 ký tự, chưa gửi | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Limit_01 - Nhập nội dung dài 1000 ký tự | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Validate_02 - Nội dung chỉ có 15 dấu cách | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Input_03 - Nhập ký tự đặc biệt dưới dạng văn bản | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Input_04 - Nhập tiếng Việt và emoji | skipped | 0.00 |
| rv | PRODUCT_REVIEW_CONTENT_Security_01 - Nhập chuỗi script như văn bản, không gửi | skipped | 0.00 |
| rv | PRODUCT_REVIEW_ATTACHMENT_View_01 - Hiển thị tùy chọn thêm ảnh và loại file khai báo | skipped | 0.00 |

## Các lỗi quan sát được

### cp: PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP

```text
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.compare-products').locator('.compare-product.has-product').first().locator('.remove-compare-product')[22m
[2m    - locator resolved to <div data-v-0c8104f5="" class="remove-compare-product">…</div>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    32 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

```

### cp: PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay

```text
TimeoutError: locator.fill: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByPlaceholder('Nhập tên sản phẩm muốn so sánh')[22m

```

### cp: PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP

```text
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.compare-products').locator('.compare-product.has-product').first().locator('.remove-compare-product')[22m
[2m    - locator resolved to <div data-v-0c8104f5="" class="remove-compare-product">…</div>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    31 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^4$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^4$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^4$/ }) }).locator('progress')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^3$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^3$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^3$/ }) }).locator('progress')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^2$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^2$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^2$/ }) }).locator('progress')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_05 - nhánh rỗng 1 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^1$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^1$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.star-count').filter({ hasText: /^1$/ }) }).locator('progress')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: locator('.boxReview').getByText('Hiện chưa có đánh giá nào.', { exact: true })
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" locator('.boxReview').getByText('Hiện chưa có đánh giá nào.', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').getByText('Hiện chưa có đánh giá nào.', { exact: true })[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng

```text
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.boxReview').locator('.filter-item').filter({ hasText: /^\s*Có hình ảnh\s*$/ })[22m
[2m    - locator resolved to <div class="filter-item">↵          Có hình ảnh↵        </div>[22m
[2m  - attempting click action[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div class="title">…</div> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div data-v-b394b198="" class="cps-block-order-button-desktop show">…</div> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div class="title">…</div> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div id="topBarHeader">…</div> from <div id="cpsHeaderOutLine" data-fetch-key="Header:0">…</div> subtree intercepts pointer events[22m
[2m  6 × retrying click action[22m
[2m      - waiting 500ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div data-v-b394b198="" class="cps-block-order-button-desktop show">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="title">…</div> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div id="topBarHeader">…</div> from <div id="cpsHeaderOutLine" data-fetch-key="Header:0">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div id="topBarHeader">…</div> from <div id="cpsHeaderOutLine" data-fetch-key="Header:0">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div data-v-b394b198="" class="cps-block-order-button-desktop show">…</div> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div class="title">…</div> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div id="topBarHeader">…</div> from <div id="cpsHeaderOutLine" data-fetch-key="Header:0">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m

```

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.
