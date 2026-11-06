# Assignment 8 — Trịnh Quang Thông, 22130275, Group15

Cập nhật hồ sơ ngày 06/11/2026. Phạm vi: Trang chi tiết sản phẩm (PD), So sánh sản phẩm (CP), Đánh giá sản phẩm (RV) của một thành viên. Chưa phải suite tất cả thành viên nhóm.

## Kết quả đã chạy thật

Lượt `asm8-20261105222818-34028`, ngày 05/11/2026: **64 Passed, 0 Failed, 18 Skipped**, 82 khai báo, 552,83 giây, exit code 0. PD 25/0/3, CP 25/0/0, RV 14/0/15.

- [INTEGRATION-RUN-REPORT.md](INTEGRATION-RUN-REPORT.md): kết quả từng case và ảnh của lượt chạy chung.
- [CP-RV-RUN-REPORT.md](CP-RV-RUN-REPORT.md): lịch sử sửa locator/cookie và chạy lại CP/RV.
- [RUN-REPORT.md](RUN-REPORT.md): báo cáo PD lịch sử ngày 31/10, không dùng làm số liệu hiện tại của cả ba chức năng.
- [PLAN.md](PLAN.md): checklist cá nhân và phần nhóm còn lại.
- [SUBMISSION-CHECK.md](SUBMISSION-CHECK.md): cấu trúc và kiểm tra bộ nộp hiện tại.
- [ASSIGNMENT-8.md](ASSIGNMENT-8.md): đề do người dùng cung cấp.
- [README project](Automation%20Testing%20Project%20-%20Group%2015/README.md): cài và chạy.

## Hai file nộp cá nhân hiện tại

Trong `../submission/Assignment8_22130275_TrinhQuangThong/`:

1. `22130275_TrinhQuangThong.pptx`: 25 slide, đủ tám phần của đề, cập nhật cả PD/CP/RV. Giữ phong cách của bản PD đã chỉnh, thêm code CP/RV, ảnh thực thi, báo cáo Playwright, log và phân tích lỗi. Template cá nhân tạm thời, chưa xác nhận template chung của nhóm.
2. `22130275_TrinhQuangThong_TestScript.zip`: 73 file, khoảng 9,42 MiB. Source/ gồm 11 file thực tế đã chạy. Report/ gồm HTML tổng hợp, JSON từng case và kiểm tra lần chạy lại. Evidence/ gồm 51 PNG khác nội dung, bốn log và ghi chú nguồn. Root có README, RUN-REPORT và MANIFEST. Không chứa node_modules, trace viewer, workbook hoặc bài thành viên khác.

Sau giải nén, mở Report/index.html để xem kết quả và ảnh. HTML này là bản tổng hợp từ dữ liệu thật. HTML Playwright gốc đầy đủ vẫn nằm trong `Test Report - Group 15/asm8-20261105222818-34028/`. Các thư mục đã giải nén thủ công trước đây không tự cập nhật.

## Phần chưa thực thi

Ba skip PD: giỏ, mua và payload. Mười lăm skip RV gồm 12 case cần phiên tài khoản phù hợp và ba validation chưa có đặc tả/môi trường gửi thử. Mười lăm RV chỉ khai báo skip, chưa triển khai thao tác form. Ba validation trong workbook tiếp tục Untested theo quyết định người dùng, không sửa workbook để khớp runner.

CP/RV đã lặp 39 Passed/0 Failed/15 Skipped ở hai lượt có cùng spec, fixture, config. Chưa đủ kết luận hết flaky lâu dài. Nhánh rỗng review và dữ liệu sản phẩm có thể thay đổi.

## Bảo toàn và Git

Bản PD cũ cùng ZIP đã sao lưu ngoài repo tại `/Users/admin/Documents/ChatGPT/Software Testing/backups/asm8-pd-before-full-20261106/`. Giữ nguyên hồ sơ ASM6/ASM7, workbook, source đã chạy và báo cáo gốc. Chỉ tạo ảnh bổ sung từ báo cáo/log đã lưu ngày 06/11, không chạy website mới.

Source và kết quả thuộc các commit 3aac5f8 và c1d7cb4. Bộ hồ sơ ngày 06/11 có commit riêng khi đồng bộ Git. Kiểm tra git log và remote để xác nhận trạng thái push mới nhất. Phần tích hợp toàn nhóm và template chung cần nhóm phối hợp riêng.
