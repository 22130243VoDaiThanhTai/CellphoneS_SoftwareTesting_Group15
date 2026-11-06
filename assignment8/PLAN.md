# Kế hoạch ASM8 cá nhân — Trịnh Quang Thông

Cập nhật 06/11/2026. Repository CellphoneS_SoftwareTesting_Group15, nhánh QuangThong.

## Phạm vi hiện tại

Ba chức năng của 22130275: PD, CP và RV. Không tích hợp, chạy hoặc sửa bài thành viên khác. Đề toàn nhóm giữ tại ASSIGNMENT-8.md. Ban đầu nộp tiến độ PD trước, sau đó mở rộng theo yêu cầu người dùng sang CP/RV.

## Đã thực hiện

- [x] Dựng project ASM8 riêng, giữ source ASM7 gốc.
- [x] Cấu hình ba project cp/rv/pd, dùng chung fixture, reporter và runner. Có lệnh chạy riêng và chạy chung.
- [x] Triển khai 28 khai báo PD, 25 implementation CP và 14 implementation RV công khai.
- [x] Khai báo lý do skip cho 15 RV chưa triển khai form/validation.
- [x] Khảo sát DOM, sửa selector/popup/cookie và chạy CP/RV: 39 Passed, 0 Failed, 15 Skipped.
- [x] Chạy chung 82 khai báo ngày 05/11: 64 Passed, 0 Failed, 18 Skipped.
- [x] Đối chiếu hai lượt CP/RV cùng spec/fixture/config. Lưu kết quả, log và ảnh thật.
- [x] Cập nhật PPTX cá nhân 25 slide, đủ tám phần đề và bằng chứng cho cả ba chức năng.
- [x] Đóng gói ZIP 73 file, khoảng 9,42 MiB, giữ source, báo cáo từng case, ảnh và log. Gộp ảnh trùng nội dung.
- [x] Sao lưu bộ PD trước khi thay thế, kiểm tra ZIP/manifest/liên kết và render slide.

## Giới hạn cần giữ rõ

- [ ] RV 12 case form/input: cần phiên tài khoản phù hợp trong môi trường được phép. Không sao chép cookie/đăng nhập trong bước này.
- [ ] RV ba validation: chưa có đặc tả/môi trường gửi thử. Người dùng quyết định giữ Untested trong workbook.
- [ ] PD giỏ/mua: cleanup chưa xác minh, giữ khóa. Payload giữ skip để tránh 403.
- [ ] Theo dõi flaky dài hạn khi dữ liệu và mạng thay đổi. Hai lượt giống kết quả chưa chứng minh ổn định tuyệt đối.

## Công việc cấp nhóm

- [ ] Thu thập và tích hợp script các thành viên vào project thống nhất.
- [ ] Chạy suite tất cả thành viên và xuất report/evidence của toàn nhóm.
- [ ] Thống nhất template slide để ghép báo cáo tuần sau. Mẫu hiện tại là mẫu cá nhân tạm thời, link Sheets trước đây là mẫu Excel ASM6.
- [x] Chuẩn bị cập nhật cá nhân để đồng bộ QuangThong và dev theo yêu cầu ngày06/11. Xác nhận push/merge bằng hash remote và báo cáo cuối công việc.

## Lịch sử và bảo toàn

PD ngày 31/10 có lượt 25 Passed/0 Failed/3 Skipped sau sửa chờ dữ liệu vùng. Ngày 05/11 bổ sung CP/RV và chạy chung. Ngày 06/11 cập nhật bộ nộp từ kết quả đã lưu, không chạy website mới hoặc đổi workbook.

Giữ nguyên source ASM6/ASM7 và dữ liệu thành viên khác. Bản PD cũ và ZIP sao lưu ngoài repo trong `~/Documents/ChatGPT/Software Testing/backups/asm8-pd-before-full-20261106/`. Thư mục personal/TestScript 2 đã tồn tại trước đó giữ nguyên, không coi đó là bản nộp mới nhất.
