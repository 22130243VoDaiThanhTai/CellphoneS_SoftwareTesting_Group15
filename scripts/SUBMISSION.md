# Assignment 7 — Trang chi tiết sản phẩm

Sinh viên: 22130275 — Trịnh Quang Thông — Group15.
Phạm vi đợt nộp: một chức năng Trang chi tiết sản phẩm (PD). CP/RV không nằm trong gói này; đề đầy đủ yêu cầu ba chức năng.

## File nộp Classroom

- `22130275_TrinhQuangThong_ASM7.zip`: mã nguồn và môi trường chạy.
- `22130275_TrinhQuangThong_ASM7.txt`: chính xác hai dòng, dòng 1 link YouTube, dòng 2 repo nhóm.

Video YouTube do người dùng xác nhận đã upload: https://youtu.be/rdBQQNcqgkg
Repo nhóm public: https://github.com/22130243VoDaiThanhTai/CellphoneS_SoftwareTesting_Group15
Nhánh cá nhân: QuangThong.

## Chạy script

Giải nén ZIP, mở Terminal trong thư mục có package.json, chạy `npm ci`, sau đó `npx playwright test --headed`. Cần Node.js và Google Chrome. Script cá nhân là `22130275_TrinhQuangThong_ASM7.spec.js`; không cần workbook Excel lúc chạy. Xem README.md để dùng Chromium thay thế.

## Kết quả và giới hạn

Hai lượt xác minh theo quy tắc giá mới và lượt quay demo thực tế đều có 25 Passed, 0 Failed, 3 Skipped. Báo cáo chi tiết: RUN-REPORT.md.

Ba case bỏ qua: thêm giỏ, mua ngay và URL payload. Hai case giỏ chưa có code cleanup đã xác minh nên vẫn bị khóa dù ALLOW_CART=1. Test giá bán kiểm tra giá trị hợp lệ; chỉ so sánh giá gốc > giá bán khi phần tử gạch ngang tồn tại. Nhánh so sánh không chạy trong các lượt này vì trang không có giá gốc.

## Gói mã nguồn

ZIP chứa một file spec cá nhân, cấu hình Playwright, package.json/lock, README, tài liệu bàn giao và báo cáo/bằng chứng. Không đóng gói node_modules, browser cache, Excel hay video MP4. Video xem qua link YouTube. Workbook v8 được giữ riêng trong testcases.

## Trạng thái chia sẻ GitHub

Kiểm tra ngày 30/10/2026: repo public qua GitHub API, nhưng đường dẫn scripts/22130275_TrinhQuangThong_ASM7.spec.js trên QuangThong trả HTTP 404. Git cục bộ cho thấy scripts/ chưa được theo dõi. Cần commit/push mã nguồn trước khi kết luận yêu cầu chia sẻ GitHub đã hoàn tất. Phiên chuẩn bị gói nộp không commit/push/checkout.
