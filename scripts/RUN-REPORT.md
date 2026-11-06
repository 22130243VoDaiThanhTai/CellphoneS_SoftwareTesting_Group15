# Kết quả Playwright — Assignment 7, ba chức năng cá nhân

Trịnh Quang Thông, 22130275, Group15. Ngày chạy 06/11/2026.

Run `asm7-20261106092804-51425`. Lệnh `npm test` (runner gọi Playwright). Chrome headed, 1280x800, vi-VN, một worker, retries=0.

**82 khai báo: 64 Passed, 0 Failed, 18 Skipped**, 608.51 giây, exit 0. Đây là lượt chạy thật sau khi hợp nhất vào một spec ASM7, không lấy kết quả ASM8 thay thế.

| Module | Passed | Failed | Skipped | Tổng |
|---|---:|---:|---:|---:|
| PD |25|0|3|28|
| CP |25|0|0|25|
| RV |14|0|15|29|
| Tổng |64|0|18|82|

## Minh chứng

- Trong repo: run-evidence/asm7-20261106092804-51425/report/index.html là báo cáo Playwright gốc, cùng data/. JSON summary và results gốc ở cùng lượt.
- Logs: console.log, command.json, exit.json, source-hashes.json.
- Trong ZIP: Report/index.html là bản tổng hợp từ JSON thật, đường dẫn ảnh tương đối. Ảnh gốc giữ nguyên byte, mỗi nội dung chỉ lưu một file.

## Giới hạn

- PD giỏ/mua/payload giữ skip, không đặt hàng/thanh toán hoặc mở URL payload. Khóa giỏ/mua vẫn giữ kể cả ALLOW_CART=1.
- RV 14 test công khai đã triển khai. Mười lăm RV khác chỉ khai báo skip, chưa triển khai form: 12 cần phiên tài khoản phù hợp, 3 validation cần đặc tả/môi trường được phép.
- Ba validation trong workbook tiếp tục Untested theo quyết định người dùng. Không đổi Excel bằng kết quả runner.
- Giá gốc chỉ so sánh khi phần tử gạch ngang hiện diện. Nhánh rỗng review phụ thuộc dữ liệu hiện tại. Responsive chỉ kiểm tra phần tử/geometry trong phạm vi code.
- Không gặp 403/CAPTCHA trong lượt này. Không đăng nhập, gửi review, thêm giỏ hoặc bấm mua.

## Hợp nhất và nguồn

Dùng logic của hai spec ASM8 đã chạy 05/11. PD giữ helper riêng, CP/RV đặt trong block riêng để tránh trùng tên. Một import dùng fixture chung, tên test giữ ID workbook. Cấu hình ba project lọc bằng tiền tố ID.

SHA-256 spec của lượt đủ và demo giống nhau: `967bf78b9d810c926d4aa7dbf0f79633e48453436011706ab66ca1e3e3c6c5aa`. Fixture cũng giống nhau.
Sau lượt đủ, chỉ chỉnh tiêu đề reporter từ ASM8 thành ASM7 và tăng kích thước video demo lên 1280x800. Không thay assertion/spec/fixture. Hash source lúc chạy giữ trong logs; hash source đóng gói lưu tại Report/results.json.

## Demo mở rộng

Lượt `asm7-20261106093848-56296`: 3 Passed, 0 Failed, 0 Skipped, 51.73 giây. Ba test: CP thêm ba cột, RV lọc 4 sao rồi reset, PD chọn 512GB. Không cộng lượt demo thành tổng 85 case.
Video và manifest ở demo/2026-11-06-three-functions/. Chỉ ghi viewport Chrome, không ghi desktop hoặc Codex. Video mới chưa upload YouTube. TXT giữ link https://youtu.be/rdBQQNcqgkg của PD cũ đến khi có link mới.

## Lịch sử bảo toàn

Ngày 30/10 có hai lượt PD: 25 Passed/0 Failed/3 Skipped, lượt demo PD cũng 25/0/3. Báo cáo/script/bộ ZIP cũ đã sao lưu ngoài repo tại ~/Documents/ChatGPT/Software Testing/backups/asm7-before-three-functions-20261106/.
Bốn Expected/Note v8 đã hợp nhất vào workbook chính trước đó. Không còn coi v8 là file chính. Không sửa file Excel trong lượt này.

## Từng case

| Case | Kết quả |
|---|---|
| PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed |
| PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | passed |
| PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm | passed |
| PRODUCT_COMPARE_SEARCH_Search_01 - tìm iPhone 17 | passed |
| PRODUCT_COMPARE_LIST_Add_02 - thêm cùng hãng | passed |
| PRODUCT_COMPARE_LIST_Add_03 - thêm khác hãng | passed |
| PRODUCT_COMPARE_LIST_Add_04 - ba cột độc lập | passed |
| PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay | passed |
| PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP | passed |
| PRODUCT_COMPARE_LIST_Remove_01 - bỏ cột thứ hai | passed |
| PRODUCT_COMPARE_LIST_Remove_02 - bỏ cột cuối | passed |
| PRODUCT_COMPARE_LIST_Replace_01 - thêm lại ô đã bỏ | passed |
| PRODUCT_COMPARE_SPECS_View_01 - tên hàng cơ bản | passed |
| PRODUCT_COMPARE_SPECS_View_02 - dung lượng 256 GB | passed |
| PRODUCT_COMPARE_SPECS_View_03 - giá trị cùng hàng Chipset | passed |
| PRODUCT_COMPARE_SPECS_Open_01 - mở cấu hình chi tiết | passed |
| PRODUCT_COMPARE_SEARCH_Search_02 - từ khóa không tồn tại | passed |
| PRODUCT_COMPARE_SEARCH_Clear_01 - xóa từ khóa | passed |
| PRODUCT_COMPARE_SEARCH_Input_01 - ba dấu cách | passed |
| PRODUCT_COMPARE_SEARCH_Input_02 - ký tự đặc biệt | passed |
| PRODUCT_COMPARE_SEARCH_Input_03 - tiếng Việt có dấu | passed |
| PRODUCT_COMPARE_PAGE_Reload_01 - reload theo URL | passed |
| PRODUCT_COMPARE_PAGE_Open_02 - tab mới từ URL | passed |
| PRODUCT_COMPARE_PAGE_View_01 - chỉ kiểm tra href Mua ngay | passed |
| PRODUCT_COMPARE_PAGE_Responsive_01 - viewport 390x844 | passed |
| PRODUCT_REVIEW_SUMMARY_View_01 - tiêu đề khu vực | passed |
| PRODUCT_REVIEW_SUMMARY_View_02 - điểm trung bình | passed |
| PRODUCT_REVIEW_SUMMARY_View_03 - tổng lượt hiện tại | passed |
| PRODUCT_REVIEW_SUMMARY_View_04 - phân bố năm sao | passed |
| PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm | passed |
| PRODUCT_REVIEW_FILTER_Select_01 - lọc 5 sao | passed |
| PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao | passed |
| PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao | passed |
| PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao | passed |
| PRODUCT_REVIEW_FILTER_Select_05 - nhánh rỗng 1 sao | passed |
| PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao | passed |
| PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng | passed |
| PRODUCT_REVIEW_FILTER_Select_07 - Đã mua hàng | passed |
| PRODUCT_REVIEW_LIST_Open_01 - Xem tất cả đánh giá | passed |
| PRODUCT_REVIEW_FORM_Open_01 - Mở form khi tài khoản thường đã đăng nhập | skipped |
| PRODUCT_REVIEW_FORM_View_01 - Hiển thị năm nhãn đánh giá sao | skipped |
| PRODUCT_REVIEW_RATING_Select_01 - Chọn mức sao thấp nhất | skipped |
| PRODUCT_REVIEW_RATING_Switch_01 - Đổi từ sao thấp nhất sang cao nhất | skipped |
| PRODUCT_REVIEW_CONTENT_View_01 - Hiển thị hướng dẫn tối thiểu 15 ký tự | skipped |
| PRODUCT_REVIEW_CONTENT_Clear_01 - Xóa nội dung về rỗng trước khi gửi | skipped |
| PRODUCT_REVIEW_CONTENT_Validate_01 - Nội dung ngắn hơn hướng dẫn tối thiểu | skipped |
| PRODUCT_REVIEW_CONTENT_Input_01 - Nhập đúng 15 ký tự, chưa gửi | skipped |
| PRODUCT_REVIEW_CONTENT_Input_02 - Nhập 16 ký tự, chưa gửi | skipped |
| PRODUCT_REVIEW_CONTENT_Limit_01 - Nhập nội dung dài 1000 ký tự | skipped |
| PRODUCT_REVIEW_CONTENT_Validate_02 - Nội dung chỉ có 15 dấu cách | skipped |
| PRODUCT_REVIEW_CONTENT_Input_03 - Nhập ký tự đặc biệt dưới dạng văn bản | skipped |
| PRODUCT_REVIEW_CONTENT_Input_04 - Nhập tiếng Việt và emoji | skipped |
| PRODUCT_REVIEW_CONTENT_Security_01 - Nhập chuỗi script như văn bản, không gửi | skipped |
| PRODUCT_REVIEW_ATTACHMENT_View_01 - Hiển thị tùy chọn thêm ảnh và loại file khai báo | skipped |
| PRODUCT_DETAIL_INFO_Open_01 - mở URL sản phẩm cố định | passed |
| PRODUCT_DETAIL_INFO_View_01 - hiển thị tên, giá, ảnh và thông số | passed |
| PRODUCT_DETAIL_INFO_View_02 - giá bán và giá gốc đang hiển thị | passed |
| PRODUCT_DETAIL_INFO_View_03 - không có nhãn phần trăm giảm cạnh giá | passed |
| PRODUCT_DETAIL_VARIANT_Select_01 - chọn 256GB | passed |
| PRODUCT_DETAIL_VARIANT_Select_02 - chọn 512GB | passed |
| PRODUCT_DETAIL_VARIANT_Switch_01 - chuyển 512GB rồi về 256GB | passed |
| PRODUCT_DETAIL_VARIANT_Open_01 - mở trực tiếp URL 512GB | passed |
| PRODUCT_DETAIL_COLOR_Select_01 - chọn lần lượt các màu đang hiển thị | passed |
| PRODUCT_DETAIL_COLOR_Select_02 - chọn Xanh Lá Xô Thơm và kiểm tra ảnh | passed |
| PRODUCT_DETAIL_VARIANT_Switch_02 - giữ màu Tím khi đổi sang 512GB | passed |
| PRODUCT_DETAIL_GALLERY_Select_01 - chọn ảnh thu nhỏ | passed |
| PRODUCT_DETAIL_GALLERY_Navigate_01 - chuyển ảnh bằng Next | passed |
| PRODUCT_DETAIL_GALLERY_Navigate_02 - Previous tại slide đầu | passed |
| PRODUCT_DETAIL_GALLERY_Open_01 - mở ảnh lớn, Escape và đóng hộp thoại video | passed |
| PRODUCT_DETAIL_INFO_View_04 - hiển thị khối Khuyến mãi đi kèm | passed |
| PRODUCT_DETAIL_INFO_Open_02 - mở phần mô tả sản phẩm | passed |
| PRODUCT_DETAIL_SPECS_View_01 - hiển thị các hàng thông số | passed |
| PRODUCT_DETAIL_SPECS_Open_01 - mở bảng thông số mở rộng | passed |
| PRODUCT_DETAIL_SPECS_Switch_01 - chuyển nhóm Màn hình | passed |
| PRODUCT_DETAIL_ACTION_Add_01 - thêm vào giỏ và dọn sản phẩm kiểm thử | skipped |
| PRODUCT_DETAIL_ACTION_Buy_01 - MUA NGAY tới giỏ rồi dọn sản phẩm kiểm thử | skipped |
| PRODUCT_DETAIL_COLOR_Switch_01 - đổi giữa hai màu | passed |
| PRODUCT_DETAIL_ERROR_Open_01 - URL không tồn tại | passed |
| PRODUCT_DETAIL_ERROR_Security_01 - URL chứa payload script | skipped |
| PRODUCT_DETAIL_COMPAT_Reload_01 - tải lại vẫn giữ màu và URL | passed |
| PRODUCT_DETAIL_COMPAT_Navigate_01 - Back rồi Forward | passed |
| PRODUCT_DETAIL_COMPAT_View_01 - hiển thị ở viewport 390x844 | passed |
