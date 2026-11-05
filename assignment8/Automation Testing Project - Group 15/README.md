# ASM8 — Automation cá nhân PD, CP và RV

Trịnh Quang Thông, MSSV 22130275, Group15. Chỉ tích hợp chức năng của sinh viên này, chưa phải suite của mọi thành viên.

## Cài và chạy

Node.js >=20 và Google Chrome. Không cần đăng nhập CellphoneS.

```bash
npm ci
npm run test:list
npm run test:pd       # 28 khai báo Trang chi tiết sản phẩm
npm run test:cp       # 25 khai báo So sánh sản phẩm
npm run test:rv       # 29 khai báo Đánh giá sản phẩm
npm run test:cp-rv    # Hai chức năng mới, chạy tuần tự
npm test             # Cả 82 khai báo cá nhân
```

Một worker, retries=0, Chrome headed. PD giữ nguyên script và ba skip giỏ/mua/payload. Hai case giỏ vẫn khóa kể cả ALLOW_CART=1 vì cleanup chưa xác minh. CP chỉ sửa danh sách so sánh trong context thử độc lập, không thêm giỏ. RV chỉ đọc/lọc đánh giá công khai, không bấm gửi, không đăng nhập/sao chép cookie. 15 case form/input cần phiên tài khoản hoặc quy tắc validation chưa xác minh được khai báo Skipped với lý do, không thay bằng kiểm tra DOM ẩn.

Mặc định timeout 30s, expect 8s. CP/RV có timeout 60s, chờ dữ liệu khu vực tối đa 30s trước thao tác để tránh click trước khi UI khởi tạo. Locator handler đóng đúng popup THÔNG BÁO khi che UI, không force click. Tiền đề lọc sao rỗng được đối chiếu từ progress hiện tại; nếu dữ liệu không còn bằng 0 thì Skipped có lý do, không sửa Expected.

## Cấu trúc

- `tests/quangthong/22130275_TrinhQuangThong_ASM8.spec.js`: 28 PD, giữ nội dung.
- `tests/quangthong/22130275_TrinhQuangThong_CP_RV.spec.js`: 25 CP và 29 RV.
- `support/fixtures.cjs`: dừng khi 403/CAPTCHA, ảnh các test thực sự chạy.
- `support/summary-reporter.cjs`: xuất kết quả thật cho project đã chọn.
- `scripts/run-suite.cjs`: run ID, log, command và exit code.
- `sources.json`: nguồn và hash script.

Mỗi lượt chạy tạo HTML/JSON/Markdown riêng tại `../Test Report - Group 15/<run-id>/`, ảnh/log/trace tại `../Envidence - Group15/<run-id>/`. Lượt ngắt để sửa script giữ status interrupted/not-run, không sử dụng làm kết quả đầy đủ. Không cộng kết quả nhiều lượt thành số case.

Hai file Classroom PD trong submission/ vẫn là bộ đã chuẩn bị trước ngày 05/11; chưa tự thay bằng kết quả CP/RV đang triển khai. Workbook ASM6 giữ lịch sử kiểm tra thủ công, không đổi ngày/result chỉ vì thêm script mới.
