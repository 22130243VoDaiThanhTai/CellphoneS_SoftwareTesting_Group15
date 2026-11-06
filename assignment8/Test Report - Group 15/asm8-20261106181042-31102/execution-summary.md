# Test Report - Group 15

Run: asm8-20261106181042-31102. Bắt đầu: 2026-11-06T11:10:43.324Z. Thời gian: 32.57 giây.

Các module có trong project và được chọn ở lượt này. QuangHuy/TienVinh dùng chung source trùng blob, tích hợp một lần. QuangHuy có case thiếu assertion/tài khoản được ghi rõ. Không đại diện toàn bộ chức năng của mọi thành viên.

Khai báo 2; đã thực thi 2; Pass 1; Fail 1; Skipped 0; Interrupted 0; Not run 0.

Đếm test runner theo test.id, không đếm số mã workbook trong tên test. Retry được giữ trong attempts.

| Module | Test | Trạng thái | Giây |
|---|---|---|---:|
| hn-pc | PC-025 PC-026: tìm CPU và chuỗi không khớp | failed | 18.88 |
| hn-pc | Bổ sung: tăng/giảm số lượng và hủy xóa tại 1 | passed | 10.04 |

## Failures
### PC-025 PC-026: tìm CPU và chuỗi không khớp

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.product-info').filter({ has: locator('.button__select') }).first().getByRole('heading', { level: 3 })
Expected substring: [32m"CPU Intel Core i[7m5[27m 1[7m2[27m400F"[39m
Received string:    [31m"CPU Intel Core i[7m7[27m 14[7m7[27m00[7mK[27mF"[39m
Timeout: 8000ms

Call log:
[2m  - Expect "toContainText" locator('.product-info').filter({ has: locator('.button__select') }).first().getByRole('heading', { level: 3 }) with timeout 8000ms[22m
[2m  - waiting for locator('.product-info').filter({ has: locator('.button__select') }).first().getByRole('heading', { level: 3 })[22m
[2m    19 × locator resolved to <h3>CPU Intel Core i7 14700KF</h3>[22m
[2m       - unexpected value "CPU Intel Core i7 14700KF"[22m



## Skipped

Lỗi runner/assertion chưa tự chứng minh lỗi website. Xem phân tích và kết quả chạy lại.
