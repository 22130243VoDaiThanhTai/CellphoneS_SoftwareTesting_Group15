# ASM7 — Trịnh Quang Thông, 22130275, Group15

Một file cá nhân `22130275_TrinhQuangThong_ASM7.spec.js` chứa ba chức năng: PD (28 khai báo), CP (25), RV (29). Có 64 test được triển khai để chạy, 18 skip có lý do. Mười lăm skip RV chưa có thao tác form, không coi là implementation hoàn chỉnh.

## Cài và chạy

Cần Node.js >=20 và Google Chrome.

```bash
npm ci
npm test
# Chạy riêng:
npm run test:pd
npm run test:cp
npm run test:rv
# Chỉ liệt kê, không mở website:
npm run test:list
```

Chrome headed, vi-VN, desktop 1280x800, một worker, retries=0, slowMo500ms. Video mặc định off. Runner lưu HTML, JSON, ảnh và log trong run-evidence/<runID>/. Không cần workbook hoặc profile Chrome để chạy.

## Phạm vi và an toàn

Mỗi test có context sạch và tự chuẩn bị dữ liệu. Khay so sánh có cleanup bằng UI, không phải giỏ mua hàng. Giỏ/mua và URL payload PD giữ skip kể cả ALLOW_CART=1. RV có 12 skip cần phiên tài khoản phù hợp và ba validation chưa có đặc tả/môi trường gửi thử. Không đăng nhập, gửi review, đặt hàng hoặc thanh toán. Gặp403/CAPTCHA thì dừng phần bị chặn.

Source hợp nhất từ hai spec ASM8 đã chạy ngày05/11. Helper CP/RV nằm trong block riêng để tránh trùng biến với PD, dùng chung fixture. Tên từng test giữ ID workbook.

## Hồ sơ nộp

ZIP và TXT ở ../submission/Assignment7_22130275_TrinhQuangThong/. ZIP chứa đúng một spec cá nhân cùng môi trường chạy và minh chứng chọn lọc. Không có node_modules hay bài thành viên khác.

TXT hiện giữ YouTube https://youtu.be/rdBQQNcqgkg, là video PD đã upload trước. Video đó chưa demo CP/RV. Không tự thay dòng đầu bằng một link không có thật. Xem SUBMISSION.md và RUN-REPORT.md để biết kết quả/phạm vi mới nhất.
