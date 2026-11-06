# Phân tích lỗi ASM8 — Hồng Nhân

## PC-025/026: kết quả tìm và khôi phục danh sách

- Lượt 17:39, test dừng ở bước xóa từ khóa để khôi phục danh sách. DOM chỉ còn một sản phẩm “Giá Liên Hệ”, không có nút Chọn thỏa locator.
- Trace cho thấy truy vấn ProductBuildPC khi tìm/xóa từ khóa có filter_price từ0 đến0. Truy vấn mở danh mục ban đầu không có giới hạn này. Đây là dấu hiệu cần kiểm tra trạng thái bộ lọc giá, chưa đủ để kết luận lỗi backend.
- Lượt sau đã chờ metadata category và chờ response ProductBuildPC tương ứng từng từ khóa. Assertion vẫn Fail: tìm tên CPU Intel Core i5 12400F nhưng phần tử đầu là CPU Intel Core Ultra5 225F(Tray).
- Cần phân biệt kết quả liên quan nằm ở vị trí khác với việc tìm kiếm trả sản phẩm sai. Đề xuất đối chiếu toàn bộ kết quả, đặc tả thứ tự/relevance và truy vấn lọc giá. Không sửa assertion thành chỉ kiểm tra body tải được để lấy Pass.
- Giữ nguyên Fail trong báo cáo mới nhất nếu chưa đủ căn cứ thay oracle. Một test chứa hai ID, nên khi bước PC-025 Fail không coi PC-026 đã thực thi hết.

## Luồng bổ sung số lượng

- Có lượt tăng/giảm/hủy xóa tại1 Pass. Trong lượt chung có popup “Bữa khác nha!” can thiệp khi chờ modal xác nhận xóa và test Fail.
- Dấu hiệu thuộc timing/popup và script, chưa xác nhận lỗi tính tiền. Cần đối chiếu các lượt có cùng hash source rồi mới đánh giá nghi flaky.
- Hướng xử lý tiếp: đóng popup qua UI tại điểm chuẩn bị trước thao tác số lượng, tránh handler dùng chung làm thay đổi luồng xác nhận; chạy lại cùng SKU và lưu ảnh từng trạng thái. Không force click hoặc tắt logic website để lấy Pass.

## Những lỗi đã sửa

| Lỗi | Bằng chứng | Cách sửa |
|---|---|---|
| Strict mode trạng thái rỗng/tổng PC |2 và4 phần tử khớp cùng locator|Giới hạn phần tử visible|
| Định dạng địa chỉ HCM |Có cả TP HCM và TP. HCM|Chấp nhận hai cách viết, vẫn kiểm tra địa phương|
| Kho online không có địa chỉ tỉnh |CellphoneS Kho giao hàng Online trong danh sách Hà Nội|Ngoại lệ cụ thể, đồng thời kiểm tra tỉnh và các cửa hàng vật lý|
| Handler cookie xung đột CP |Nút Từ chối nằm dưới modal so sánh|Giữ handler riêng của CP/RV/PD, giới hạn handler chung|
| Sforum chờ cookie đóng vô hạn |Từ chối đổi nút sang Xác nhận, banner vẫn hiện|Không dùng handler chặn toàn cục trên Sforum; test thao tác header/bài đầu bằng click bình thường|
| Từ khóa rỗng Sforum có dấu gạch dưới |UI chuẩn hóa zzx_no_article_987654 thành zzxnoarticle987654|Case tìm không kết quả dùng chuỗi chữ-số, tách khỏi yêu cầu chuẩn hóa ký tự|

Các kết quả trước/sau sửa có source khác nhau không được dùng làm bằng chứng flaky. Xem STABILITY-CHECK.md để đối chiếu các lượt cùng phiên bản.
