# ASM8 — Trang chi tiết sản phẩm

Trịnh Quang Thông — 22130275 — Group15. Ngày kiểm tra: 31/10/2026.

## Kết quả hiện tại

Lượt đầy đủ `asm8-20261031151155-46642`: **25 Passed, 0 Failed, 3 Skipped**; 25/28 test đã thực thi; 263.26 giây.

| Lượt | Run ID | Passed | Failed | Skipped | Giây |
|---|---|---:|---:|---:|---:|
| Đủ PD | asm8-20261031151155-46642 | 25 | 0 | 3 | 263.26 |
| Kiểm tra chọn lọc 1 | asm8-20261031150043-44990 | 2 | 0 | 0 | 20.27 |
| Kiểm tra chọn lọc 2 | asm8-20261031150713-45912 | 2 | 0 | 0 | 21.07 |

Hai lượt chọn lọc và lượt đầy đủ dùng cùng mã script cuối cùng; không cộng số lượng các lượt thành tổng case. Retries=0. Không dùng kết quả ASM6/ASM7 thay thế.

## Điều tra hai test

- COLOR_Select_02: locator ảnh và alt/src cũ đúng DOM. Ở lượt lỗi trước, UI còn Đang tải..., slide video vẫn active; lượt sau log báo ảnh hidden trong 8s nhưng ảnh afterEach đã hiện ảnh xanh. Vì vậy chưa đủ để kết luận lỗi sản phẩm.
- INFO_View_04: lúc UI còn Đang tải..., không có khối Khuyến mãi đi kèm; khi dữ liệu khu vực tải xong khối xuất hiện. Lượt chẩn đoán ghi nhận Hồ Chí Minh và cả ảnh xanh/khuyến mãi sẵn sàng sau khoảng 5.2 giây tính từ bắt đầu mở trình duyệt. Đây là một lần quan sát, không phải cam kết thời gian tải.
- Sửa riêng hai case: timeout test 60s; chờ nút `button.button__change-province` hết chữ Đang tải... tối đa 30s; assertion mục tiêu tối đa 15s. Các case khác giữ timeout 30s và expect 8s.
- Ảnh được scope vào `.gallery-product-detail .gallery-top .swiper-slide-active a.spotlight img`; vẫn bắt buộc visible, alt Xanh Lá Xô Thơm, src chứa sage, URL product_id đúng và dấu chọn màu đúng. Khuyến mãi vẫn bắt buộc đúng tiêu đề. Không đổi Expected thành tùy chọn.
- Đây là sửa đồng bộ trạng thái tải với phép kiểm tra. Điều kiện chờ vẫn có giới hạn và Fail nếu không đạt; không force click, không retry tự động, không try/catch nuốt lỗi. Hai lượt chọn lọc không đủ chứng minh hoàn toàn hết flaky trong mọi điều kiện mạng.

## Lịch sử được bảo toàn

Trước sửa: lượt `asm8-20261031104047-32943` có 24 Passed/1 Failed/3 Skipped; lượt chọn lọc `asm8-20261031104846-36243` có 2 Passed/2 Failed. Các report và trace gốc vẫn nằm trong assignment8 của repo; ZIP gọn chỉ mang kết quả mới và tóm tắt lịch sử.

## Phạm vi và skipped

- Chỉ PD của 22130275, chưa phải suite toàn nhóm. CP/RV chưa triển khai.
- ACTION_Add_01, ACTION_Buy_01: Skipped để không thay đổi giỏ hàng thật; code giữ khóa cleanup kể cả ALLOW_CART=1.
- ERROR_Security_01: Skipped, không mở URL payload.
- Không đặt hàng, thanh toán, đăng nhập hoặc gửi form. Chặn 403/CAPTCHA nếu gặp; xem log của từng lượt.
- Giá gốc là nhánh có điều kiện; không có giá gốc thì chưa thực thi phép so sánh giá gốc. Responsive chỉ kiểm tra các phần tử quy định, không phải toàn trang.

## Từng case trong lượt đầy đủ

| Case | Kết quả |
|---|---|
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

## Cách xem minh chứng

Mở `Report/index.html` để xem bảng kết quả và bấm liên kết ảnh. `Evidence/` chỉ giữ một bản cho mỗi nội dung ảnh, cùng ba log console. `Report/*_results.json` giữ kết quả runner và SHA-256 của summary gốc, chuyển đường dẫn ảnh sang liên kết tương đối và bỏ màu ANSI ở thông báo lỗi. Không đổi status/date/duration.

Không đưa bộ trace viewer, trace.zip và attachment trùng vào ZIP gọn. Các bản gốc vẫn được lưu ở repo để điều tra sâu.
