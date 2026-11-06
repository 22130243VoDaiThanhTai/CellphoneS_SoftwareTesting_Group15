# Kiểm tra hồ sơ ASM8 cá nhân — 06/11/2026

Trịnh Quang Thông, 22130275, Group15. Phạm vi hiện tại: cả ba chức năng PD/CP/RV, chưa phải suite toàn nhóm.

## File nộp Classroom

Trong `../submission/Assignment8_22130275_TrinhQuangThong/` có đúng hai file:

1. **22130275_TrinhQuangThong.pptx**: 25 slide, đủ Introduction, Assigned Functions, Automation Implementation, Integration, Test Execution, Test Results, Issues & Solutions, Conclusion. Có code mẫu ba chức năng và minh chứng gốc. Template cá nhân tạm thời, chưa xác nhận template thống nhất của nhóm.
2. **22130275_TrinhQuangThong_TestScript.zip**: 73 file, khoảng 9,42 MiB, một thư mục gốc cùng tên. Source/ 11 file, Report/ 3 file, Evidence/ 56 file, ba file hướng dẫn/báo cáo/manifest ở root. Evidence có 51 PNG khác nội dung, bốn log và một ghi chú nguồn. PPTX nộp riêng ngoài ZIP.

Mở `Report/index.html` sau giải nén. Có 82 dòng kết quả và 64 liên kết ảnh cho các case Passed. Các case có ảnh giống byte cùng tham chiếu một file. Mười tám skip không có ảnh. Không có node_modules, trace viewer, trace.zip, .DS_Store, workbook hoặc bài thành viên khác.

## Kết quả nguồn đã đối chiếu

Run `asm8-20261105222818-34028`, ngày 05/11/2026, source commit 3aac5f8. Tổng 82 khai báo, 64 Passed/0 Failed/18 Skipped, 552,83 giây, exit code 0. PD 25/0/3, CP 25/0/0, RV 14/0/15.

CP/RV có lượt đủ riêng `asm8-20261105221047-29496`: 39 Passed/0 Failed/15 Skipped, 341,11 giây. Spec CP/RV, fixture và config khớp hash giữa hai lượt. Không cộng các lượt và không khẳng định hết flaky lâu dài.

Ba PD skip: giỏ, mua và payload. RV có 12 case cần phiên tài khoản và ba validation chưa có đặc tả/môi trường gửi thử. Mười lăm RV chỉ khai báo skip, chưa triển khai thao tác form. Workbook giữ ba validation Untested theo quyết định người dùng. Không sử dụng Passed thủ công để thay cho Skipped Playwright.

## Kiểm tra đã thực hiện

- CRC ZIP và PPTX hợp lệ. Manifest 72 hash khớp.
- 11 file Source/ khớp byte với project và hash ghi tại lượt chạy thật.
- 82 ID không trùng. Status, title, duration và annotation JSON giữ nguyên từ summary gốc, chỉ chuyển đường dẫn ảnh và bổ sung ghi chú skip PD.
- 64 case Passed có liên kết ảnh hợp lệ, 18 skip không gán ảnh giả. Mọi link file cục bộ trong HTML đều có đích.
- Đã mở HTML trong Chrome cục bộ bằng Playwright, đối chiếu 82 dòng, 64 Passed, 18 Skipped và mở thử liên kết ảnh. Không chạy website để kiểm tra gói.
- Đã render và xem toàn bộ 25 slide, đối chiếu ảnh và số liệu. Kiểm tra package, font, geometry và import PPTX đều đạt. Bảng kết quả 25+25+14=64, 3+0+15=18, tổng 82. Chưa mở trong PowerPoint native.
- Ba ảnh report/steps/log chụp ngày 06/11 từ kết quả ngày 05/11. Không sửa bộ đếm hoặc nhận là một lượt test mới.
- File nộp và canonical personal/ giống byte. Bản PD cũ, ZIP và thư mục giải nén cũ sao lưu ngoài repository.

## Phần còn lại

Hồ sơ thể hiện kết quả thật của ba chức năng cá nhân cùng các giới hạn. Để hoàn thiện toàn bộ automation còn cần điều kiện cho các case RV và quyết định phạm vi giỏ/mua. Cấp nhóm còn tích hợp script các thành viên, chạy suite chung, xuất report/evidence toàn nhóm và thống nhất template.

Tại thời điểm đóng gói ban đầu có hai commit local chưa push. Lượt đóng gói đó không commit/push/merge. Công việc đồng bộ Git sau đó thực hiện theo yêu cầu riêng của người dùng, xem lịch sử commit và báo cáo đồng bộ. Không thay đổi workbook/source đã chạy, không gửi form, không đặt hàng.
