# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261105220228-26696. Bắt đầu: 2026-11-05T15:02:29.718Z. Thời gian: 181.50 giây.

**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 9; có kết quả: 9. Passed: 8; Failed: 1; Skipped: 0; Interrupted: 0.

Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | passed | 15.43 |
| cp | PRODUCT_COMPARE_LIST_Limit_01 - thử thêm thứ tư trong khay | passed | 32.87 |
| cp | PRODUCT_COMPARE_LIST_Duplicate_01 - thêm lại cùng PDP | passed | 16.16 |
| rv | PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao | passed | 14.69 |
| rv | PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao | passed | 14.90 |
| rv | PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao | passed | 14.12 |
| rv | PRODUCT_REVIEW_FILTER_Select_05 - nhánh rỗng 1 sao | passed | 14.34 |
| rv | PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao | failed | 32.94 |
| rv | PRODUCT_REVIEW_FILTER_Select_06 - Có hình ảnh nhánh rỗng | passed | 14.00 |

## Các lỗi quan sát được

### rv: PRODUCT_REVIEW_FILTER_Clear_01 - Tất cả sau 4 sao

```text
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for getByRole('button', { name: 'Từ chối', exact: true })[22m
[2m    - found getByRole('button', { name: 'Từ chối', exact: true }), intercepting action to run the handler[22m
[2m    - locator handler has finished, waiting for getByRole('button', { name: 'Từ chối', exact: true }) to be hidden[22m
[2m    - interception handler has finished, continuing[22m

```

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.
