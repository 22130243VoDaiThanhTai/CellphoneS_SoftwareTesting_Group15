# Nguồn ảnh báo cáo

Lượt chạy thật ngày 05/11/2026, run `asm8-20261105222818-34028`. Ba ảnh chụp ngày 06/11 từ HTML Playwright và console.log đã lưu bằng Chrome cục bộ. Không chạy website mới để tạo ảnh.

- playwright-report-overview.png: bộ đếm gốc All 64, Passed 64, Failed 0, Skipped 18. Tổng khai báo của runner là 82.
- playwright-test-steps.png: thao tác và assertion của PRODUCT_DETAIL_VARIANT_Select_02.
- playwright-original-log.png: đoạn cuối console.log gốc, 18 skipped và 64 passed. Khi hiển thị chỉ bỏ mã màu ANSI, không sửa nội dung.

Console.log gốc giữ nguyên byte trong Evidence/Logs/. Ảnh Cases/ giữ nguyên byte từ attachment thực thi. Với case có ảnh trước cleanup hoặc ở tab mới, chọn ảnh đó để thể hiện đúng trạng thái cần kiểm tra. Một ảnh có thể phục vụ nhiều dòng khi nội dung trùng. Không tạo ảnh cho case chưa thực thi.
