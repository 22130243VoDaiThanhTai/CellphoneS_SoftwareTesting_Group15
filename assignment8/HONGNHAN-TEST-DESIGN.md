# Test design ASM8 — Quách Hồng Nhân, 23130216

Website CellphoneS. 3 chức năng: Build PC, hệ thống cửa hàng, Sforum. Chrome 1280x800, vi-VN, không đăng nhập. Case độc lập trong context sạch, chờ DOM/dữ liệu bằng điều kiện, không cố định giá hoặc số cửa hàng.

## Build PC

Nguồn workbook `testcases/Group15_23130216_QuachHongNhan.xlsx`, sheet Build PC. Giữ nguyên dữ liệu lịch sử ASM6.

| Test runner | ID workbook được ánh xạ |
|---|---|
| Trạng thái rỗng | PC-001,002,023 |
| Điều hướng từ danh mục | PC-003 |
| Mở/đóng popup CPU | PC-004,005 |
| Chọn CPU, tổng một linh kiện | PC-006,019 |
| Chọn tám nhóm cốt lõi | PC-007 đến014 |
| Thay CPU và tính chênh lệch | PC-015,021 |
| Thay/xóa RAM, giữ SSD | PC-016,017,022 |
| Ba linh kiện, tổng và reset | PC-018,020 |
| Tìm linh kiện và chuỗi không khớp | PC-025,026 |
| Nhấp đúp không thêm trùng | PC-030 |
| Tăng/giảm số lượng và hủy xóa tại1 | Bổ sung ASM8 |

11 test runner tương ứng 26 ID đã thiết kế và một luồng bổ sung. Không báo 30/30 Pass.
PC-024 thiếu dữ liệu SKU hết hàng. PC-027/028 cần xác minh tính năng lưu/mở cấu hình. PC-029 cần bắt và đối chiếu tệp tải. Bốn ID này chưa triển khai hoàn chỉnh, nằm ngoài discovered của runner; trạng thái lịch sử không dùng làm kết quả ngày06/11.

## 12 case mới cho cửa hàng và Sforum

Workbook hiện không có hai sheet này. Đặc tả dưới đây là phần bổ sung ASM8, chưa tuyên bố đã nhập vào template ASM6.

| ID | Tình huống | Bước/Input | Expected |
|---|---|---|---|
| ST-001 | Mở trang cửa hàng | Chờ danh sách tải, đọc số thẻ và dòng tổng | Số cửa hàng hiển thị bằng số thẻ, lớn hơn 0 |
| ST-002 | Lọc Hồ Chí Minh | Chọn Hồ Chí Minh, chờ tên vùng và danh sách cập nhật | Địa chỉ cửa hàng vật lý thuộc TP HCM; ngoại lệ kho online không có địa chỉ được ghi rõ |
| ST-003 | Lọc Quận 1 | Chọn Hồ Chí Minh rồi Quận 1 | Có kết quả, địa chỉ khớp Q.1 hoặc Quận 1 |
| ST-004 | Đổi tỉnh và reset quận | Chọn HCM/Quận 1 rồi đổi Hà Nội | Quận về giá trị 0, tên vùng Hà Nội, các cửa hàng vật lý thuộc Hà Nội |
| ST-005 | Thông tin cửa hàng | Đọc địa chỉ, giờ, số điện thoại, href tel | Có tên CellphoneS, định dạng giờ và số điện thoại hợp lệ, href khớp số |
| ST-006 | Chỉ đường | Đọc liên kết Xem đường đi | Đích www.google.com/maps có daddr CellphoneS không rỗng; không tự mở ứng dụng |
| SF-001 | Mở Sforum | Chờ menu hydrate, đọc logo và h3 ở vùng nhìn thấy | Logo nhìn thấy, có bài viết |
| SF-002 | Tìm iPhone | Nhập iPhone và Enter | URL /sforum/search?tim_kiem=iPhone, H1 đúng từ khóa, có tiêu đề liên quan |
| SF-003 | Tìm không có kết quả | Nhập zzxnoarticle987654 và Enter | Hiển thị thông báo Không có kết quả bạn cần tìm |
| SF-004 | Xem bài từ tìm kiếm | Tìm iPhone, ghi tiêu đề, mở bài đầu | Thoát trang search, H1 khớp tiêu đề, article có nội dung >300 ký tự |
| SF-005 | Điều hướng danh mục | Nhấn Tin công nghệ | URL khớp href, H1 đúng danh mục, có bài |
| SF-006 | Về trang chủ | Từ kết quả tìm kiếm nhấn logo | URL /sforum, hiển thị khu vực NỔI BẬT NHẤT |

## Oracle dữ liệu cửa hàng

Cùng địa phương có thể viết TP HCM hoặc TP. HCM. Chấp nhận khác biệt dấu chấm/khoảng trắng nhưng không chấp nhận địa phương khác. `CellphoneS Kho giao hàng Online` không có địa chỉ vật lý trong kết quả Hà Nội, nên kiểm tra riêng ngoại lệ này và yêu cầu có ít nhất một địa chỉ vật lý hợp lệ. Đồng thời assert tên vùng ở dòng tổng và reset quận. Không loại bỏ tùy ý mọi dòng không khớp để làm test Pass.

## Phân biệt thiếu tiền đề và lỗi

Thiếu tài khoản, thiếu assertion đúng nghiệp vụ: Skipped có lý do. HTTP403/CAPTCHA: ghi nhận rồi dừng lượt chạy, không vượt chặn. Sai locator, consent/hydration hoặc quy tắc định dạng quá chặt là lỗi script cần sửa và chạy lại. Chỉ kết luận bug sản phẩm sau khi đã xác minh Expected và tái hiện.

Một test PC chứa nhiều assertion. Nếu assertion đầu Fail, các bước sau không chạy. Vì vậy không suy diễn trạng thái của từng ID workbook từ một kết quả runner gộp.
