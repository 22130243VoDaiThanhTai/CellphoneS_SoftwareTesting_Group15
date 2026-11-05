> Cập nhật phạm vi ngày 05/11/2026: project đang bổ sung CP/RV của 22130275. Các kết quả PD và gói nộp bên dưới giữ lịch sử ngày 31/10. Xem [triển khai CP/RV](CP-RV-IMPLEMENTATION.md) và [kết quả mới](CP-RV-RUN-REPORT.md). Chưa phải tích hợp toàn nhóm.

# Assignment 8 — Trịnh Quang Thông, 22130275

## Phạm vi hiện tại

Chỉ Trang chi tiết sản phẩm (PD), theo yêu cầu tiếp tục PD trước. CP/RV chưa triển khai. Đây là hồ sơ cá nhân chuẩn bị tích hợp, chưa phải suite toàn nhóm.

## Đọc từ đâu

- [RUN-REPORT.md](RUN-REPORT.md): kết quả thật và phân tích lỗi.
- [PLAN.md](PLAN.md): tiến độ và phần còn lại.
- [ASSIGNMENT-8.md](ASSIGNMENT-8.md): nguyên văn yêu cầu làm việc do người dùng cung cấp.
- [Project PD](Automation%20Testing%20Project%20-%20Group%2015/README.md): cài đặt và chạy.

## Hai file cá nhân

- `personal/22130275_TrinhQuangThong.pptx`: 8 phần đề, 18 slide, mẫu tạm, cần khớp template nhóm khi có.
- `personal/22130275_TrinhQuangThong_TestScript.zip`: source PD, báo cáo HTML/JSON/Markdown và ảnh/log chọn lọc của ba lượt mới; không có trace viewer hay ảnh trùng. Không chứa node_modules hay script thành viên khác.

## Kết quả

Lượt đủ mới `asm8-20261031151155-46642`: 25 Passed, 0 Failed, 3 Skipped, 263.26 giây. Hai test ảnh màu/khuyến mãi Passed qua hai lượt riêng và lượt đủ, sau khi chờ dữ liệu khu vực sẵn sàng. Chi tiết trong RUN-REPORT.md.

ZIP cá nhân mới có 51 file, khoảng 7.51 MiB. Bên trong chỉ gồm Source/, Report/, Evidence/ và ba file hướng dẫn/báo cáo/manifest. Mở Report/index.html để xem kết quả và ảnh. Bản ZIP cũ lưu trong _archive/personal-package-before-cleanup-20261031/. Các thư mục bạn đã giải nén trước đó không tự cập nhật theo ZIP mới.

## Lưu ý

`_archive/`, INVENTORY.md và các run trước 10:40 là lịch sử trước khi thu phạm vi về PD. Không tính kết quả module khác vào hồ sơ cá nhân và không có chúng trong ZIP cá nhân. Không sửa source gốc ASM6/ASM7. Chưa commit/push ASM8.

Cập nhật slide ngày 05/11/2026: thêm ảnh báo cáo Playwright, Test Steps và log lưu của lượt 31/10/2026. ZIP bổ sung Evidence/PlaywrightReport/ gồm ba ảnh và ghi chú nguồn; không chạy lại website. File nộp mới nhất nằm tại ../submission/Assignment8_22130275_TrinhQuangThong/.

Cập nhật chiều sâu báo cáo ngày 05/11/2026: PowerPoint 18 slide, bổ sung phạm vi 28 test, dữ liệu và tiêu chí, selector/assertion, cấu hình, code 512GB, luồng lưu bằng chứng, lý do Skipped, phân tích lỗi tải động và kết quả chạy lại. Giữ kết quả gốc ngày 31/10/2026. Chỉ cập nhật PPTX, không chạy website hoặc sửa source/ZIP.
