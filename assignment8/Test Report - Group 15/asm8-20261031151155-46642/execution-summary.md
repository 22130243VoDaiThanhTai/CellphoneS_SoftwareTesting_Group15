# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261031151155-46642. Bắt đầu: 2026-10-31T08:11:56.625Z. Thời gian: 263.26 giây.

**Phạm vi:** Trang chi tiết sản phẩm của Trịnh Quang Thông. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 28; có kết quả: 28. Passed: 25; Failed: 0; Skipped: 3; Interrupted: 0.

Suite cá nhân có 28 khai báo PD; các test giữ skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| pd | PRODUCT_DETAIL_INFO_Open_01 - mở URL sản phẩm cố định | passed | 9.04 |
| pd | PRODUCT_DETAIL_INFO_View_01 - hiển thị tên, giá, ảnh và thông số | passed | 8.32 |
| pd | PRODUCT_DETAIL_INFO_View_02 - giá bán và giá gốc đang hiển thị | passed | 10.60 |
| pd | PRODUCT_DETAIL_INFO_View_03 - không có nhãn phần trăm giảm cạnh giá | passed | 8.98 |
| pd | PRODUCT_DETAIL_VARIANT_Select_01 - chọn 256GB | passed | 9.34 |
| pd | PRODUCT_DETAIL_VARIANT_Select_02 - chọn 512GB | passed | 11.25 |
| pd | PRODUCT_DETAIL_VARIANT_Switch_01 - chuyển 512GB rồi về 256GB | passed | 17.45 |
| pd | PRODUCT_DETAIL_VARIANT_Open_01 - mở trực tiếp URL 512GB | passed | 6.76 |
| pd | PRODUCT_DETAIL_COLOR_Select_01 - chọn lần lượt các màu đang hiển thị | passed | 15.19 |
| pd | PRODUCT_DETAIL_COLOR_Select_02 - chọn Xanh Lá Xô Thơm và kiểm tra ảnh | passed | 11.03 |
| pd | PRODUCT_DETAIL_VARIANT_Switch_02 - giữ màu Tím khi đổi sang 512GB | passed | 13.25 |
| pd | PRODUCT_DETAIL_GALLERY_Select_01 - chọn ảnh thu nhỏ | passed | 10.47 |
| pd | PRODUCT_DETAIL_GALLERY_Navigate_01 - chuyển ảnh bằng Next | passed | 7.94 |
| pd | PRODUCT_DETAIL_GALLERY_Navigate_02 - Previous tại slide đầu | passed | 7.67 |
| pd | PRODUCT_DETAIL_GALLERY_Open_01 - mở ảnh lớn, Escape và đóng hộp thoại video | passed | 10.40 |
| pd | PRODUCT_DETAIL_INFO_View_04 - hiển thị khối Khuyến mãi đi kèm | passed | 8.18 |
| pd | PRODUCT_DETAIL_INFO_Open_02 - mở phần mô tả sản phẩm | passed | 9.54 |
| pd | PRODUCT_DETAIL_SPECS_View_01 - hiển thị các hàng thông số | passed | 8.30 |
| pd | PRODUCT_DETAIL_SPECS_Open_01 - mở bảng thông số mở rộng | passed | 9.29 |
| pd | PRODUCT_DETAIL_SPECS_Switch_01 - chuyển nhóm Màn hình | passed | 11.66 |
| pd | PRODUCT_DETAIL_ACTION_Add_01 - thêm vào giỏ và dọn sản phẩm kiểm thử | skipped | 0.00 |
| pd | PRODUCT_DETAIL_ACTION_Buy_01 - MUA NGAY tới giỏ rồi dọn sản phẩm kiểm thử | skipped | 0.00 |
| pd | PRODUCT_DETAIL_COLOR_Switch_01 - đổi giữa hai màu | passed | 11.98 |
| pd | PRODUCT_DETAIL_ERROR_Open_01 - URL không tồn tại | passed | 3.35 |
| pd | PRODUCT_DETAIL_ERROR_Security_01 - URL chứa payload script | skipped | 0.00 |
| pd | PRODUCT_DETAIL_COMPAT_Reload_01 - tải lại vẫn giữ màu và URL | passed | 13.43 |
| pd | PRODUCT_DETAIL_COMPAT_Navigate_01 - Back rồi Forward | passed | 19.07 |
| pd | PRODUCT_DETAIL_COMPAT_View_01 - hiển thị ở viewport 390x844 | passed | 7.74 |

## Các lỗi quan sát được

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.
