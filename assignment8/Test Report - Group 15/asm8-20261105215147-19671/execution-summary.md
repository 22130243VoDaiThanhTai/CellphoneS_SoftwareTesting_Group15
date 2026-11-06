# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261105215147-19671. Bắt đầu: 2026-11-05T14:51:48.307Z. Thời gian: 69.72 giây.

**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 25; có kết quả: 3. Passed: 1; Failed: 1; Skipped: 0; Interrupted: 1.

Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| cp | PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed | 12.25 |
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | failed | 38.48 |
| cp | PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm | interrupted | 4.02 |

## Các lỗi quan sát được

### cp: PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP

```text
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
[2m  - waiting for locator('.compare-products').locator('.compare-product.has-product').first().locator('.remove-compare-product')[22m
[2m    - locator resolved to <div data-v-0c8104f5="" class="remove-compare-product">…</div>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    33 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

```

### cp: PRODUCT_COMPARE_SEARCH_Open_01 - mở hộp tìm

```text
Error: locator.click: Test ended.
Call log:
[2m  - waiting for getByText('Thêm sản phẩm để so sánh', { exact: true }).first()[22m
[2m    - locator resolved to <span>Thêm sản phẩm để so sánh</span>[22m
[2m  - attempting click action[22m
[2m    - waiting for element to be visible, enabled and stable[22m

```

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.
