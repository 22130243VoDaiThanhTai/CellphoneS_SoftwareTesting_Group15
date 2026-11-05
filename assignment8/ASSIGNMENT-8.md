# Assignment 8 — Tích hợp & chạy automation test nhóm

Nguồn: đề do người dùng cung cấp trong cuộc trò chuyện ngày 31/10/2026. Đây là bản chép để làm việc, không bổ sung rubric chưa được cung cấp.

## 1. Mục tiêu

Tích hợp Automation Script của tất cả thành viên thành một Automation Testing Project thống nhất, thực hiện chạy toàn bộ Test Suite trên website thực tế đã lựa chọn và đánh giá kết quả kiểm thử.

Đồng thời, mỗi thành viên phải chuẩn bị một phần PowerPoint (.pptx) để báo cáo công việc đã thực hiện, làm cơ sở xây dựng báo cáo tổng kết của nhóm vào tuần tiếp theo.

## 2. Nội dung công việc

### Bước 1. Tích hợp Automation Testing Project

- Thu thập Automation Script của tất cả thành viên.
- Kết hợp script của các thành viên vào một project duy nhất.
- Thống nhất cấu trúc thư mục, package, naming convention và cách tổ chức test.
- Kiểm tra và xử lý các vấn đề phát sinh khi tích hợp.
- Đảm bảo các script có thể chạy độc lập và chạy chung trong một Test Suite.

### Bước 2. Chạy toàn bộ Test Suite

- Chạy toàn bộ Automation Test trên website online mà nhóm đã lựa chọn.
- Kiểm tra hoạt động của từng Test Case.
- Đối chiếu Actual Result với Expected Result.
- Ghi nhận Pass, Fail hoặc Skipped.
- Kiểm tra tính ổn định; chạy lại test cần thiết để xác định Flaky Test.
- Phân tích nguyên nhân thất bại và đề xuất khắc phục.

### Bước 3. Ghi nhận Test Report

- Tổng số Test Case đã thực thi.
- Số lượng Pass, Fail, Skipped (nếu có).
- Thời gian thực thi toàn bộ Test Suite.
- Danh sách Test Case thất bại và nguyên nhân.
- Screenshot, log hoặc báo cáo tự động từ công cụ kiểm thử.

### Bước 4. PowerPoint báo cáo tiến độ cá nhân

Mỗi thành viên chuẩn bị một file PowerPoint riêng, gồm:

1. Introduction: thông tin sinh viên, nhóm và website kiểm thử.
2. Assigned Functions: nhắc lại 03 chức năng được phân công và phạm vi kiểm thử.
3. Automation Implementation: script đã xây dựng, công cụ và tổ chức code.
4. Integration: cách tích hợp script cá nhân vào project chung.
5. Test Execution: quá trình chạy, screenshot thực tế.
6. Test Results: kết quả Pass/Fail của chức năng phụ trách.
7. Issues & Solutions: khó khăn phát sinh và cách xử lý.
8. Conclusion: đánh giá công việc cá nhân và nội dung cần hoàn thiện.

Lưu ý:

- Mỗi sinh viên có PowerPoint riêng.
- Phải có hình ảnh hoặc minh chứng thực tế, không chỉ lý thuyết.
- Có thể đưa code tiêu biểu, screenshot khi chạy và kết quả vào slide.
- Phải thể hiện công việc đã thực hiện; không chỉ mô tả dự kiến.
- Sử dụng template thống nhất để ghép báo cáo nhóm tuần sau.

## 3. Kết quả cần nộp

### A. Sản phẩm nhóm — đẩy lên GitHub nhóm

1. Một thư mục project tích hợp script tất cả thành viên: **Automation Testing Project - Group XX**.
2. Báo cáo toàn bộ Test Suite (HTML/XML hoặc định dạng phù hợp): **Test Report - Group XX**.
3. Một thư mục screenshot/log: **Envidence - GroupXX**.
4. Hướng dẫn cài đặt, cấu hình và chạy project: **README**.

Giữ nguyên cách viết `Envidence` của đề. Với Group15, kế hoạch sẽ thay XX bằng 15; việc đặt đường dẫn cụ thể được ghi ở PLAN.md.

### B. Sản phẩm cá nhân — Google Classroom

1. PowerPoint: **MaSV_HoTen.pptx**.
2. Thư mục minh chứng script và kết quả: **MaSV_HoTen_TestScript**, nén thành **.zip**.
3. Nộp **MaSV_HoTen.pptx** và **MaSV_HoTen_TestScript.zip**.

## 4. Yêu cầu buổi báo cáo cuối

- Mỗi thành viên trình bày công việc cá nhân.
- Giải thích được script đã xây dựng.
- Giải thích được Pass/Fail và lỗi phát sinh.
- Chứng minh project nhóm chạy được, không chỉ ghép source code.
- Giữ và tiếp tục bổ sung PowerPoint tuần này cho báo cáo cuối sau hai tuần, không tạo lại từ đầu.

## Thông tin chưa có trong đề được cung cấp

Chưa có rubric chấm điểm chi tiết, số slide bắt buộc, phiên bản Playwright bắt buộc, tỷ lệ Pass tối thiểu, quy định retry cụ thể hoặc file template PowerPoint. Không tự coi các lựa chọn triển khai là yêu cầu giảng viên.
