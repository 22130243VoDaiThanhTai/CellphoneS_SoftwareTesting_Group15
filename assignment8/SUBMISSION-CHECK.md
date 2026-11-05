# Kiểm tra hồ sơ ASM8 cá nhân — 05/11/2026

Phạm vi nộp trước: Trang chi tiết sản phẩm (PD), Trịnh Quang Thông, MSSV 22130275, Group15.

## Hai file nộp Classroom

Trong `../submission/Assignment8_22130275_TrinhQuangThong/` chỉ có:

1. `22130275_TrinhQuangThong.pptx`: 18 slide, đủ Introduction, Assigned Functions, Automation Implementation, Integration, Test Execution, Test Results, Issues & Solutions, Conclusion. Có ảnh báo cáo Playwright, Test Steps và log gốc. Slide ghi đúng phạm vi cá nhân và việc CP/RV chưa tích hợp ASM8. Hiện dùng mẫu tạm đã chuẩn bị, chưa xác nhận template thống nhất của nhóm.
2. `22130275_TrinhQuangThong_TestScript.zip`: 51 file, khoảng 7,51 MiB. Một thư mục gốc cùng tên, chứa Source/ (10 file), Report/ (5 file), Evidence/ (33 file), README.md, RUN-REPORT.md, MANIFEST-SHA256.txt. Không có node_modules, Build PC hoặc source của thành viên khác. PPTX nộp riêng ngoài ZIP.

ZIP chứa source chạy được, báo cáo HTML/JSON, ảnh và log của lượt đầy đủ cùng hai lượt kiểm tra chọn lọc. Mở `Report/index.html` sau giải nén để xem kết quả và ảnh. Các ảnh dùng chung giữa case được tham chiếu, không nhân bản không cần thiết. Bản giải nén “TestScript 2” trong personal/ là thư mục đã có trước; không dùng nó để thay cho ZIP đã kiểm tra.

## Đối chiếu kết quả gốc

| Lượt chạy ngày 31/10/2026 | Passed | Failed | Skipped | Thời gian |
|---|---:|---:|---:|---:|
| Đủ PD: asm8-20261031151155-46642 | 25 | 0 | 3 | 263,26 giây |
| Chọn lọc 1: asm8-20261031150043-44990 | 2 | 0 | 0 | 20,27 giây |
| Chọn lọc 2: asm8-20261031150713-45912 | 2 | 0 | 0 | 21,07 giây |

Ba skip là thêm giỏ, mua ngay và URL payload. Hai case từng có lỗi về ảnh màu/khuyến mãi đã Passed trong cả hai lượt chọn lọc và lượt đủ. Báo cáo giữ phân tích chờ dữ liệu khu vực, không khẳng định đã loại bỏ mọi flaky test.

Số liệu trên được kiểm tra lại từ execution-summary.json gốc, runner result đã đóng gói và log thoát code 0. Ngày 05/11 chỉ kiểm tra hồ sơ, tính toàn vẹn và chạy `playwright test --list --project=pd` (28 test/1 file), không chạy lại website và không đổi ngày chạy thành ngày kiểm tra.

## Kiểm tra đã thực hiện

- CRC của ZIP/PPTX; 50 hash manifest khớp.
- Source/config/fixture/reporter/runner/package trong ZIP khớp project ASM8 đang làm việc.
- Ba bản JSON đóng gói giữ nguyên title/status/count/duration so với summary gốc, có SHA-256 đối chiếu.
- Các liên kết ảnh và liên kết file cục bộ trong HTML đều có đích.
- Đã đọc nội dung cả 18 slide và xem bản render lưu cùng bản build để đối chiếu số liệu, bố cục và ảnh. Chưa mở file bằng PowerPoint native.
- Thư mục nộp chỉ có hai file đúng tên, bản sao byte trùng với personal/.

## Phân biệt phạm vi cá nhân và toàn nhóm

Hồ sơ đã đủ thành phần để nộp tiến độ cá nhân một chức năng PD theo phạm vi người dùng xác nhận. Phần toàn nhóm theo đề ASM8 còn phải thu thập/tích hợp script các thành viên, chạy suite chung, xuất report/evidence toàn nhóm, thống nhất template slide và đẩy project lên GitHub. Project PD hiện chưa thay thế cho bộ test toàn nhóm.

Thư mục assignment8/ hiện chưa được Git theo dõi. Không commit, push, checkout hoặc merge trong lần kiểm tra này. Không thay đổi source, kết quả, slide hoặc ZIP gốc.

## Bổ sung minh chứng trên slide ngày 05/11/2026

Slide 10–12 dùng ba ảnh mới từ báo cáo HTML gốc, bước/assertion của test 512GB và log lưu. Mỗi ảnh chiếm phần lớn slide, có chú thích nguồn và ngày. Bản PPTX đã qua kiểm tra cấu trúc, bố cục và render; chưa mở trong PowerPoint native. ZIP mới 51 file, có cùng ảnh trong Evidence/PlaywrightReport/. Kết quả 25/0/3 vẫn thuộc lượt chạy ngày 31/10, không phải một lượt test mới.

Cập nhật chiều sâu báo cáo ngày 05/11/2026: PowerPoint 18 slide, bổ sung phạm vi 28 test, dữ liệu và tiêu chí, selector/assertion, cấu hình, code 512GB, luồng lưu bằng chứng, lý do Skipped, phân tích lỗi tải động và kết quả chạy lại. Giữ kết quả gốc ngày 31/10/2026. Chỉ cập nhật PPTX, không chạy website hoặc sửa source/ZIP.
