# Test Report - Group 15

Run: asm8-20261106174424-25176. Bắt đầu: 2026-11-06T10:44:25.481Z. Thời gian: 1576.13 giây.

Các module có trong project và được chọn ở lượt này. QuangHuy/TienVinh dùng chung source trùng blob, tích hợp một lần. QuangHuy có case thiếu assertion/tài khoản được ghi rõ. Không đại diện toàn bộ chức năng của mọi thành viên.

Khai báo 131; đã thực thi 91; Pass 85; Fail 6; Skipped 40; Interrupted 0; Not run 0.

Đếm test runner theo test.id, không đếm số mã workbook trong tên test. Retry được giữ trong attempts.

| Module | Test | Trạng thái | Giây |
|---|---|---|---:|
| hn-pc | PC-001 PC-002 PC-023: trang và trạng thái rỗng | passed | 1.89 |
| hn-pc | PC-003: từ danh mục máy tính tới Build PC | passed | 4.32 |
| hn-pc | PC-004 PC-005: mở và đóng CPU không chọn | passed | 2.70 |
| hn-pc | PC-006 PC-019: chọn CPU và tổng một linh kiện | passed | 4.11 |
| hn-pc | PC-007..014: chọn đủ tám nhóm cốt lõi | passed | 14.55 |
| hn-pc | PC-015 PC-021: thay CPU và tính chênh lệch | passed | 9.42 |
| hn-pc | PC-016 PC-017 PC-022: thay/xóa RAM giữ SSD | passed | 8.34 |
| hn-pc | PC-018 PC-020: ba linh kiện, cộng giá và reset | passed | 14.78 |
| hn-pc | PC-025 PC-026: tìm CPU và chuỗi không khớp | failed | 18.71 |
| hn-pc | PC-030: nhấp đúp không thêm CPU trùng | passed | 30.51 |
| hn-pc | Bổ sung: tăng/giảm số lượng và hủy xóa tại 1 | failed | 46.24 |
| hn-store | ST-001: mở trang và đối chiếu số cửa hàng hiển thị | passed | 11.44 |
| hn-store | ST-002: lọc Hồ Chí Minh chỉ hiển thị địa chỉ cùng tỉnh | passed | 12.04 |
| hn-store | ST-003: lọc Quận 1 và đối chiếu địa chỉ | passed | 37.43 |
| hn-store | ST-004: đổi tỉnh sang Hà Nội và reset quận | passed | 34.93 |
| hn-store | ST-005: cửa hàng có địa chỉ, giờ mở cửa và số điện thoại hợp lệ | passed | 24.55 |
| hn-store | ST-006: liên kết chỉ đường có đích Google Maps hợp lệ | passed | 24.87 |
| hn-sforum | SF-001: trang chủ có logo và danh sách bài viết | passed | 6.76 |
| hn-sforum | SF-002: tìm iPhone bằng Enter và kiểm tra kết quả liên quan | passed | 8.17 |
| hn-sforum | SF-003: từ khóa không tồn tại hiển thị trạng thái rỗng | passed | 13.46 |
| hn-sforum | SF-004: mở bài từ kết quả và đối chiếu tiêu đề, nội dung | passed | 15.29 |
| hn-sforum | SF-005: điều hướng danh mục Tin công nghệ | passed | 6.55 |
| hn-sforum | SF-006: logo đưa từ kết quả tìm kiếm về trang chủ Sforum | passed | 7.92 |
| qh-search-filter | TC_Filter_12: Filter_ByBrand | passed | 9.98 |
| qh-search-filter | TC_Filter_13: Filter_ByPriceRange | skipped | 0.41 |
| qh-search-filter | TC_Filter_14: Filter_MultiCriteria | skipped | 0.31 |
| qh-search-filter | TC_Filter_16: Filter_ClearSingleFilter | skipped | 0.32 |
| qh-search-filter | TC_Filter_17: Filter_NoResultMatch_ShowEmptyMessage | skipped | 0.33 |
| qh-search-filter | TC_Filter_19: Filter_ClearAllFilters | skipped | 0.32 |
| qh-search-filter | TC_Filter_20A: Filter_CustomPriceRange_Validation | skipped | 0.32 |
| qh-search-filter | TC_Filter_20B: Filter_CustomPriceRange_Slider | skipped | 0.33 |
| qh-search-filter | TC_Filter_21: Filter_ByProductCondition | skipped | 0.34 |
| qh-search-filter | TC_Filter_22: Filter_trade_in | skipped | 0.33 |
| qh-search-filter | TC_Filter_23: Filter_ByLocation | failed | 40.52 |
| qh-search-filter | TC_Search_01 - TC_Search_01: Search_ValidKeyword @search | skipped | 1.52 |
| qh-search-filter | TC_Search_02 - TC_Search_02: Search_UnaccentedKeyword @search | skipped | 0.77 |
| qh-search-filter | TC_Search_03 - TC_Search_03: Search_Autocomplete_ShowSuggestions @search | skipped | 0.75 |
| qh-search-filter | TC_Search_04 - TC_Search_04: Search_TypoKeyword_ShowSuggestions @search | skipped | 1.23 |
| qh-search-filter | TC_Search_05 - TC_Search_05: Search_BrandKeyword @search | skipped | 0.98 |
| qh-search-filter | TC_Search_06 - TC_Search_06 : Search_CategoryKeyword @search | skipped | 1.03 |
| qh-search-filter | TC_Search_07 - TC_Search_07: Search_Product_specification @search | skipped | 1.87 |
| qh-search-filter | TC_Search_08 - TC_Search_08: Search_InvalidKeyword_ShowEmptyMessage @search | skipped | 1.43 |
| qh-search-filter | TC_Search_09 - TC_Search_09: Search_EmptyInput_NoAction @search | skipped | 1.81 |
| qh-search-filter | TC_Search_10 - TC_Search_10: Search_Special_Characters @search | skipped | 1.34 |
| qh-search-filter | TC_Search_11 - TC_Search_11: Search_LongString_TruncatedOrHandled @search | skipped | 1.43 |
| qh-search-filter | TC_Search_18 - TC_Search_18: Search_history_suggestion @search | skipped | 1.19 |
| tt-installment | TT-001: mở thông tin trả góp qua công ty tài chính | passed | 25.06 |
| tt-installment | TT-002: tỷ lệ trả trước giữ đúng lựa chọn 0,30,50,80 | passed | 30.96 |
| tt-installment | TT-003: checkout, đăng nhập và chuyển cổng thanh toán | skipped | 1.82 |
| cp | PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed | 15.61 |
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | passed | 16.52 |
| cp | PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm | passed | 6.70 |
| cp | PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17 | passed | 5.28 |
| cp | PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng | passed | 6.94 |
| cp | PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng | passed | 7.40 |
| cp | PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập | passed | 10.81 |
| cp | PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay | passed | 16.17 |
| cp | PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP | passed | 7.94 |
| cp | PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai | passed | 22.98 |
| cp | PRODUCT_COMPARE_LIST_Remove_02 - bỏ cột cuối | passed | 18.93 |
| cp | PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ | failed | 67.78 |
| cp | PRODUCT_COMPARE_SPECS_View_01 - tên hàng cơ bản | passed | 26.95 |
| cp | PRODUCT_COMPARE_SPECS_View_02 - dung lượng 256 GB | passed | 15.40 |
| cp | PRODUCT_COMPARE_SPECS_View_03 - giá trị cùng hàng Chipset | passed | 29.02 |
| cp | PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết | failed | 50.78 |
| cp | PRODUCT_COMPARE_SEARCH_Search_02 - từ khóa không tồn tại | passed | 20.11 |
| cp | PRODUCT_COMPARE_SEARCH_Clear_01 - xóa từ khóa | passed | 22.40 |
| cp | PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách | failed | 29.54 |
| cp | PRODUCT_COMPARE_SEARCH_Input_02 - ký tự đặc biệt | passed | 27.41 |
| cp | PRODUCT_COMPARE_SEARCH_Input_03 - tiếng Việt có dấu | passed | 32.36 |
| cp | PRODUCT_COMPARE_PAGE_Reload_01 - reload theo URL | passed | 12.32 |
| cp | PRODUCT_COMPARE_PAGE_Open_02 - tab mới từ URL | passed | 6.15 |
| cp | PRODUCT_COMPARE_PAGE_View_01 - chỉ kiểm tra href Mua ngay | passed | 4.93 |
| cp | PRODUCT_COMPARE_PAGE_Responsive_01 - viewport 390x844 | passed | 8.11 |
| rv | PRODUCT_REVIEW_SUMMARY_View_01 - tiêu đề khu vực | passed | 17.04 |
| rv | PRODUCT_REVIEW_SUMMARY_View_02 - điểm trung bình | passed | 17.59 |
| rv | PRODUCT_REVIEW_SUMMARY_View_03 - tổng lượt hiện tại | passed | 13.49 |
| rv | PRODUCT_REVIEW_SUMMARY_View_04 - phân bố năm sao | passed | 16.91 |
| rv | PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm | passed | 12.74 |
| rv | PRODUCT_REVIEW_FILTER_Select_01 - lọc 5 sao | passed | 12.62 |
| rv | PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao | passed | 10.65 |
| rv | PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao | passed | 18.13 |
| rv | PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao | passed | 10.95 |
| rv | PRODUCT_REVIEW_FILTER_Select_05 - nhánh rỗng 1 sao | passed | 9.42 |
| rv | PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao | passed | 8.24 |
| rv | PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng | passed | 8.82 |
| rv | PRODUCT_REVIEW_FILTER_Select_07 - Đã mua hàng | passed | 9.64 |
| rv | PRODUCT_REVIEW_LIST_Open_01 - Xem tất cả đánh giá | passed | 13.21 |
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
| pd | PRODUCT_DETAIL_INFO_Open_01 - mở URL sản phẩm cố định | passed | 7.39 |
| pd | PRODUCT_DETAIL_INFO_View_01 - hiển thị tên, giá, ảnh và thông số | passed | 6.18 |
| pd | PRODUCT_DETAIL_INFO_View_02 - giá bán và giá gốc đang hiển thị | passed | 5.73 |
| pd | PRODUCT_DETAIL_INFO_View_03 - không có nhãn phần trăm giảm cạnh giá | passed | 4.17 |
| pd | PRODUCT_DETAIL_VARIANT_Select_01 - chọn 256GB | passed | 10.30 |
| pd | PRODUCT_DETAIL_VARIANT_Select_02 - chọn 512GB | passed | 9.05 |
| pd | PRODUCT_DETAIL_VARIANT_Switch_01 - chuyển 512GB rồi về 256GB | passed | 11.18 |
| pd | PRODUCT_DETAIL_VARIANT_Open_01 - mở trực tiếp URL 512GB | passed | 5.71 |
| pd | PRODUCT_DETAIL_COLOR_Select_01 - chọn lần lượt các màu đang hiển thị | passed | 11.91 |
| pd | PRODUCT_DETAIL_COLOR_Select_02 - chọn Xanh Lá Xô Thơm và kiểm tra ảnh | passed | 6.84 |
| pd | PRODUCT_DETAIL_VARIANT_Switch_02 - giữ màu Tím khi đổi sang 512GB | passed | 9.81 |
| pd | PRODUCT_DETAIL_GALLERY_Select_01 - chọn ảnh thu nhỏ | passed | 8.48 |
| pd | PRODUCT_DETAIL_GALLERY_Navigate_01 - chuyển ảnh bằng Next | passed | 6.34 |
| pd | PRODUCT_DETAIL_GALLERY_Navigate_02 - Previous tại slide đầu | passed | 7.42 |
| pd | PRODUCT_DETAIL_GALLERY_Open_01 - mở ảnh lớn, Escape và đóng hộp thoại video | passed | 7.73 |
| pd | PRODUCT_DETAIL_INFO_View_04 - hiển thị khối Khuyến mãi đi kèm | passed | 5.54 |
| pd | PRODUCT_DETAIL_INFO_Open_02 - mở phần mô tả sản phẩm | passed | 7.21 |
| pd | PRODUCT_DETAIL_SPECS_View_01 - hiển thị các hàng thông số | passed | 6.09 |
| pd | PRODUCT_DETAIL_SPECS_Open_01 - mở bảng thông số mở rộng | passed | 7.36 |
| pd | PRODUCT_DETAIL_SPECS_Switch_01 - chuyển nhóm Màn hình | passed | 7.66 |
| pd | PRODUCT_DETAIL_ACTION_Add_01 - thêm vào giỏ và dọn sản phẩm kiểm thử | skipped | 0.00 |
| pd | PRODUCT_DETAIL_ACTION_Buy_01 - MUA NGAY tới giỏ rồi dọn sản phẩm kiểm thử | skipped | 0.00 |
| pd | PRODUCT_DETAIL_COLOR_Switch_01 - đổi giữa hai màu | passed | 7.77 |
| pd | PRODUCT_DETAIL_ERROR_Open_01 - URL không tồn tại | passed | 0.83 |
| pd | PRODUCT_DETAIL_ERROR_Security_01 - URL chứa payload script | skipped | 0.00 |
| pd | PRODUCT_DETAIL_COMPAT_Reload_01 - tải lại vẫn giữ màu và URL | passed | 11.61 |
| pd | PRODUCT_DETAIL_COMPAT_Navigate_01 - Back rồi Forward | passed | 15.98 |
| pd | PRODUCT_DETAIL_COMPAT_View_01 - hiển thị ở viewport 390x844 | passed | 6.52 |

## Failures
### PC-025 PC-026: tìm CPU và chuỗi không khớp

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


### Bổ sung: tăng/giảm số lượng và hủy xóa tại 1

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


### TC_Filter_23: Filter_ByLocation

TimeoutError: page.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('button.button__change-province')[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    - locator resolved to visible <button data-slot="button" class="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-neutral-300 cpsui:text-neutral-800 cpsui:bg-pure-white cpsui:hover:border-neutral-400 cpsui:hover:bg-neutral-50 cpsui:disabled:border-black-300 cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white flex-1 px-1…>Từ chối</button>[22m
[2m    - interception handler has finished, continuing[22m


### PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ

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


### PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết

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


### PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách

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
- PRODUCT_REVIEW_FORM_Open_01 - Mở form khi tài khoản thường đã đăng nhập: Xem annotation nguồn.
- PRODUCT_REVIEW_FORM_View_01 - Hiển thị năm nhãn đánh giá sao: Xem annotation nguồn.
- PRODUCT_REVIEW_RATING_Select_01 - Chọn mức sao thấp nhất: Xem annotation nguồn.
- PRODUCT_REVIEW_RATING_Switch_01 - Đổi từ sao thấp nhất sang cao nhất: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_View_01 - Hiển thị hướng dẫn tối thiểu 15 ký tự: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Clear_01 - Xóa nội dung về rỗng trước khi gửi: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Validate_01 - Nội dung ngắn hơn hướng dẫn tối thiểu: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Input_01 - Nhập đúng 15 ký tự, chưa gửi: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Input_02 - Nhập 16 ký tự, chưa gửi: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Limit_01 - Nhập nội dung dài 1000 ký tự: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Validate_02 - Nội dung chỉ có 15 dấu cách: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Input_03 - Nhập ký tự đặc biệt dưới dạng văn bản: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Input_04 - Nhập tiếng Việt và emoji: Xem annotation nguồn.
- PRODUCT_REVIEW_CONTENT_Security_01 - Nhập chuỗi script như văn bản, không gửi: Xem annotation nguồn.
- PRODUCT_REVIEW_ATTACHMENT_View_01 - Hiển thị tùy chọn thêm ảnh và loại file khai báo: Xem annotation nguồn.
- PRODUCT_DETAIL_ACTION_Add_01 - thêm vào giỏ và dọn sản phẩm kiểm thử: Xem annotation nguồn.
- PRODUCT_DETAIL_ACTION_Buy_01 - MUA NGAY tới giỏ rồi dọn sản phẩm kiểm thử: Xem annotation nguồn.
- PRODUCT_DETAIL_ERROR_Security_01 - URL chứa payload script: Xem annotation nguồn.

Lỗi runner/assertion chưa tự chứng minh lỗi website. Xem phân tích và kết quả chạy lại.
