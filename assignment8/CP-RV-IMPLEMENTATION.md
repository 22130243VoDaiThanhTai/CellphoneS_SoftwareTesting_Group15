# Triển khai CP/RV — 22130275 Trịnh Quang Thông

Ngày khảo sát DOM và triển khai: 05/11/2026. Không commit/push/checkout. Chỉ làm chức năng cá nhân.

## Nguồn

Workbook `../testcases/Group15_22130275_TrinhQuangThong.xlsx`, sheet So sánh SP (25 case) và Đánh giá SP (29 case). Quy trình, Expected và tiền đề được đọc trước khi viết code. Lịch sử Passed thủ công của workbook không được dùng làm Passed Playwright.

## Tổ chức

Project hiện có ba project Playwright: pd, cp, rv. PD giữ spec gốc. CP/RV trong `Automation Testing Project - Group 15/tests/quangthong/22130275_TrinhQuangThong_CP_RV.spec.js`. Mỗi test dùng browser context sạch và tự chuẩn bị dữ liệu. Dùng một worker, retries=0. `npm run test:cp-rv` chỉ chạy hai chức năng mới; `npm test` chọn cả ba chức năng cá nhân.

## Selector được khảo sát trên Chrome thật

| Vùng | Selector/điều khiển | Phép kiểm tra |
|---|---|---|
| Bảng so sánh | h1.box-compare__title, .product-info--items > .product-info--item | Tên, số cột có sản phẩm và số ô trống |
| Tìm trên trang so sánh | .modal.is-active, placeholder Nhập tên sản phẩm muốn so sánh | Chọn đúng .product-name và + Chọn để so sánh |
| Khay PDP | .pdp-compare-button-box .label, .compare-products | Một/ba sản phẩm, chống trùng, giới hạn thứ tư |
| Tìm trong khay PDP | .popup-select-product.show #select-product-to-compare | Placeholder Tìm sản phẩm muốn so sánh, nút Chọn |
| Dọn khay | .compare-product.has-product .remove-compare-product | Không để lại mục so sánh trong context thử |
| Cấu hình chi tiết | .box-popup__wrapper, .box-popup--title | Tiêu đề, nhóm thông số và nút Đóng |
| Đánh giá công khai | .boxReview, .average-rating, .boxReview-score__count | Điểm và tổng lượt hiện tại, không ghi cứng số |
| Phân bố sao | .rating-level, .star-count, progress | Đủ năm mức và tiền đề số đánh giá bằng 0 |
| Lọc đánh giá | .filter-item, .boxReview-comment-item | Dấu active, số sao/nhãn mua hàng hoặc trạng thái rỗng |

Không dùng API nội bộ hay mock để dựng danh sách so sánh. Không ghi cứng giá, nội dung khuyến mãi hoặc số review. Chọn mẫu iPhone 17 Pro và Samsung Galaxy S26 Ultra đúng dữ liệu trong workbook. Nếu sản phẩm biến mất khỏi danh mục, test báo không đạt tiền đề thay vì chọn mẫu khác tùy ý.

## Khác biệt với lựa chọn Automate cũ

- CP Responsive trước đây No do cần đánh giá trực quan. Script mới kiểm tra viewport, geometry, phần tử và thao tác mở hộp tìm. Đây là phần kiểm tra có thể tự động hóa, ảnh vẫn cần người xem để đánh giá khả năng đọc toàn bố cục. Không đổi hàng loạt Note của workbook.
- 14 case RV đọc/lọc công khai có implementation thực thi.
- 15 case RV form/input còn khai báo Skipped có metadata lý do, chưa có implementation thao tác form trong Playwright. 12 case thiếu phiên tài khoản phù hợp trong context sạch. Ba case còn lại chưa có Expected validation xác minh (14 ký tự, 1000 ký tự, 15 dấu cách).
- Không thao tác form ẩn trong DOM để thay cho form thật. Không lấy cookie từ Chrome, không đăng nhập, không tải file, không bấm GỬI ĐÁNH GIÁ.
- Case Có hình ảnh theo workbook kiểm tra nhánh rỗng. Khi dữ liệu xuất hiện ảnh, assertion không đạt cần xem lại dữ liệu/tiền đề, không tự đổi Expected.

## Giới hạn còn lại

Cần đặc tả hoặc môi trường/tài khoản kiểm thử cho phép gửi dữ liệu để xác minh ba quy tắc validation. Việc textarea nhận một chuỗi chỉ chứng minh thao tác nhập, không chứng minh server chấp nhận/từ chối. Không sửa ba Expected CẦN XÁC MINH để ép hoàn tất.

Bộ nộp Classroom PD (18 slide + ZIP) giữ nguyên. Chỉ bổ sung vào báo cáo cá nhân đầy đủ sau khi thống nhất kết quả CP/RV và phạm vi form.

Ngày 05/11 người dùng xác nhận chưa có môi trường/đặc tả bổ sung và yêu cầu giữ ba case validation RV Untested. Các case này tiếp tục Skipped trong runner, không tự gửi dữ liệu trên website thật.

Ghi nhận khi kiểm tra bảo toàn file: bản PPTX trong submission/ có thời gian sửa 05/11 lúc 21:38:49 và khác byte bản personal/ lúc 21:25:19 (trước khi triển khai CP/RV). Không đồng bộ/ghi đè hai bản này trong nhiệm vụ CP/RV, để bảo toàn thay đổi người dùng. Workbook vẫn trùng SHA-256 đã đọc khi bắt đầu triển khai.

Kết quả lượt đủ sau sửa asm8-20261105221047-29496: CP 25 Passed, RV 14 Passed/15 Skipped, không Failed. Xem CP-RV-RUN-REPORT.md. Một lượt đủ sau sửa, chưa khẳng định ổn định dài hạn.
