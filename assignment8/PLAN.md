> Cập nhật phạm vi ngày 05/11/2026: project đang bổ sung CP/RV của 22130275. Các kết quả PD và gói nộp bên dưới giữ lịch sử ngày 31/10. Xem [triển khai CP/RV](CP-RV-IMPLEMENTATION.md) và [kết quả mới](CP-RV-RUN-REPORT.md). Chưa phải tích hợp toàn nhóm.

# Kế hoạch ASM8 cá nhân — Trịnh Quang Thông

Cập nhật 31/10/2026. Repo: `/Users/admin/Documents/CellphoneS_SoftwareTesting_Group15`, nhánh QuangThong.

## Phạm vi đã xác nhận

Chỉ làm Trang chi tiết sản phẩm (PD) của Trịnh Quang Thông — 22130275. Không tích hợp/chạy/sửa module của thành viên khác trong công việc hiện tại. CP/RV chưa triển khai và không được báo đã hoàn tất. Phần Assigned Functions của slide nhắc ba chức năng được giao, ghi rõ chỉ PD là phạm vi đợt này.

## Các chặng

| Chặng | Công việc | Trạng thái |
|---|---|---|
| 1 | Lưu đề và xác định source PD | Xong; kiểm kê toàn repo chỉ là tham khảo |
| 2 | Đưa PD vào cấu trúc ASM8 với package/config, report và evidence riêng | Đã tạo; cấu hình chỉ còn PD, 28 test |
| 3 | Rà lỗi PD, chạy và phân tích ổn định, lưu kết quả thật | Lượt đủ mới: 25 Passed, 0 Failed, 3 Skipped; hai case sửa Passed ở hai lượt riêng và lượt đủ, tiếp tục theo dõi độ ổn định |
| 4 | Tạo PPTX cá nhân, đủ 8 phần đề, 18 slide, có ảnh chạy PD thật | Đã cập nhật 18 slide; có báo cáo Playwright, Test Steps và log gốc; dùng mẫu tạm, cần thống nhất template nhóm |
| 5 | Đóng gói 22130275_TrinhQuangThong_TestScript.zip | Đã làm gọn: 51 file, khoảng 7.51 MiB; chỉ PD, source + ba lượt kết quả/ảnh/log |

## Template và nguồn

Link người dùng cung cấp là Google Sheets, mẫu bảng tính dùng ở ASM6, không phải slide template. Chưa thấy PPTX/POTX/ODP trong repo đã rà soát. Khi làm PPT dùng mẫu tạm, không tự nhận là template thống nhất của nhóm.

Nguồn PD: `scripts/22130275_TrinhQuangThong_ASM7.spec.js`; Expected mới trong workbook v8; dự án ASM8 nằm trong `Automation Testing Project - Group 15/`. Quy cách đề nhóm vẫn lưu ở `ASSIGNMENT-8.md`; yêu cầu toàn nhóm do nhóm xử lý riêng, không tự mở rộng sang bài của thành viên khác.

## Bảo toàn lịch sử

Bản sao Build PC tạo nhầm phạm vi được chuyển vào `_archive/build-pc-integration/`, không nằm trong testDir. Bài gốc `automation/` không sửa. Các report/ảnh/log cũ giữ nguyên, số liệu cá nhân chỉ lấy module `pd`. Không commit/push/checkout/merge. Không ghi đè hồ sơ ASM6/ASM7 hoặc file đã nộp.

Cập nhật slide ngày 05/11/2026: thêm ảnh báo cáo Playwright, Test Steps và log lưu của lượt 31/10/2026. ZIP bổ sung Evidence/PlaywrightReport/ gồm ba ảnh và ghi chú nguồn; không chạy lại website. File nộp mới nhất nằm tại ../submission/Assignment8_22130275_TrinhQuangThong/.

Cập nhật chiều sâu báo cáo ngày 05/11/2026: PowerPoint 18 slide, bổ sung phạm vi 28 test, dữ liệu và tiêu chí, selector/assertion, cấu hình, code 512GB, luồng lưu bằng chứng, lý do Skipped, phân tích lỗi tải động và kết quả chạy lại. Giữ kết quả gốc ngày 31/10/2026. Chỉ cập nhật PPTX, không chạy website hoặc sửa source/ZIP.

## CP/RV ngày 05/11/2026

- [x] Đối chiếu 25 CP và 29 RV với workbook, khảo sát DOM thật.
- [x] Viết implementation 25 CP và 14 RV công khai, khai báo lý do skip cho 15 RV.
- [x] Sửa locator/popup và chạy đủ CP/RV: 39 Passed, 0 Failed, 15 Skipped.
- [x] Lưu report HTML/JSON, log, ảnh theo case và ảnh tổng quan report.
- [x] CP/RV đã có hai lượt đủ cùng source/spec/fixture/config: 39 Passed, 15 Skipped mỗi lượt; tiếp tục theo dõi dài hạn.
- [ ] Thực thi các case RV form cần phiên tài khoản phù hợp.
- [ ] Xác minh ba quy tắc validation trên môi trường được phép (người dùng yêu cầu giữ Untested).
- [x] Chạy chung cả 82 khai báo PD/CP/RV trong lượt asm8-20261105222818-34028: 64 Passed, 0 Failed, 18 Skipped.
- [ ] Cập nhật bộ nộp cá nhân đủ ba chức năng khi người dùng yêu cầu; bộ PD đã duyệt giữ nguyên.
