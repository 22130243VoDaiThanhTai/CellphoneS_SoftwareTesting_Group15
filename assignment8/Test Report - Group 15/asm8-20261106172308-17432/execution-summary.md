# Test Report - Group 15

Run: asm8-20261106172308-17432. Bắt đầu: 2026-11-06T10:23:09.023Z. Thời gian: 903.17 giây.

Các module có trong project và được chọn ở lượt này. TienVinh chưa có script riêng xác minh được. QuangHuy có case thiếu assertion/tài khoản được ghi rõ. Không đại diện toàn bộ chức năng của mọi thành viên.

Khai báo 131; đã thực thi 65; Pass 46; Fail 19; Skipped 22; Interrupted 1; Not run 43.

Đếm test runner theo test.id, không đếm số mã workbook trong tên test. Retry được giữ trong attempts.

| Module | Test | Trạng thái | Giây |
|---|---|---|---:|
| hn-pc | PC-001 PC-002 PC-023: trang và trạng thái rỗng | passed | 2.15 |
| hn-pc | PC-003: từ danh mục máy tính tới Build PC | passed | 4.96 |
| hn-pc | PC-004 PC-005: mở và đóng CPU không chọn | passed | 3.43 |
| hn-pc | PC-006 PC-019: chọn CPU và tổng một linh kiện | passed | 3.90 |
| hn-pc | PC-007..014: chọn đủ tám nhóm cốt lõi | passed | 7.56 |
| hn-pc | PC-015 PC-021: thay CPU và tính chênh lệch | passed | 5.72 |
| hn-pc | PC-016 PC-017 PC-022: thay/xóa RAM giữ SSD | passed | 7.04 |
| hn-pc | PC-018 PC-020: ba linh kiện, cộng giá và reset | passed | 7.37 |
| hn-pc | PC-025 PC-026: tìm CPU và chuỗi không khớp | passed | 7.50 |
| hn-pc | PC-030: nhấp đúp không thêm CPU trùng | passed | 4.89 |
| hn-pc | Bổ sung: tăng/giảm số lượng và hủy xóa tại 1 | passed | 5.06 |
| hn-store | ST-001: mở trang và đối chiếu số cửa hàng hiển thị | passed | 10.38 |
| hn-store | ST-002: lọc Hồ Chí Minh chỉ hiển thị địa chỉ cùng tỉnh | failed | 13.58 |
| hn-store | ST-003: lọc Quận 1 và đối chiếu địa chỉ | passed | 10.33 |
| hn-store | ST-004: đổi tỉnh sang Hà Nội và reset quận | failed | 22.48 |
| hn-store | ST-005: cửa hàng có địa chỉ, giờ mở cửa và số điện thoại hợp lệ | passed | 12.63 |
| hn-store | ST-006: liên kết chỉ đường có đích Google Maps hợp lệ | passed | 8.37 |
| hn-sforum | SF-001: trang chủ có logo và danh sách bài viết | failed | 10.77 |
| hn-sforum | SF-002: tìm iPhone bằng Enter và kiểm tra kết quả liên quan | failed | 9.79 |
| hn-sforum | SF-003: từ khóa không tồn tại hiển thị trạng thái rỗng | failed | 9.74 |
| hn-sforum | SF-004: mở bài từ kết quả và đối chiếu tiêu đề, nội dung | failed | 11.09 |
| hn-sforum | SF-005: điều hướng danh mục Tin công nghệ | failed | 9.65 |
| hn-sforum | SF-006: logo đưa từ kết quả tìm kiếm về trang chủ Sforum | failed | 9.59 |
| qh-search-filter | TC_Filter_12: Filter_ByBrand | passed | 8.19 |
| qh-search-filter | TC_Filter_13: Filter_ByPriceRange | skipped | 0.56 |
| qh-search-filter | TC_Filter_14: Filter_MultiCriteria | skipped | 0.36 |
| qh-search-filter | TC_Filter_16: Filter_ClearSingleFilter | skipped | 0.34 |
| qh-search-filter | TC_Filter_17: Filter_NoResultMatch_ShowEmptyMessage | skipped | 0.39 |
| qh-search-filter | TC_Filter_19: Filter_ClearAllFilters | skipped | 0.38 |
| qh-search-filter | TC_Filter_20A: Filter_CustomPriceRange_Validation | skipped | 0.35 |
| qh-search-filter | TC_Filter_20B: Filter_CustomPriceRange_Slider | skipped | 0.46 |
| qh-search-filter | TC_Filter_21: Filter_ByProductCondition | skipped | 0.43 |
| qh-search-filter | TC_Filter_22: Filter_trade_in | skipped | 0.46 |
| qh-search-filter | TC_Filter_23: Filter_ByLocation | passed | 10.85 |
| qh-search-filter | TC_Search_01 - TC_Search_01: Search_ValidKeyword @search | skipped | 0.38 |
| qh-search-filter | TC_Search_02 - TC_Search_02: Search_UnaccentedKeyword @search | skipped | 0.37 |
| qh-search-filter | TC_Search_03 - TC_Search_03: Search_Autocomplete_ShowSuggestions @search | skipped | 0.32 |
| qh-search-filter | TC_Search_04 - TC_Search_04: Search_TypoKeyword_ShowSuggestions @search | skipped | 0.33 |
| qh-search-filter | TC_Search_05 - TC_Search_05: Search_BrandKeyword @search | skipped | 0.33 |
| qh-search-filter | TC_Search_06 - TC_Search_06 : Search_CategoryKeyword @search | skipped | 0.31 |
| qh-search-filter | TC_Search_07 - TC_Search_07: Search_Product_specification @search | skipped | 0.34 |
| qh-search-filter | TC_Search_08 - TC_Search_08: Search_InvalidKeyword_ShowEmptyMessage @search | skipped | 0.31 |
| qh-search-filter | TC_Search_09 - TC_Search_09: Search_EmptyInput_NoAction @search | skipped | 0.32 |
| qh-search-filter | TC_Search_10 - TC_Search_10: Search_Special_Characters @search | skipped | 0.35 |
| qh-search-filter | TC_Search_11 - TC_Search_11: Search_LongString_TruncatedOrHandled @search | skipped | 0.34 |
| qh-search-filter | TC_Search_18 - TC_Search_18: Search_history_suggestion @search | skipped | 0.31 |
| tt-installment | TT-001: mở thông tin trả góp qua công ty tài chính | passed | 10.14 |
| tt-installment | TT-002: tỷ lệ trả trước giữ đúng lựa chọn 0,30,50,80 | passed | 10.74 |
| tt-installment | TT-003: checkout, đăng nhập và chuyển cổng thanh toán | skipped | 0.35 |
| cp | PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed | 5.41 |
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | passed | 10.34 |
| cp | PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm | failed | 15.16 |
| cp | PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17 | failed | 15.13 |
| cp | PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng | passed | 6.97 |
| cp | PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng | failed | 15.24 |
| cp | PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập | failed | 16.19 |
| cp | PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay | passed | 22.93 |
| cp | PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP | passed | 11.28 |
| cp | PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai | failed | 16.48 |
| cp | PRODUCT_COMPARE_LIST_Remove_02 - bỏ cột cuối | passed | 7.81 |
| cp | PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ | failed | 24.81 |
| cp | PRODUCT_COMPARE_SPECS_View_01 - tên hàng cơ bản | passed | 6.48 |
| cp | PRODUCT_COMPARE_SPECS_View_02 - dung lượng 256 GB | passed | 5.43 |
| cp | PRODUCT_COMPARE_SPECS_View_03 - giá trị cùng hàng Chipset | passed | 7.00 |
| cp | PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết | passed | 5.94 |
| cp | PRODUCT_COMPARE_SEARCH_Search_02 - từ khóa không tồn tại | failed | 13.57 |
| cp | PRODUCT_COMPARE_SEARCH_Clear_01 - xóa từ khóa | failed | 15.62 |
| cp | PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách | failed | 15.86 |
| cp | PRODUCT_COMPARE_SEARCH_Input_02 - ký tự đặc biệt | passed | 8.88 |
| cp | PRODUCT_COMPARE_SEARCH_Input_03 - tiếng Việt có dấu | failed | 28.63 |
| cp | PRODUCT_COMPARE_PAGE_Reload_01 - reload theo URL | passed | 7.81 |
| cp | PRODUCT_COMPARE_PAGE_Open_02 - tab mới từ URL | passed | 3.87 |
| cp | PRODUCT_COMPARE_PAGE_View_01 - chỉ kiểm tra href Mua ngay | passed | 4.01 |
| cp | PRODUCT_COMPARE_PAGE_Responsive_01 - viewport 390x844 | passed | 7.32 |
| rv | PRODUCT_REVIEW_SUMMARY_View_01 - tiêu đề khu vực | passed | 15.15 |
| rv | PRODUCT_REVIEW_SUMMARY_View_02 - điểm trung bình | passed | 11.52 |
| rv | PRODUCT_REVIEW_SUMMARY_View_03 - tổng lượt hiện tại | passed | 8.45 |
| rv | PRODUCT_REVIEW_SUMMARY_View_04 - phân bố năm sao | passed | 12.96 |
| rv | PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm | passed | 8.97 |
| rv | PRODUCT_REVIEW_FILTER_Select_01 - lọc 5 sao | passed | 13.91 |
| rv | PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao | passed | 13.94 |
| rv | PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao | failed | 28.92 |
| rv | PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao | passed | 33.24 |
| rv | PRODUCT_REVIEW_FILTER_Select_05 - nhánh rỗng 1 sao | passed | 39.44 |
| rv | PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao | passed | 24.20 |
| rv | PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng | passed | 28.32 |
| rv | PRODUCT_REVIEW_FILTER_Select_07 - Đã mua hàng | passed | 15.66 |
| rv | PRODUCT_REVIEW_LIST_Open_01 - Xem tất cả đánh giá | interrupted | 22.24 |

## Failures
### ST-002: lọc Hồ Chí Minh chỉ hiển thị địa chỉ cùng tỉnh

Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoMatch[2m([22m[32mexpected[39m[2m)[22m

Expected pattern: [32m/TP\. HCM|Hồ Chí Minh/i[39m
Received string:  [31m"CellphoneS[39m
[31m            134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM"[39m

### ST-004: đổi tỉnh sang Hà Nội và reset quận

Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32mtrue[39m
Received: [31mfalse[39m

Call Log:
- Timeout 8000ms exceeded while waiting on the predicate

### SF-001: trang chủ có logo và danh sách bài viết

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  getByPlaceholder('Tìm kiếm', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" getByPlaceholder('Tìm kiếm', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByPlaceholder('Tìm kiếm', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    12 × locator resolved to visible <button class="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-solid border-[#cfcfd3] px-1.5 font-medium hover:bg-[#f7f7f8]">Từ chối</button>[22m


### SF-002: tìm iPhone bằng Enter và kiểm tra kết quả liên quan

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  getByPlaceholder('Tìm kiếm', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" getByPlaceholder('Tìm kiếm', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByPlaceholder('Tìm kiếm', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    13 × locator resolved to visible <button class="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-solid border-[#cfcfd3] px-1.5 font-medium hover:bg-[#f7f7f8]">Từ chối</button>[22m


### SF-003: từ khóa không tồn tại hiển thị trạng thái rỗng

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  getByPlaceholder('Tìm kiếm', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" getByPlaceholder('Tìm kiếm', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByPlaceholder('Tìm kiếm', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    14 × locator resolved to visible <button class="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-solid border-[#cfcfd3] px-1.5 font-medium hover:bg-[#f7f7f8]">Từ chối</button>[22m


### SF-004: mở bài từ kết quả và đối chiếu tiêu đề, nội dung

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  getByPlaceholder('Tìm kiếm', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" getByPlaceholder('Tìm kiếm', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByPlaceholder('Tìm kiếm', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    15 × locator resolved to visible <button class="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-solid border-[#cfcfd3] px-1.5 font-medium hover:bg-[#f7f7f8]">Từ chối</button>[22m


### SF-005: điều hướng danh mục Tin công nghệ

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  getByPlaceholder('Tìm kiếm', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" getByPlaceholder('Tìm kiếm', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByPlaceholder('Tìm kiếm', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    13 × locator resolved to visible <button class="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-solid border-[#cfcfd3] px-1.5 font-medium hover:bg-[#f7f7f8]">Từ chối</button>[22m


### SF-006: logo đưa từ kết quả tìm kiếm về trang chủ Sforum

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  getByPlaceholder('Tìm kiếm', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" getByPlaceholder('Tìm kiếm', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for getByPlaceholder('Tìm kiếm', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    13 × locator resolved to visible <button class="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-solid border-[#cfcfd3] px-1.5 font-medium hover:bg-[#f7f7f8]">Từ chối</button>[22m


### PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true })[22m
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


### PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17

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
[2m    14 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m


### PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - locator resolved to <button class="btn btn-outline">Từ chối</button>[22m
[2m  - attempting click action[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is not stable[22m
[2m  - retrying click action[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    14 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m


### PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập

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


### PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true })
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Tìm sản phẩm để so sánh', { exact: true })[22m
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
[2m    14 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m


### PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ

TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).locator('.product-item').filter({ has: locator('.product-name').filter({ hasText: /^iPhone 17 Pro 256GB \| Chính hãng$/ }) }).getByText('+ Chọn để so sánh', { exact: true })[22m
[2m    - locator resolved to <a class="select-to-compare has-text-centered mt-1">+ Chọn để so sánh</a>[22m
[2m  - attempting click action[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

TimeoutError: locator.click: Timeout 20000ms exceeded.
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
[2m    35 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

Error: End of central directory record signature not found. Either not a zip file, or file is truncated.

### PRODUCT_COMPARE_SEARCH_Search_02 - từ khóa không tồn tại

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Không tìm được sản phẩm phù hợp', { exact: true })
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Không tìm được sản phẩm phù hợp', { exact: true }) with timeout 8000ms[22m
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByText('Không tìm được sản phẩm phù hợp', { exact: true })[22m
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
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is not stable[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    14 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="modal-background"></div> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m


### PRODUCT_COMPARE_SEARCH_Clear_01 - xóa từ khóa

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
[2m    14 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m


### PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách

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


### PRODUCT_COMPARE_SEARCH_Input_03 - tiếng Việt có dấu

TimeoutError: locator.fill: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.modal.is-active').filter({ has: getByPlaceholder('Nhập tên sản phẩm muốn so sánh') }).getByPlaceholder('Nhập tên sản phẩm muốn so sánh')[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m

TimeoutError: locator.click: Timeout 20000ms exceeded.
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
[2m  36 × retrying click action[22m
[2m       - waiting 500ms[22m
[2m       - waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a class="product-name">Samsung Galaxy S26 Ultra 5G 12GB 256GB</a> from <div class="cps-container cps-body">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m


### PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator:  locator('button.button__change-province')
Expected: visible
Received: undefined
Timeout:  8000ms

Call log:
[2m  - Expect "toBeVisible" locator('button.button__change-province') with timeout 8000ms[22m
[2m  - waiting for locator('button.button__change-province')[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    - interception handler has finished, continuing[22m


### PRODUCT_REVIEW_LIST_Open_01 - Xem tất cả đánh giá

Error: page.screenshot: Test ended.
Call log:
[2m  - taking page screenshot[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m



## Skipped
- TC_Filter_13: Filter_ByPriceRange: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_14: Filter_MultiCriteria: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_16: Filter_ClearSingleFilter: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_17: Filter_NoResultMatch_ShowEmptyMessage: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_19: Filter_ClearAllFilters: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_20A: Filter_CustomPriceRange_Validation: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_20B: Filter_CustomPriceRange_Slider: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_21: Filter_ByProductCondition: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Filter_22: Filter_trade_in: Source chưa có assertion đúng Expected Result của case. Cần chủ module bổ sung, không ghi Pass chỉ vì trang tải.
- TC_Search_01 - TC_Search_01: Search_ValidKeyword @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_02 - TC_Search_02: Search_UnaccentedKeyword @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_03 - TC_Search_03: Search_Autocomplete_ShowSuggestions @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_04 - TC_Search_04: Search_TypoKeyword_ShowSuggestions @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_05 - TC_Search_05: Search_BrandKeyword @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_06 - TC_Search_06 : Search_CategoryKeyword @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_07 - TC_Search_07: Search_Product_specification @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_08 - TC_Search_08: Search_InvalidKeyword_ShowEmptyMessage @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_09 - TC_Search_09: Search_EmptyInput_NoAction @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_10 - TC_Search_10: Search_Special_Characters @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_11 - TC_Search_11: Search_LongString_TruncatedOrHandled @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TC_Search_18 - TC_Search_18: Search_history_suggestion @search: Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.
- TT-003: checkout, đăng nhập và chuyển cổng thanh toán: Source cần tài khoản Smember và luồng đặt mua/thanh toán. Chưa có môi trường test và dữ liệu tài khoản.

Lỗi runner/assertion chưa tự chứng minh lỗi website. Xem phân tích và kết quả chạy lại.
