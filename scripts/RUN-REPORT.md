# Kết quả Playwright — Assignment 7, workbook v8

Ngày kiểm tra: 30/10/2026. Lệnh mỗi lượt: `npx playwright test --headed`. Hai lượt nối tiếp, cùng script, Chrome thật, 1 worker, retries 0. Desktop 1280×800, mobile 390×844.

## Bằng chứng DOM và thay đổi Expected

Mở URL https://cellphones.com.vn/iphone-17-256gb.html trả HTTP 200. Trong `.box-product-price-wrapper .smember-price-label` chỉ thấy `.sale-price` và các placeholder trống. Truy vấn computed CSS `textDecorationLine` không có phần tử line-through (`struck: []`). Ảnh chụp thấy giá bán, không có giá gốc gạch ngang. Ảnh/DOM: [price.png](run-evidence/2026-10-30-v8/price.png), [price-dom.json](run-evidence/2026-10-30-v8/price-dom.json).

Theo yêu cầu mới của người dùng, `PRODUCT_DETAIL_INFO_View_02` luôn assert giá bán hiện diện, định dạng tiền hợp lệ và giá trị > 0. Nếu DOM có phần tử gạch ngang trong vùng giá chính, parse tiền và assert từng giá gốc > giá bán. Không ghi cứng giá. Không dùng try/catch nuốt lỗi. Không lấy giá trả góp hoặc phụ kiện. Test thêm annotation phân biệt có/không thực thi nhánh so sánh.

Cả hai lượt không có phần tử gạch ngang nên nhánh giá gốc > giá bán không được thực thi trên website. Passed xác nhận nhánh không có giá gốc và giá bán hợp lệ, không phải bằng chứng nhánh so sánh đã chạy. Đây là thay đổi quy tắc được người dùng yêu cầu, không phải lỗi cũ tự biến mất.

Trang URL lỗi trả HTTP 404; assert đúng “Trang bạn đang tìm không tồn tại.” và “Vui lòng kiểm tra lại đường dẫn.”. Giữ nguyên các assertion nhãn không có % giảm và khối Khuyến mãi đi kèm hiện diện từ lượt trước.

Popup cookie hiện diện trong ảnh: helper bấm nút Từ chối khi nút hiển thị để không che thao tác.

## Hai lượt thực thi

| Lượt | Passed | Failed | Skipped |
|---|---:|---:|---:|
| 1 | 25 | 0 | 3 |
| 2 | 25 | 0 | 3 |

Ba case giữ skip: ACTION_Add_01, ACTION_Buy_01 và ERROR_Security_01. Không thao tác giỏ, mua hàng hay URL payload. Hai case giỏ vẫn có khóa bổ sung chưa triển khai cleanup dù ALLOW_CART=1. Không gặp CAPTCHA/403. Exit code cả hai lượt: 0.

## Workbook v8

Bản mới: `../testcases/Group15_22130275_TrinhQuangThong_v8.xlsx`, copy từ file chính. Chỉ thay bốn ô sheet Trang chi tiết SP:

| Ô | Nội dung cập nhật |
|---|---|
| D11 | Expected giá bán bắt buộc; có giá gốc thì giá gốc > giá bán |
| H11 | Automate Yes, quan sát DOM và ngày 30/10/2026 |
| D32 | Expected HTTP 404 và hai câu nguyên văn trang lỗi |
| H32 | Quan sát Chrome, nội dung đã cập nhật, ngày 30/10/2026 |

Result/Test date và các thống kê là lịch sử workbook, không đổi theo kết quả Playwright. Note ghi rõ phân biệt này. Định dạng, công thức, dropdown, ô gộp, các phần còn lại và file chính được giữ nguyên. Nội dung ô được soạn bằng Artifact Tool; chỉ đưa bốn giá trị đã xuất vào bản copy để tránh thay đổi các thành phần workbook ngoài phạm vi. Kiểm tra XML đảm bảo mọi phần khác giữ nguyên.

## Từng case

| Case | Lượt 1 | Lượt 2 |
|---|---|---|
| PRODUCT_DETAIL_INFO_Open_01 | passed | passed |
| PRODUCT_DETAIL_INFO_View_01 | passed | passed |
| PRODUCT_DETAIL_INFO_View_02 | passed | passed |
| PRODUCT_DETAIL_INFO_View_03 | passed | passed |
| PRODUCT_DETAIL_VARIANT_Select_01 | passed | passed |
| PRODUCT_DETAIL_VARIANT_Select_02 | passed | passed |
| PRODUCT_DETAIL_VARIANT_Switch_01 | passed | passed |
| PRODUCT_DETAIL_VARIANT_Open_01 | passed | passed |
| PRODUCT_DETAIL_COLOR_Select_01 | passed | passed |
| PRODUCT_DETAIL_COLOR_Select_02 | passed | passed |
| PRODUCT_DETAIL_VARIANT_Switch_02 | passed | passed |
| PRODUCT_DETAIL_GALLERY_Select_01 | passed | passed |
| PRODUCT_DETAIL_GALLERY_Navigate_01 | passed | passed |
| PRODUCT_DETAIL_GALLERY_Navigate_02 | passed | passed |
| PRODUCT_DETAIL_GALLERY_Open_01 | passed | passed |
| PRODUCT_DETAIL_INFO_View_04 | passed | passed |
| PRODUCT_DETAIL_INFO_Open_02 | passed | passed |
| PRODUCT_DETAIL_SPECS_View_01 | passed | passed |
| PRODUCT_DETAIL_SPECS_Open_01 | passed | passed |
| PRODUCT_DETAIL_SPECS_Switch_01 | passed | passed |
| PRODUCT_DETAIL_ACTION_Add_01 | skipped | skipped |
| PRODUCT_DETAIL_ACTION_Buy_01 | skipped | skipped |
| PRODUCT_DETAIL_COLOR_Switch_01 | passed | passed |
| PRODUCT_DETAIL_ERROR_Open_01 | passed | passed |
| PRODUCT_DETAIL_ERROR_Security_01 | skipped | skipped |
| PRODUCT_DETAIL_COMPAT_Reload_01 | passed | passed |
| PRODUCT_DETAIL_COMPAT_Navigate_01 | passed | passed |
| PRODUCT_DETAIL_COMPAT_View_01 | passed | passed |

## Giới hạn và bằng chứng chạy

- [JSON lượt 1](run-evidence/2026-10-30-v8/run-1.json), [JSON lượt 2](run-evidence/2026-10-30-v8/run-2.json). HTML mới nhất: playwright-report/index.html.
- Passed chỉ chứng minh assertion hiện có. Responsive chưa phủ đầy đủ promo/thanh mua cố định; gallery chưa đối chiếu đầy đủ chỉ số x; Forward chưa assert màu Tím. Giới hạn này không thay đổi trong nhiệm vụ hiện tại.
- Người dùng xác nhận đã upload video YouTube: https://youtu.be/rdBQQNcqgkg. File TXT đã điền đủ hai link. Không commit/push/checkout, không sửa workbook chính.

SHA-256 script: `842bac5334bbb1481bcfb016f079506047f11874564782e681861db5e1678031`.

## Lượt quay demo ngày 30/10/2026

Đã chạy thêm một lượt với video bật trong cấu hình riêng, kết quả 25 Passed / 0 Failed / 3 Skipped. Video: [MP4 demo](demo/2026-10-30_22-53/22130275_TrinhQuangThong_ASM7_demo.mp4), dài 3 phút 09 giây, chỉ ghi nội dung Chrome kiểm thử. Có nhãn ID, bảng kết quả từ JSON thật. [JSON](demo/2026-10-30_22-53/results.json), [mapping clip](demo/2026-10-30_22-53/manifest.json). Không đổi cấu hình video off của lượt kiểm thử thông thường.

## Chuẩn bị hồ sơ nộp cuối cùng

Video YouTube do người dùng cung cấp: https://youtu.be/rdBQQNcqgkg. TXT gồm đúng hai dòng: video và repo nhóm. Repo public đã kiểm tra qua GitHub API; file script trên QuangThong trả HTTP 404 tại thời điểm kiểm tra. Mã nguồn cục bộ chưa commit/push; không coi bước GitHub đã hoàn tất. Gói Classroom nằm trong submission/Assignment7_22130275_TrinhQuangThong.
