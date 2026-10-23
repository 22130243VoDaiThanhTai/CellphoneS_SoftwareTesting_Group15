# CellphoneS_SoftwareTesting_Group15
A university project focused on automated testing of the CellphoneS website. Developed by Group 15 to validate key functionalities, detect potential defects, and evaluate software quality through automated test scripts.


## HongNhan — Assignment 6: Build PC

Thiết kế và thực thi 30 case: **26 Pass, 0 Fail, 2 Blocked, 2 N/A** (23/10/2026).

- [Excel theo mẫu giảng viên](testcases/Group15_23130216_QuachHongNhan.xlsx)
- [Báo cáo và bằng chứng](automation-plan/execution-report.md)
- [Kế hoạch tự động hóa](automation-plan/automation-plan-build-pc.md)
- [Page Object](automation/pages/build-pc.mjs) và [11 test Playwright](automation/tests/build-pc.spec.mjs)

Người thực hiện: **Quách Hồng Nhân — 23130216**. Kết quả hiện tại là kiểm tra UI bằng trình duyệt điều khiển. Bộ Playwright độc lập mới kiểm tra cú pháp, chưa chạy bằng CLI/CI. Cài bằng `npm install`, `npx playwright install chromium`, chạy `npm test`.

Bản Excel được điền trực tiếp từ file mẫu giảng viên, giữ bố cục Cover, Test case List, TestDesign, 8 cột test case và Test Report; bổ sung Automation Plan và Test Data. Hai case N/A ghi `Skipped` theo mẫu và giải thích trong Note. Có `Group15.txt`; bộ ZIP Classroom chờ ảnh xác nhận push thành công.
