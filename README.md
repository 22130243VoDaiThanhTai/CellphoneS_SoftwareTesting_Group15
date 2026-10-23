# CellphoneS_SoftwareTesting_Group15
A university project focused on automated testing of the CellphoneS website. Developed by Group 15 to validate key functionalities, detect potential defects, and evaluate software quality through automated test scripts.


## HongNhan — Assignment 6: Build PC

Thiết kế và thực thi 30 case: **26 Pass, 0 Fail, 2 Blocked, 2 N/A** (23/10/2026).

- [Excel](testcases/Group15_MaSV_QuachHongNhan.xlsx)
- [Báo cáo và bằng chứng](automation-plan/execution-report.md)
- [Kế hoạch tự động hóa](automation-plan/automation-plan-build-pc.md)
- [Page Object](automation/pages/build-pc.mjs) và [11 test Playwright](automation/tests/build-pc.spec.mjs)

Kết quả hiện tại là kiểm tra UI bằng trình duyệt điều khiển. Bộ Playwright độc lập mới kiểm tra cú pháp, chưa chạy bằng CLI/CI. Cài bằng `npm install`, `npx playwright install chromium`, chạy `npm test`. Cần bổ sung MSSV vào tên tệp trước khi nộp.
