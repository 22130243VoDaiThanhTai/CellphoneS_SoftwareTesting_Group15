# Kế hoạch tự động hóa Build PC

Mục tiêu là kiểm tra lựa chọn, thay/xóa, số lượng và tổng giá trong công cụ Build PC. Phạm vi tuần này chỉ Build PC; các chức năng cửa hàng và Sforum chưa triển khai trong đợt này.

## Thiết kế

| Nhóm | Case | Kỹ thuật | Assertion chính |
| --- | --- | --- | --- |
| Truy cập, rỗng | PC-001–003, PC-023 | Smoke, navigation, boundary | H1 Build PC, URL đúng, không có linh kiện và tổng cũ |
| Popup CPU | PC-004–005 | Functional, negative | Có tên/giá, đóng không thêm |
| Chọn linh kiện | PC-006–014 | Equivalence, integration | Đúng tên/giá/nhóm, giữ nhóm đã chọn |
| Quản lý | PC-015–018 | State transition, regression | Thay/xóa/reset chính xác, giữ linh kiện khác |
| Giá | PC-019–022 | Calculation | Tổng giá dòng × số lượng, chênh lệch khi thay/xóa |
| Tồn kho, search | PC-024–026 | Negative, equivalence | Search trong nhóm, không kết quả rõ; tồn kho cần dữ liệu |
| Lưu/xuất | PC-027–029 | Persistence, download | Tính năng có trên UI trước khi thực thi; mở và đối chiếu tệp |
| Chọn trùng | PC-030 | Boundary, idempotency | Không trùng dòng/số lượng/giá sau nhấp đúp |

## Triển khai

Đã tạo Page Object `automation/pages/build-pc.mjs` và 11 test tại `automation/tests/build-pc.spec.mjs`. Mỗi test Playwright khởi tạo context riêng, đọc tên/giá từ catalog và chạy một worker. Không cố định giá/SKU. Bộ chọn lấy từ DOM thật ngày 23/10/2026; `.build-component-area > .build-component` có 14 nhóm, `.product-info` chứa nút chọn, `.special-price` là giá dòng, `.total-money-box .money-number` là tạm tính.

Lần thực thi hiện tại dùng trình duyệt điều khiển trực tiếp và đối chiếu expected; không phải lần chạy bằng CLI. Trạng thái 26 Pass, 2 Blocked, 2 N/A tại `execution-report.md` và Excel. 11 script mới được kiểm tra cú pháp bằng `node --check`; cần chạy và kiểm tra report thật trước khi tuyên bố bộ Playwright chạy thành công.

```bash
npm install
npx playwright install chromium
npm test
npm run test:report
```

## Dữ liệu và môi trường

Mặc định desktop 1280×800, Chromium, locale vi-VN. Chọn sản phẩm đang hiển thị có giá và nút Chọn. Test lấy tổng từ giá bán hiện tại, không cộng giá gạch ngang hoặc ưu đãi Smember chưa áp dụng. Giá tạm tính trên trang ghi chưa bao gồm Ưu đãi Build PC. Vùng/khuyến mãi/catalog có thể thay đổi, cần ghi lại mỗi lần chạy.

## Tiêu chí

- Chỉ Pass khi tất cả expected của case được đối chiếu.
- Blocked khi thiếu dữ liệu hoặc công cụ không xác minh được; không đổi thành Fail sản phẩm.
- N/A với tính năng không có trên UI trong phạm vi khảo sát; ghi điều kiện áp dụng.
- Lưu ảnh, JSON report, trace khi test runner thất bại. Không đưa token, cookie hay tài khoản vào Git.
- Dừng khi gặp CAPTCHA hoặc chặn truy cập; ghi hạn chế của môi trường.
- Case UI đã chạy theo kịch bản liên hoàn có ảnh dùng chung; bộ Playwright mới tách test độc lập.
- Chỉ commit/push nhánh `HongNhan`; PR/merge nằm ngoài đợt này.
