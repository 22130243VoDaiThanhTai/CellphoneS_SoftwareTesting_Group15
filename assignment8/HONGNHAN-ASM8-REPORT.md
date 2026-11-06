# Assignment 8 — Quách Hồng Nhân, 23130216, Group15

Ngày06/11/2026, website online CellphoneS, Google Chrome headless 1280x800, locale vi-VN, Playwright1.64.1, một worker, retries0.

## Kết quả cá nhân

Run `asm8-20261106174424-25176`: **21 Pass, 2 Fail, 0 Skipped**, 23 test runner trích từ suite chung. Tổng duration từng test cá nhân 358.97 giây, không phải wall time một lượt riêng. Không quy đổi thành30/30 ID workbook. 11 test PC nhóm26 ID + một luồng bổ sung, 6 cửa hàng và6 Sforum.

| Chức năng | Pass | Fail | Skipped |
|---|---:|---:|---:|
| Build PC | 9 | 2 | 0 |
| Cửa hàng | 6 | 0 | 0 |
| Sforum | 6 | 0 | 0 |

## Lượt chạy chung

Run `asm8-20261106174424-25176`: 131 khai báo, 85 Pass, 6 Fail, 40 Skipped, 0 Interrupted, 1576.13 giây. Suite.status `failed`.

| Phạm vi | Khai báo | Pass | Fail | Skipped |
|---|---:|---:|---:|---:|
| Hồng Nhân | 23 | 21 | 2 | 0 |
| Quang Thông | 82 | 61 | 3 | 18 |
| Search/Filter dùng chung | 23 | 1 | 1 | 21 |
| Adapter Thành Tài | 3 | 2 | 0 | 1 |

Source Search/Filter có cùng blob trên QuangHuy/TienVinh, nên chỉ tích hợp và đếm một lần. Chưa đủ source và assertion để chứng minh toàn bộ mọi chức năng của mọi thành viên. ThanhTai giữ Python gốc, adapter JS chỉ bao phủ mở popup và chọn tỷ lệ, không tuyên bố đã kiểm tra công thức30/50% hoặc30 case.

## Lỗi đã xử lý

1. Locator Build PC khớp2 trạng thái rỗng và4 tổng tiền: giới hạn phần tử visible, giữ assertion tổng và số lượng.
2. Cửa hàng viết TP HCM/TP. HCM và có Kho giao hàng Online không có địa chỉ: chuẩn hóa định dạng, kiểm tra ngoại lệ rõ, giữ tên vùng và reset quận.
3. Handler cookie chung xung đột handler riêng CP và chờ cookie Sforum đóng sau thao tác Từ chối: giới hạn handler chung theo module, chờ menu React, không chặn thao tác vì banner cookie ở dưới.
4. Source Search/Filter thiếu assertion đúng Expected: lưu bản gốc, Skipped9 filter, không ghi Pass chỉ vì body hiển thị.12 search thiếu tài khoản có skip riêng.
5. Giữ báo cáo, screenshot và log trước sửa. Lượt đầu dừng giữa chừng vì lỗi locator lặp lại, không dùng làm tổng thực thi hoàn chỉnh.

## Các test thất bại ở lượt chung mới nhất

### PC-025 PC-026: tìm CPU và chuỗi không khớp

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.product-info').filter({ has: locator('.button__select') }).first().getByRole('heading', { level: 3 })
Expected substring: [32m"CPU Intel Core [7mi5 12400F[27m"[39m
Received string:    [31m"CPU Intel Core [7mUltra 5 225F (Tray)[27m"[39m
Timeout: 8000ms

Call log:
[2m  - Expect "toContainText" locator('.product-info').filter({ has: locator('.button__select') }).first().getByRole('heading', { level: 3 }) with timeout 8000ms[22m
[2m  - waiting for locator('.product-info').filter({ has: locator('.button__select') }).first().getByRole('heading', { level: 3 })[22m
[2m    19 × locator resolved to <h3>CPU Intel Core Ultra 5 225F (Tray)</h3>[22m
[2m       - unexpected value "CPU Intel Core Ultra 5 225F (Tray)"[22m

```

### Bổ sung: tăng/giảm số lượng và hủy xóa tại 1

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText('Bạn có muốn xoá sản phẩm này ?', { exact: true })
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" getByText('Bạn có muốn xoá sản phẩm này ?', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByText('Bạn có muốn xoá sản phẩm này ?', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Bữa khác nha!', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Bữa khác nha!', exact: true }) to be hidden[22m
[2m    - interception handler has finished, continuing[22m

```

### TC_Filter_23: Filter_ByLocation

```text
TimeoutError: page.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('button.button__change-province')[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    - locator resolved to visible <button data-slot="button" class="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-neutral-300 cpsui:text-neutral-800 cpsui:bg-pure-white cpsui:hover:border-neutral-400 cpsui:hover:bg-neutral-50 cpsui:disabled:border-black-300 cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white flex-1 px-1…>Từ chối</button>[22m
[2m    - interception handler has finished, continuing[22m

```

### PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveCount[2m([22m[32mexpected[39m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) })
Expected: [32m1[39m
Received: [31mundefined[39m
Timeout:  8000ms

Call log:
[2m  - Expect "toHaveCount" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) })[22m
[2m    - found getByRole('button', { name: 'Bữa khác nha!', exact: true }), intercepting action to run the handler[22m

TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: 'Bữa khác nha!', exact: true })[22m
[2m    - locator resolved to <button data-v-51b745ac="" class="subscriber-form-submit button cancel-button">↵            Bữa khác nha!↵          </button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="product-item product-info-container p-3 item-137019">…</div> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="product-item product-info-container p-3 item-137019">…</div> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    3 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="product-item product-info-container p-3 item-137019">…</div> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Bữa khác nha!', exact: true }), intercepting action to run the handler[22m

```

### PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('button.button__change-province')
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('button.button__change-province') with timeout 8000ms[22m
[2m  - waiting for locator('button.button__change-province')[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - found getByRole('button', { name: 'Bữa khác nha!', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Bữa khác nha!', exact: true }) to be hidden[22m
[2m    - interception handler has finished, continuing[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

```

### PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('button.button__change-province')
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('button.button__change-province') with timeout 8000ms[22m
[2m  - waiting for locator('button.button__change-province')[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

```

## Phân tích và hướng khắc phục test Fail

| Test | Phân tích chẩn đoán | Đề xuất |
|---|---|---|
| PC-025 PC-026: tìm CPU và chuỗi không khớp | Kết quả đầu không khớp tên CPU hoặc danh sách sau xóa từ khóa không có sản phẩm chọn được | Đối chiếu toàn bộ kết quả, thứ tự/relevance và trạng thái filter_price, giữ Fail khi chưa rõ Expected |
| Bổ sung: tăng/giảm số lượng và hủy xóa tại 1 | Thao tác/handler popup can thiệp; cần xác minh ảnh và thời điểm xuất hiện | Chuẩn bị đóng popup bằng UI trước bước nghiệp vụ, tránh handler trùng, chạy lại cùng source |
| TC_Filter_23: Filter_ByLocation | Thao tác/handler popup can thiệp; cần xác minh ảnh và thời điểm xuất hiện | Chuẩn bị đóng popup bằng UI trước bước nghiệp vụ, tránh handler trùng, chạy lại cùng source |
| PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ | Thao tác/handler popup can thiệp; cần xác minh ảnh và thời điểm xuất hiện | Chuẩn bị đóng popup bằng UI trước bước nghiệp vụ, tránh handler trùng, chạy lại cùng source |
| PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết | Thao tác/handler popup can thiệp; cần xác minh ảnh và thời điểm xuất hiện | Chuẩn bị đóng popup bằng UI trước bước nghiệp vụ, tránh handler trùng, chạy lại cùng source |
| PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách | Thao tác/handler popup can thiệp; cần xác minh ảnh và thời điểm xuất hiện | Chuẩn bị đóng popup bằng UI trước bước nghiệp vụ, tránh handler trùng, chạy lại cùng source |

Phân tích trên là chẩn đoán từ lỗi runner và ảnh, chưa khẳng định mọi Fail là bug website. Chi tiết cá nhân ở HONGNHAN-ISSUES.md.

## Skipped và phạm vi chưa triển khai

Mỗi skip có annotation trong execution-summary.json và HTML.21 Search/Filter gồm12 thiếu tài khoản,9 thiếu assertion.1 checkout/payment của adapter TT chưa có môi trường/tài khoản phù hợp.18 PD/RV theo nguồn QuangThong. Không gửi đơn hàng hoặc review thật.

PC-024,027,028,029 chưa có implementation hoàn chỉnh, không đưa vào discovered hoặc cộng Pass. Workbook ASM6 và kết quả23/10 được giữ nguyên. ST/SF là12 case bổ sung ASM8 ở HONGNHAN-TEST-DESIGN.md.

## Kiểm tra độ ổn định

Có 1 test đổi trạng thái giữa các lượt cùng hash source/cấu hình. Ghi nhận nghi flaky, cần đối chiếu popup, dữ liệu và thời điểm tải. Không kết luận chỉ từ một lần chạy lại.

## Kiểm tra phạm vi SF-004 sau rà soát ảnh

Ảnh lượt nhóm cho thấy SF-004 có thể mở bài ở sidebar trước khi kết quả tìm kiếm tải xong. Đã bổ sung assertion tiêu đề liên quan iPhone trước click, chạy lại riêng SF-004 và ghi nhận Pass. Source trước sửa giữ trong logs/sforum-before-result-scope-fix.spec.cjs của lượt nhóm. Ảnh bổ sung và log riêng nằm trong ZIP. Không thay số liệu85/6/40 hoặc cộng lần chạy này vào tổng23 test cá nhân.

## Tệp nộp và template

`submission/Assignment8_23130216_QuachHongNhan/23130216_QuachHongNhan.pptx` và `23130216_QuachHongNhan_TestScript.zip`.
PowerPoint đủ8 phần, có ảnh thực thi. Dùng nền trắng, đỏC8102E, Arial theo deck đã có trong repo của QuangThong. Chưa có xác nhận template chung chính thức. Không coi hồ sơ cá nhân là đã được giảng viên/nhóm review.

ZIP có source cá nhân, fixture/config dùng chung đúng bản thực thi, test design, HTML/JSON/XML, log và ảnh. Không chứa node_modules, credentials hoặc trace nặng. Trace gốc và HTML Playwright gốc giữ cục bộ. HTML portable/JSON/XML và ảnh tương ứng được đưa lên Git để mở độc lập.

## Phần nhóm cần tiếp tục

Chủ Search/Filter hoàn thiện assertion và dữ liệu tài khoản, kiểm tra caseTC_Filter_15 có trong data nhưng chưa có test executable. Chủ trả góp bổ sung assertion tính tiền và environment cho luồng đăng ký. Mọi thành viên xác nhận đủ3 chức năng và thống nhất template. Merge nhánh HongNhan vào dev theo quy trình nhóm sau khi review kết quả.
