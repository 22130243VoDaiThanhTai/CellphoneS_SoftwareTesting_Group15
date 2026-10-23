# Kết quả kiểm thử Build PC — Assignment 6

Thành viên: Quách Hồng Nhân. Nhóm 15. Ngày thực thi: 23/10/2026.
URL: https://cellphones.com.vn/may-tinh-de-ban/build-pc.html.
Nhánh làm việc: `HongNhan`.

## Kết quả

| Tổng case | Pass | Fail | Blocked | N/A | Not Run |
| --- | --- | --- | --- | --- | --- |
| 30 | 26 | 0 | 2 | 2 | 0 |

26/30 case có đầy đủ kết quả mong đợi được quan sát. 26/26 case có thể đánh giá đều Pass. Không dùng 26/30 để tuyên bố chức năng đã đạt 100%.

Môi trường: trình duyệt IAB trên macOS, desktop, khu vực Hồ Chí Minh, chưa đăng nhập CellphoneS. Công cụ không cung cấp số phiên bản trình duyệt. Đã điều khiển UI bằng các lệnh locator và đối chiếu nội dung/giá/trạng thái thật. Một số case dùng chung kịch bản và bằng chứng. Bộ Playwright độc lập trong `automation/` được viết từ các locator đã khảo sát, đã kiểm tra cú pháp; chưa chạy bằng `npm test` và chưa chạy trên GitHub Actions. Không có kết quả Ghost Inspector.

## Giới hạn cần giải quyết

| Case | Trạng thái | Lý do và việc tiếp theo |
| --- | --- | --- |
| PC-024 | Blocked | Khảo sát đủ 45 CPU không có nhãn hết hàng. Cần SKU hết hàng thật hoặc môi trường test có dữ liệu này để kiểm tra hành vi. |
| PC-029 | Blocked | Đã click Tải file cấu hình, không nhận được sự kiện download trong 20 giây ở IAB. Cần chạy lại trên trình duyệt thường và đối chiếu tên/giá/tổng trong tệp. Chưa kết luận lỗi website. |
| PC-027, PC-028 | N/A | Giao diện khảo sát không có nút lưu cấu hình hoặc danh sách cấu hình đã lưu. Chưa kiểm chứng tính năng phía tài khoản đăng nhập. |

Không ghi defect sản phẩm cho hai case Blocked khi chưa có đủ bằng chứng. Không đổi Expected chỉ để biến kết quả chưa xác minh thành Pass.

## Chi tiết thực thi

| Case | Kết quả | Actual Result | Bằng chứng |
| --- | --- | --- | --- |
| PC-001 | Passed | Trang Build PC tải thành công. Đóng popup CPU không chọn sản phẩm: 14 nhóm vẫn Chọn, hiển thị Bạn chưa chọn cấu hình nào, không có tổng tiền cũ. | [Ảnh](evidence/PC-001_002_005_023_empty.jpg) · [DOM](evidence/PC-001_002_005_023_empty.txt) |
| PC-002 | Passed | Trang Build PC tải thành công. Đóng popup CPU không chọn sản phẩm: 14 nhóm vẫn Chọn, hiển thị Bạn chưa chọn cấu hình nào, không có tổng tiền cũ. | [Ảnh](evidence/PC-001_002_005_023_empty.jpg) · [DOM](evidence/PC-001_002_005_023_empty.txt) |
| PC-003 | Passed | Trong danh mục Máy tính để bàn, chọn liên kết Build PC; chuyển đúng /may-tinh-de-ban/build-pc.html, hiện tiêu đề và công cụ cấu hình. | [Ảnh](evidence/PC-003_navigation.jpg) · [DOM](evidence/PC-003_navigation.txt) |
| PC-004 | Passed | Popup CPU hiện tên, giá bán và nút Chọn; có Intel và AMD. | [Ảnh](evidence/PC-004_cpu.jpg) · [DOM](evidence/PC-004_cpu.txt) |
| PC-005 | Passed | Trang Build PC tải thành công. Đóng popup CPU không chọn sản phẩm: 14 nhóm vẫn Chọn, hiển thị Bạn chưa chọn cấu hình nào, không có tổng tiền cũ. | [Ảnh](evidence/PC-001_002_005_023_empty.jpg) · [DOM](evidence/PC-001_002_005_023_empty.txt) |
| PC-006 | Passed | Chọn CPU Intel Core i5 12400F giá 4.290.000đ; dòng CPU và tạm tính đều 4.290.000đ, số lượng 1. | [Ảnh](evidence/PC-006_019_cpu.jpg) · [DOM](evidence/PC-006_019_cpu.txt) |
| PC-007 | Passed | Mainboard Asus TUF Gaming B760M-PLUS Wifi D4 giá 3.750.000đ được thêm, CPU giữ nguyên; tạm tính 8.040.000đ. | [Ảnh](evidence/PC-007_main.jpg) · [DOM](evidence/PC-007_main.txt) |
| PC-008 | Passed | RAM ADATA XPG D50 16GB DDR4 giá 4.290.000đ được thêm đúng nhóm; CPU và mainboard giữ nguyên; tạm tính 12.330.000đ. | [Ảnh](evidence/PC-008_ram.jpg) · [DOM](evidence/PC-008_ram.txt) |
| PC-009 | Passed | SSD Kingston NV3 1TB giá 4.490.000đ được thêm đúng nhóm; CPU/main/RAM giữ nguyên; tạm tính 16.820.000đ. | [Ảnh](evidence/PC-009_ssd.jpg) · [DOM](evidence/PC-009_ssd.txt) |
| PC-010 | Passed | VGA Gigabyte RX 6500 XT Eagle 4GB giá 4.990.000đ được thêm, các nhóm giữ nguyên; tạm tính 21.810.000đ. | [Ảnh](evidence/PC-010_gpu.jpg) · [DOM](evidence/PC-010_gpu.txt) |
| PC-011 | Passed | PSU Corsair CX650 1.450.000đ được chọn. CPU/main/VGA/RAM/SSD/PSU hiển thị đủ, không ghi đè chéo; tạm tính 23.260.000đ. | [Ảnh](evidence/PC-011_014_psu.jpg) · [DOM](evidence/PC-011_014_psu.txt) |
| PC-012 | Passed | Case Jetek EN16 ATX giá 250.000đ thêm đúng nhóm; tạm tính 23.510.000đ, các nhóm khác còn nguyên. | [Ảnh](evidence/PC-012_case.jpg) · [DOM](evidence/PC-012_case.txt) |
| PC-013 | Passed | Tản nhiệt Xigmatek EPIX II 400.000đ được thêm đúng nhóm; 8 nhóm giữ nguyên; tạm tính 23.910.000đ. | [Ảnh](evidence/PC-013_cooler.jpg) · [DOM](evidence/PC-013_cooler.txt) |
| PC-014 | Passed | PSU Corsair CX650 1.450.000đ được chọn. CPU/main/VGA/RAM/SSD/PSU hiển thị đủ, không ghi đè chéo; tạm tính 23.260.000đ. | [Ảnh](evidence/PC-011_014_psu.jpg) · [DOM](evidence/PC-011_014_psu.txt) |
| PC-015 | Passed | Thay CPU i5 12400F 4.290.000đ bằng i5-12400F TRAY 3.990.000đ. Chỉ còn CPU mới, 7 nhóm khác giữ nguyên; tạm tính 23.910.000 - 4.290.000 + 3.990.000 = 23.610.000đ. | [Ảnh](evidence/PC-015_021_replace_cpu.jpg) · [DOM](evidence/PC-015_021_replace_cpu.txt) |
| PC-016 | Passed | Thay RAM ADATA 4.290.000đ bằng Kingston Fury Beast DDR4 16GB 3.990.000đ; SSD NV3 1TB còn nguyên; tổng 23.310.000đ. | [Ảnh](evidence/PC-016_replace_ram.jpg) · [DOM](evidence/PC-016_replace_ram.txt) |
| PC-017 | Passed | Xóa RAM Kingston 3.990.000đ và xác nhận Có; RAM trở lại Chọn, CPU và SSD giữ nguyên. Tổng 23.310.000 - 3.990.000 = 19.320.000đ. | [Ảnh](evidence/PC-017_022_delete_ram.jpg) · [DOM](evidence/PC-017_022_delete_ram.txt) |
| PC-018 | Passed | Chọn lại từ đầu trên cấu hình 7 linh kiện, xác nhận ở modal; tất cả nhóm trở lại Chọn, Bạn chưa chọn cấu hình nào và không còn tạm tính cũ. | [Ảnh](evidence/PC-018_reset.jpg) · [DOM](evidence/PC-018_reset.txt) |
| PC-019 | Passed | Chọn CPU Intel Core i5 12400F giá 4.290.000đ; dòng CPU và tạm tính đều 4.290.000đ, số lượng 1. | [Ảnh](evidence/PC-006_019_cpu.jpg) · [DOM](evidence/PC-006_019_cpu.txt) |
| PC-020 | Passed | Cấu hình chỉ CPU i5 12400F 4.290.000 + RAM ADATA 4.290.000 + SSD NV3 1TB 4.490.000 = tạm tính 13.070.000đ, mỗi nhóm số lượng 1. | [Ảnh](evidence/PC-020_total_three.jpg) · [DOM](evidence/PC-020_total_three.txt) |
| PC-021 | Passed | Thay CPU i5 12400F 4.290.000đ bằng i5-12400F TRAY 3.990.000đ. Chỉ còn CPU mới, 7 nhóm khác giữ nguyên; tạm tính 23.910.000 - 4.290.000 + 3.990.000 = 23.610.000đ. | [Ảnh](evidence/PC-015_021_replace_cpu.jpg) · [DOM](evidence/PC-015_021_replace_cpu.txt) |
| PC-022 | Passed | Xóa RAM Kingston 3.990.000đ và xác nhận Có; RAM trở lại Chọn, CPU và SSD giữ nguyên. Tổng 23.310.000 - 3.990.000 = 19.320.000đ. | [Ảnh](evidence/PC-017_022_delete_ram.jpg) · [DOM](evidence/PC-017_022_delete_ram.txt) |
| PC-023 | Passed | Trang Build PC tải thành công. Đóng popup CPU không chọn sản phẩm: 14 nhóm vẫn Chọn, hiển thị Bạn chưa chọn cấu hình nào, không có tổng tiền cũ. | [Ảnh](evidence/PC-001_002_005_023_empty.jpg) · [DOM](evidence/PC-001_002_005_023_empty.txt) |
| PC-024 | Blocked | Đã mở đủ 45 sản phẩm CPU tại Hồ Chí Minh, không thấy sản phẩm được đánh dấu hết hàng. Không có dữ liệu SP_HETHANG để thực hiện bước chọn; chưa xác minh hành vi hết tồn. | [Ảnh](evidence/PC-024_missing_stock_data.jpg) · [DOM](evidence/PC-024_missing_stock_data.txt) |
| PC-025 | Passed | Tìm 12400F trong popup CPU chỉ còn Intel i5 12400F và i5-12400F TRAY, đều thuộc nhóm CPU. | [Ảnh](evidence/PC-025_search.jpg) · [DOM](evidence/PC-025_search.txt) |
| PC-026 | Passed | Tìm zzx_no_product_987654: Không tìm thấy sản phẩm, danh sách rỗng. Xóa từ khóa khôi phục danh sách CPU, tìm 12400F và chọn được CPU khác. | [Ảnh](evidence/PC-026_no_result.jpg) · [DOM](evidence/PC-026_no_result.txt) |
| PC-027 | N/A | Khảo sát giao diện hiện tại chỉ có Chọn lại từ đầu và Tải file cấu hình; không có nút Lưu cấu hình hoặc mục mở danh sách cấu hình đã lưu. Hai case lưu phía tài khoản chưa áp dụng. | [Ảnh](evidence/PC-027_028_no_save.jpg) · [DOM](evidence/PC-027_028_no_save.txt) |
| PC-028 | N/A | Khảo sát giao diện hiện tại chỉ có Chọn lại từ đầu và Tải file cấu hình; không có nút Lưu cấu hình hoặc mục mở danh sách cấu hình đã lưu. Hai case lưu phía tài khoản chưa áp dụng. | [Ảnh](evidence/PC-027_028_no_save.jpg) · [DOM](evidence/PC-027_028_no_save.txt) |
| PC-029 | Blocked | Đã bấm Tải file cấu hình với CPU+RAM+SSD tổng 13.070.000đ. Công cụ không nhận sự kiện download sau 20 giây, không có thông báo lỗi trên UI. Chưa có tệp để đối chiếu; cần xác minh bằng trình duyệt thường trước khi kết luận lỗi website. | [Ảnh](evidence/PC-029_download_blocked.jpg) · [DOM](evidence/PC-029_download_blocked.txt) |
| PC-030 | Passed | Nhấp đúp Chọn CPU i5 12400F: chỉ một dòng CPU, số lượng 1; tạm tính 19.620.000đ không cộng trùng. | [Ảnh](evidence/PC-030_double_click.jpg) · [DOM](evidence/PC-030_double_click.txt) |

## Kiểm tra bổ sung số lượng

- CPU 1 → 2: tạm tính 13.070.000 → 17.360.000đ, tăng đúng 4.290.000đ.
- CPU 2 → 1: tạm tính trở lại 13.070.000đ.
- Bấm giảm khi số lượng 1: mở xác nhận Xoá sản phẩm. Chọn Không giữ số lượng 1 và tổng tiền cũ, không phát sinh số âm.
- Ảnh: [số lượng 2](evidence/supplement_quantity_2.jpg), [xác nhận tại số lượng 1](evidence/supplement_quantity_min1.jpg).

## Đối chiếu cách làm trong nhóm

Đã đọc các tài liệu hiện có trên ba nhánh:

- [QuangHuy — Account/User testing](https://github.com/22130243VoDaiThanhTai/CellphoneS_SoftwareTesting_Group15/blob/QuangHuy/Automation-plan/automation-Account_User_testing.md): phân loại case tự động/thủ công, ghi rõ phần dự kiến và phần đã chạy.
- [QuangThong — Product Detail](https://github.com/22130243VoDaiThanhTai/CellphoneS_SoftwareTesting_Group15/blob/QuangThong/automation-plan/automation-plan.md): kết quả thực thi gắn với ảnh và giới hạn; không suy diễn toàn bộ case từ một assertion.
- [TienVinh — Search/Filter](https://github.com/22130243VoDaiThanhTai/CellphoneS_SoftwareTesting_Group15/blob/TienVinh/test_plan/automation-plan-search-filter.md): giữ Excel và kế hoạch, dùng dữ liệu động cho giá/tồn kho.

Áp dụng cùng cách tổ chức Excel + kế hoạch + bằng chứng, giữ rõ kết quả UI và trạng thái script độc lập.

## Hồ sơ nộp

- `testcases/Group15_23130216_QuachHongNhan.xlsx`: điền trực tiếp file mẫu giảng viên, giữ Cover, Test case List, TestDesign, 8 cột test case và Test Report; đổi sheet ví dụ thành Build PC, bỏ các chức năng AB-SD không thuộc phạm vi, bổ sung Automation Plan và Test Data. Result dùng Passed/Failed/Untested/Blocked/Skipped; hai N/A được ánh xạ Skipped và giữ rõ lý do trong Note.
- `automation-plan/execution-results.json`: dữ liệu kết quả và thời điểm ghi nhận từng case.
- `automation-plan/evidence/`: ảnh thật và DOM tại các mốc kiểm tra.
- `automation/`: Page Object và 11 test Playwright cho lượt chạy lại.

Người thực hiện: Quách Hồng Nhân — MSSV 23130216. Sheet Build PC giữ đúng 8 cột của mẫu; Pre-condition/Input/Step ở Test Case Procedure, Actual Result và bằng chứng ở Note. Giữ công thức Test coverage của mẫu, loại Blocked và Skipped khỏi mẫu số; 100% trong báo cáo chỉ tính 26 case đủ điều kiện đánh giá, không phải 30/30 Passed. Bản tuần này có 30 case của một chức năng, còn hai chức năng được giao sẽ bổ sung theo tiến độ project.

Sau lượt kiểm thử đã reset cấu hình thử về rỗng, giỏ hàng vẫn 0. Không đặt hàng, không gửi form, không đăng nhập CellphoneS.
