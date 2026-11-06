# Assignment 7 — Ba chức năng cá nhân

Trịnh Quang Thông, MSSV 22130275, Group15. Chức năng: Trang chi tiết sản phẩm, So sánh sản phẩm, Đánh giá sản phẩm.

## Hồ sơ nộp

- `22130275_TrinhQuangThong_ASM7.zip`: một spec cá nhân, cấu hình, package/lock, fixture, runner và minh chứng.
- `22130275_TrinhQuangThong_ASM7.txt`: dòng 1 YouTube, dòng 2 repository nhóm.

TXT giữ https://youtu.be/rdBQQNcqgkg, video PD do người dùng đã upload. Video này chưa demo CP/RV. Cần link video mở rộng sau khi upload. Không bịa link hoặc thay dòng đầu bằng đường dẫn local.

## Chạy

Giải nén ZIP, mở thư mục có package.json. Cài `npm ci`, chạy `npm test`. Có `npm run test:pd`, `npm run test:cp`, `npm run test:rv` để chạy riêng. Chrome headed và context sạch. Không cần Excel hoặc đăng nhập CellphoneS.

Có 82 khai báo, 64 test được triển khai để chạy và 18 skip. Mười lăm RV skip chưa triển khai thao tác form. Ba PD skip là giỏ, mua và payload. Khóa giỏ/mua vẫn giữ kể cả ALLOW_CART=1. Ba validation RV tiếp tục Untested theo quyết định người dùng.

## Nguồn và kết quả

Source ghép từ hai spec ASM8 đã chạy ngày 05/11, giữ ID và assertion. Kết quả ASM7 mới ở RUN-REPORT.md, chỉ ghi số liệu runner thật. Không gán kết quả ASM8 sang lượt ASM7 sau ghép.

## GitHub

Repository: https://github.com/22130243VoDaiThanhTai/CellphoneS_SoftwareTesting_Group15

Nhánh cá nhân QuangThong. Script PD đã push trước đây qua commit 4b7bc38/9daef54. Bản ba chức năng ngày 06/11 có commit riêng. Xem lịch sử Git và ASM678_22130275_STATUS.md ở root để đối chiếu phạm vi, không dùng ghi chú “chưa commit” lịch sử của ngày 30/10 làm trạng thái hiện tại.
