# Test Report - Group 15

Run: asm8-20261106173920-22844. Bắt đầu: 2026-11-06T10:39:20.657Z. Thời gian: 266.42 giây.

Các module có trong project và được chọn ở lượt này. QuangHuy/TienVinh dùng chung source trùng blob, tích hợp một lần. QuangHuy có case thiếu assertion/tài khoản được ghi rõ. Không đại diện toàn bộ chức năng của mọi thành viên.

Khai báo 23; đã thực thi 23; Pass 21; Fail 2; Skipped 0; Interrupted 0; Not run 0.

Đếm test runner theo test.id, không đếm số mã workbook trong tên test. Retry được giữ trong attempts.

| Module | Test | Trạng thái | Giây |
|---|---|---|---:|
| hn-pc | PC-001 PC-002 PC-023: trang và trạng thái rỗng | passed | 12.72 |
| hn-pc | PC-003: từ danh mục máy tính tới Build PC | passed | 8.68 |
| hn-pc | PC-004 PC-005: mở và đóng CPU không chọn | passed | 5.49 |
| hn-pc | PC-006 PC-019: chọn CPU và tổng một linh kiện | passed | 6.52 |
| hn-pc | PC-007..014: chọn đủ tám nhóm cốt lõi | passed | 17.74 |
| hn-pc | PC-015 PC-021: thay CPU và tính chênh lệch | passed | 8.54 |
| hn-pc | PC-016 PC-017 PC-022: thay/xóa RAM giữ SSD | passed | 11.23 |
| hn-pc | PC-018 PC-020: ba linh kiện, cộng giá và reset | passed | 10.79 |
| hn-pc | PC-025 PC-026: tìm CPU và chuỗi không khớp | failed | 17.56 |
| hn-pc | PC-030: nhấp đúp không thêm CPU trùng | passed | 10.57 |
| hn-pc | Bổ sung: tăng/giảm số lượng và hủy xóa tại 1 | passed | 10.90 |
| hn-store | ST-001: mở trang và đối chiếu số cửa hàng hiển thị | passed | 11.89 |
| hn-store | ST-002: lọc Hồ Chí Minh chỉ hiển thị địa chỉ cùng tỉnh | passed | 12.98 |
| hn-store | ST-003: lọc Quận 1 và đối chiếu địa chỉ | passed | 10.73 |
| hn-store | ST-004: đổi tỉnh sang Hà Nội và reset quận | passed | 10.54 |
| hn-store | ST-005: cửa hàng có địa chỉ, giờ mở cửa và số điện thoại hợp lệ | passed | 20.42 |
| hn-store | ST-006: liên kết chỉ đường có đích Google Maps hợp lệ | passed | 10.21 |
| hn-sforum | SF-001: trang chủ có logo và danh sách bài viết | passed | 2.47 |
| hn-sforum | SF-002: tìm iPhone bằng Enter và kiểm tra kết quả liên quan | passed | 4.63 |
| hn-sforum | SF-003: từ khóa không tồn tại hiển thị trạng thái rỗng | failed | 26.99 |
| hn-sforum | SF-004: mở bài từ kết quả và đối chiếu tiêu đề, nội dung | passed | 4.64 |
| hn-sforum | SF-005: điều hướng danh mục Tin công nghệ | passed | 7.41 |
| hn-sforum | SF-006: logo đưa từ kết quả tìm kiếm về trang chủ Sforum | passed | 6.70 |

## Failures
### PC-025 PC-026: tìm CPU và chuỗi không khớp

Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: locator('.product-info').filter({ has: locator('.button__select') }).first()
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" locator('.product-info').filter({ has: locator('.button__select') }).first() with timeout 8000ms[22m
[2m  - waiting for locator('.product-info').filter({ has: locator('.button__select') }).first()[22m


### SF-003: từ khóa không tồn tại hiển thị trạng thái rỗng

Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

Expected pattern: [32m/\/sforum\/search\?tim_kiem=zzx_no_article_987654/i[39m
Received string:  [31m"https://cellphones.com.vn/sforum/search?tim_kiem=zzxnoarticle987654"[39m
Timeout: 15000ms

Call log:
[2m  - Expect "toHaveURL" with timeout 15000ms[22m
[2m    32 × locator resolved to <html class="" lang="vi">…</html>[22m
[2m       - unexpected value "https://cellphones.com.vn/sforum/search?tim_kiem=zzxnoarticle987654"[22m



## Skipped

Lỗi runner/assertion chưa tự chứng minh lỗi website. Xem phân tích và kết quả chạy lại.
