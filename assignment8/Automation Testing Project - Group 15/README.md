# Automation Testing Project - Group 15

Project tích hợp ASM8 trên CellphoneS, cập nhật 06/11/2026. Người thực hiện tích hợp đợt này: Quách Hồng Nhân, MSSV 23130216, nhánh HongNhan.

## Cài đặt

Yêu cầu Node.js >=20, npm và Google Chrome, mạng truy cập được CellphoneS. Mở Terminal tại thư mục này:

```bash
npm ci
npm run test:list
npm run test:hongnhan
npm test
```

Mặc định mở Chrome có cửa sổ. `HEADLESS=1 npm test` chạy headless như các kết quả ngày 06/11. Windows PowerShell: `$env:HEADLESS="1"; npm test`.
Nếu không cài Google Chrome, chạy `npx playwright install chromium`, sau đó `PW_CHANNEL=chromium npm test`. Không chạy song song nhiều suite trên cùng website nếu chưa xác minh mức tải phù hợp.

## Lệnh chạy riêng

| Lệnh | Phạm vi |
|---|---|
| npm run test:hongnhan | Build PC, cửa hàng, Sforum của Hồng Nhân |
| npm run test:pc | 11 test Build PC |
| npm run test:store | 6 test hệ thống cửa hàng |
| npm run test:sforum | 6 test Sforum |
| npm run test:quanghuy | Search/Filter có source chung trên QuangHuy và TienVinh |
| npm run test:thanhtai | Adapter công khai của module trả góp |
| npm run test:pd | Trang chi tiết sản phẩm |
| npm run test:cp | So sánh sản phẩm |
| npm run test:rv | Đánh giá sản phẩm |
| npm test | Toàn bộ 131 khai báo của project hiện tại |

Có thể truyền thêm `--grep` qua `npm test -- --grep "ST-002"`. Mỗi test có context mới. Cấu hình 1 worker, retries=0. Muốn quan sát chậm: `SLOW_MO=300 npm run test:hongnhan`.

## Tổ chức code

- tests/hongnhan/: 3 file test cho PC, cửa hàng, Sforum.
- pages/hongnhan/: Page Object Build PC, tái sử dụng code từ nhánh HongNhan.
- tests/quangthong/: source PD/CP/RV đã có ở dev, giữ assertion nghiệp vụ.
- tests/quanghuy/: Search/Filter tích hợp một lần từ source trùng trên QuangHuy/TienVinh.
- tests/thanhtai/: adapter JS của luồng trả góp công khai, có assertion.
- legacy/: source gốc để đối chiếu, không tự thực thi.
- support/: fixture chụp ảnh và bảo vệ khi website chặn, reporter thống nhất.
- scripts/run-suite.cjs: run ID, lệnh chạy, log, exit code và hash source.
- sources.json: nguồn nhánh/commit/blob và phạm vi thực sự tích hợp.

## Kết quả và minh chứng

Mỗi lần chạy tạo riêng:

- ../Test Report - Group 15/<run-id>/index.html: HTML Playwright gốc.
- execution-summary.json / .md: kết quả từng test, lỗi và lý do skip.
- results.json và junit.xml: báo cáo tự động của Playwright.
- ../Envidence - Group15/<run-id>/: screenshot, log và trace lỗi.

Report/index.html trong gói ZIP cá nhân là HTML tổng hợp tự động từ JSON thực thi, lọc đúng 3 chức năng HN. Đường dẫn ảnh trong JSON gốc có thể là đường dẫn máy thực thi, vì vậy dùng HTML portable để xem sau khi tải.

## Phạm vi còn thiếu

131 là số test runner, không phải số ID workbook. Có test PC nhóm nhiều ID. Bốn ID PC-024, PC-027, PC-028, PC-029 chưa có implementation hoàn chỉnh trong suite này, không cộng vào Pass/Skipped của runner. Xem HONGNHAN-TEST-DESIGN.md.

Search/Filter có 12 case yêu cầu tài khoản trong source gốc và 9 filter thiếu assertion đúng nghiệp vụ, hiện Skipped có lý do. Source gốc chỉ kiểm tra body/URL không đủ chứng minh kết quả của case. Hai filter brand/location có assertion công khai được chạy. Không gán tác giả dựa vào tên nhánh vì hai nhánh có cùng blob.

ThanhTai: giữ nguyên Python gốc trong legacy/. Adapter chỉ kiểm tra mở popup và lựa chọn tỷ lệ trả trước, chưa kiểm tra công thức tài chính. Luồng checkout/tài khoản/thanh toán có skip rõ. Không dùng dòng in 30/30 PASSED của bản gốc làm báo cáo mới.

PD/CP/RV có các skip theo source của QuangThong. Project tích hợp tất cả source tìm thấy, chưa chứng minh đủ mọi chức năng được phân công của mọi thành viên. Không đưa tài khoản, mật khẩu, cookie đăng nhập vào Git. Nếu bổ sung account cho script Search gốc, cần chủ module hoàn thiện assertion trước khi diễn giải kết quả là Pass nghiệp vụ.

## Quy tắc đặt tên

Thư mục tests/<thành viên>/, Page Object trong pages/<thành viên>/. Mã case giữ PC-xxx/ST-xxx/SF-xxx và ID nguồn của thành viên. Hậu tố .spec.mjs/.spec.cjs/.spec.js. Tiêu đề nêu thao tác và expected. Test chạy riêng không dựa vào trạng thái test trước.

Thêm module vào projects trong playwright.config.cjs, import support/fixtures.cjs, khai báo skip bằng lý do cụ thể khi thiếu tiền đề. Không catch lỗi assertion để in PASSED. Giữ các report cũ và dùng run ID mới khi chạy lại.
