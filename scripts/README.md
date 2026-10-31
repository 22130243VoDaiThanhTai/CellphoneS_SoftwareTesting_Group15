1. Trong `scripts` hoặc thư mục giải nén ZIP, chạy `npm ci` (cần Node.js và Google Chrome).
2. Chạy toàn bộ: `npx playwright test --headed`; cấu hình dùng Chrome đã cài.
3. Có thể dùng Chromium: `npx playwright install chromium`, rồi `PW_CHANNEL=chromium npx playwright test --headed`.
4. Xem kết quả: `npx playwright show-report`; JSON ở `test-results/results.json`.
5. Phạm vi nộp trước: Trang chi tiết sản phẩm, 25 Passed / 0 Failed / 3 Skipped ở lượt demo. Chi tiết và link video xem `SUBMISSION.md`.
