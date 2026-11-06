# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261105215044-18789. Bắt đầu: 2026-11-05T14:50:45.598Z. Thời gian: 131.88 giây.

**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 29; có kết quả: 9. Passed: 5; Failed: 3; Skipped: 0; Interrupted: 1.

Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| rv | PRODUCT_REVIEW_SUMMARY_View_01 - tiêu đề khu vực | passed | 7.41 |
| rv | PRODUCT_REVIEW_SUMMARY_View_02 - điểm trung bình | passed | 7.50 |
| rv | PRODUCT_REVIEW_SUMMARY_View_03 - tổng lượt hiện tại | passed | 8.19 |
| rv | PRODUCT_REVIEW_SUMMARY_View_04 - phân bố năm sao | passed | 8.13 |
| rv | PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm | failed | 16.98 |
| rv | PRODUCT_REVIEW_FILTER_Select_01 - lọc 5 sao | passed | 9.41 |
| rv | PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao | failed | 24.56 |
| rv | PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao | failed | 22.46 |
| rv | PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao | interrupted | 13.69 |

## Các lỗi quan sát được

### rv: PRODUCT_REVIEW_SUMMARY_View_05 - điểm trải nghiệm

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.experience-review__item').filter({ has: locator('.boxReview').getByText('Hiệu năng', { exact: true }) }).locator('.item-point')
Expected pattern: [32m/^\d(?:\.\d+)?\/5$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveText" locator('.boxReview').locator('.experience-review__item').filter({ has: locator('.boxReview').getByText('Hiệu năng', { exact: true }) }).locator('.item-point') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.experience-review__item').filter({ has: locator('.boxReview').getByText('Hiệu năng', { exact: true }) }).locator('.item-point')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_02 - nhánh rỗng 4 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^4$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^4$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^4$/ }) }).locator('progress')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_03 - nhánh rỗng 3 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^3$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Timeout: 8000ms
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^3$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^3$/ }) }).locator('progress')[22m

```

### rv: PRODUCT_REVIEW_FILTER_Select_04 - nhánh rỗng 2 sao

```text
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^2$/ }) }).locator('progress')
Expected pattern: [32m/^\d+$/[39m
Error: element(s) not found

Call log:
[2m  - Expect "toHaveAttribute" locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^2$/ }) }).locator('progress') with timeout 8000ms[22m
[2m  - waiting for locator('.boxReview').locator('.rating-level').filter({ has: locator('.boxReview').locator('.star-count').filter({ hasText: /^2$/ }) }).locator('progress')[22m
[2m  - Test ended.[22m

```

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.
