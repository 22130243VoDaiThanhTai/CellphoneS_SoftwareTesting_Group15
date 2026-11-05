# CP/RV — Kết quả Playwright ngày 05/11/2026

Trịnh Quang Thông, 22130275, Group15. Chỉ chức năng cá nhân. Không phải kết quả suite mọi thành viên.

Lượt đầy đủ mới nhất: `asm8-20261105221047-29496`. 341.11 giây. Status runner: `passed`.

| Chức năng | Passed | Failed (kể cả timeout) | Skipped | Tổng |
|---|---:|---:|---:|---:|
| CP | 25 | 0 | 0 | 25 |
| RV | 14 | 0 | 15 | 29 |

[Mở HTML Playwright](<Test%20Report%20-%20Group%2015/asm8-20261105221047-29496/index.html>) · [JSON runner](<Test%20Report%20-%20Group%2015/asm8-20261105221047-29496/execution-summary.json>) · [Log console](<Envidence%20-%20Group15/asm8-20261105221047-29496/logs/console.log>)

## Mức độ hoàn thiện

- CP: 25 implementation bám 25 ID workbook. Responsive có assertion geometry/UI và ảnh, vẫn cần đánh giá trực quan đầy đủ.
- RV: 14 implementation công khai. 15 mục form/input là khai báo Skipped có lý do, chưa triển khai thao tác form Playwright vì cần phiên đăng nhập hoặc Expected validation còn chưa xác minh.
- Ba Expected RV trong workbook tiếp tục Untested/CẦN XÁC MINH: CONTENT_Validate_01 (14 ký tự), CONTENT_Limit_01 (1000 ký tự), CONTENT_Validate_02 (15 dấu cách). Không suy từ value textarea sang server validation.
- Không gửi review, không upload, không đăng nhập, không lấy cookie, không thêm giỏ hay mua. Khay CP riêng với giỏ hàng và đã dọn bằng UI trong test có yêu cầu cleanup.
- Workbook ASM6 và hai file nộp PD giữ nguyên. Kết quả thủ công ngày 02–03/11 không thay cho kết quả runner này. PD giữ lượt lịch sử 31/10, chưa chạy chung cả 82 trong lượt mới.

## Từng case và minh chứng

| ID | Kết quả | Ảnh | Lý do / ghi chú |
|---|---|---|---|
| PRODUCT_COMPARE_PAGE_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-b5a90-n-01---m%E1%BB%9F-b%E1%BA%A3ng-m%E1%BB%99t-s%E1%BA%A3n-ph%E1%BA%A9m-cp/attachments/execution-screenshot-aed03249a5970a23dad90b86e033155dc14e97ee.png>) |  |
| PRODUCT_COMPARE_LIST_Add_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-09b8e-E-LIST-Add-01---th%C3%AAm-t%E1%BB%AB-PDP-cp/attachments/compare-tray-before-cleanup-94e5cb7580aec9d70a1010f02b508af37df9aef3.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-09b8e-E-LIST-Add-01---th%C3%AAm-t%E1%BB%AB-PDP-cp/attachments/execution-screenshot-08ed758a6189d4c3d3fe3893c62414f2560bc54c.png>) |  |
| PRODUCT_COMPARE_SEARCH_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-ff164-SEARCH-Open-01---m%E1%BB%9F-h%E1%BB%99p-t%C3%ACm-cp/attachments/execution-screenshot-4d9708cb5ceb0d11e97708412ac7ff5f781fb0ce.png>) |  |
| PRODUCT_COMPARE_SEARCH_Search_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-36cc0-H-Search-01---t%C3%ACm-iPhone-17-cp/attachments/execution-screenshot-d943eebe8f05681c075062e7fc27c80c89518bf9.png>) |  |
| PRODUCT_COMPARE_LIST_Add_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-5255b-IST-Add-02---th%C3%AAm-c%C3%B9ng-h%C3%A3ng-cp/attachments/execution-screenshot-5ecdf5f5dfd0266e037403a7bc9d6e2034bf12f3.png>) |  |
| PRODUCT_COMPARE_LIST_Add_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-cdcf2-IST-Add-03---th%C3%AAm-kh%C3%A1c-h%C3%A3ng-cp/attachments/execution-screenshot-a9053933b6075b51301122fce7a8c1d122e27fc0.png>) |  |
| PRODUCT_COMPARE_LIST_Add_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-36ab9-IST-Add-04---ba-c%E1%BB%99t-%C4%91%E1%BB%99c-l%E1%BA%ADp-cp/attachments/execution-screenshot-795a4500a8db675c1c7bd20e559d6f46736d6e52.png>) |  |
| PRODUCT_COMPARE_LIST_Limit_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-6fbf5--th%E1%BB%AD-th%C3%AAm-th%E1%BB%A9-t%C6%B0-trong-khay-cp/attachments/compare-tray-before-cleanup-98c1dc1fb502ed293dec5a87234b45e17c106cfc.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-6fbf5--th%E1%BB%AD-th%C3%AAm-th%E1%BB%A9-t%C6%B0-trong-khay-cp/attachments/execution-screenshot-57e3476bd915a463fccc7dc5ff50b09ad5f55736.png>) |  |
| PRODUCT_COMPARE_LIST_Duplicate_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-8a175-cate-01---th%C3%AAm-l%E1%BA%A1i-c%C3%B9ng-PDP-cp/attachments/compare-tray-before-cleanup-74bd9a2fba485220e736386d3ee8968880a1cd27.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-8a175-cate-01---th%C3%AAm-l%E1%BA%A1i-c%C3%B9ng-PDP-cp/attachments/execution-screenshot-766463de8c930a87574371173e7e8f6fb7d3dd5f.png>) |  |
| PRODUCT_COMPARE_LIST_Remove_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-3bb39--Remove-01---b%E1%BB%8F-c%E1%BB%99t-th%E1%BB%A9-hai-cp/attachments/execution-screenshot-a11075269a8dce0c3fe58778d803a75449ad33b8.png>) |  |
| PRODUCT_COMPARE_LIST_Remove_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-26f06-IST-Remove-02---b%E1%BB%8F-c%E1%BB%99t-cu%E1%BB%91i-cp/attachments/execution-screenshot-7a28577f1fc57c41221f6d5baa37f7e80c6c9d1e.png>) |  |
| PRODUCT_COMPARE_LIST_Replace_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-f6803-place-01---th%C3%AAm-l%E1%BA%A1i-%C3%B4-%C4%91%C3%A3-b%E1%BB%8F-cp/attachments/execution-screenshot-de90f77d4911172b274d63ea51b01d69a9e453ff.png>) |  |
| PRODUCT_COMPARE_SPECS_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-a6821-S-View-01---t%C3%AAn-h%C3%A0ng-c%C6%A1-b%E1%BA%A3n-cp/attachments/execution-screenshot-9287187357a0752d4178b61416f510d0eaf2cb49.png>) |  |
| PRODUCT_COMPARE_SPECS_View_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-688c7-View-02---dung-l%C6%B0%E1%BB%A3ng-256-GB-cp/attachments/execution-screenshot-7d2f19fb038253dfd776bc95ceb0abd66283a490.png>) |  |
| PRODUCT_COMPARE_SPECS_View_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-207fa---gi%C3%A1-tr%E1%BB%8B-c%C3%B9ng-h%C3%A0ng-Chipset-cp/attachments/execution-screenshot-f978ef685185df5007f3f5daedd28e9e7dac1c02.png>) |  |
| PRODUCT_COMPARE_SPECS_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-d2292-n-01---m%E1%BB%9F-c%E1%BA%A5u-h%C3%ACnh-chi-ti%E1%BA%BFt-cp/attachments/execution-screenshot-adf988c1fa134fa8f3940a71968d3c6cf92eacad.png>) |  |
| PRODUCT_COMPARE_SEARCH_Search_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-3941f--02---t%E1%BB%AB-kh%C3%B3a-kh%C3%B4ng-t%E1%BB%93n-t%E1%BA%A1i-cp/attachments/execution-screenshot-471b0e2a80710487e5b656ecf9ae5173b3e69d6f.png>) |  |
| PRODUCT_COMPARE_SEARCH_Clear_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-53353-ARCH-Clear-01---x%C3%B3a-t%E1%BB%AB-kh%C3%B3a-cp/attachments/execution-screenshot-043dbe656985ed3164e601a942ed0165bbf9edd4.png>) |  |
| PRODUCT_COMPARE_SEARCH_Input_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-d9a2d-ARCH-Input-01---ba-d%E1%BA%A5u-c%C3%A1ch-cp/attachments/execution-screenshot-d9b2d35fca6530bee05dad511d295bf1675d455b.png>) |  |
| PRODUCT_COMPARE_SEARCH_Input_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-f661d-H-Input-02---k%C3%BD-t%E1%BB%B1-%C4%91%E1%BA%B7c-bi%E1%BB%87t-cp/attachments/execution-screenshot-8af4ebc00bf260db3186a3d5a9b7e6ed5da84612.png>) |  |
| PRODUCT_COMPARE_SEARCH_Input_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-1f2f2-nput-03---ti%E1%BA%BFng-Vi%E1%BB%87t-c%C3%B3-d%E1%BA%A5u-cp/attachments/execution-screenshot-e535901806c36ec526e62927fbd8c6519ebb0f72.png>) |  |
| PRODUCT_COMPARE_PAGE_Reload_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-4485c-Reload-01---reload-theo-URL-cp/attachments/execution-screenshot-295ea33204c436bca96e9f67afae2973e0140bf6.png>) |  |
| PRODUCT_COMPARE_PAGE_Open_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-bb59f-GE-Open-02---tab-m%E1%BB%9Bi-t%E1%BB%AB-URL-cp/attachments/compare-direct-tab-d08b08d0838f7c928a0e4c59b75bb35a43a4217b.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-bb59f-GE-Open-02---tab-m%E1%BB%9Bi-t%E1%BB%AB-URL-cp/attachments/execution-screenshot-6227093f8a5b3cdbf1be9b4b018dfc17f703f877.png>) |  |
| PRODUCT_COMPARE_PAGE_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-336e6--ch%E1%BB%89-ki%E1%BB%83m-tra-href-Mua-ngay-cp/attachments/execution-screenshot-ec1de74cd15d6ad49100f9282a4ede8e512caf50.png>) |  |
| PRODUCT_COMPARE_PAGE_Responsive_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-6bb70-nsive-01---viewport-390x844-cp/attachments/execution-screenshot-762b6e54c0579f493a7d28c0dbc5edb435552a0e.png>) | Kiểm tra geometry/phần tử; vẫn cần xem ảnh để đánh giá khả năng đọc toàn bố cục. |
| PRODUCT_REVIEW_SUMMARY_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-0c72c-Y-View-01---ti%C3%AAu-%C4%91%E1%BB%81-khu-v%E1%BB%B1c-rv/attachments/execution-screenshot-a1be0be9667ffec126136e0f2d022bfcacba8de3.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-84eca-Y-View-02---%C4%91i%E1%BB%83m-trung-b%C3%ACnh-rv/attachments/execution-screenshot-3e524b522faae860e90ee4a77adf3b7727a67f44.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-b5c5f-iew-03---t%E1%BB%95ng-l%C6%B0%E1%BB%A3t-hi%E1%BB%87n-t%E1%BA%A1i-rv/attachments/execution-screenshot-d3bb9bdbe07833562a766a89f4ca14a0959709ab.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-259d3-Y-View-04---ph%C3%A2n-b%E1%BB%91-n%C4%83m-sao-rv/attachments/execution-screenshot-770316005927f9a409e87e28f2924f00c335c765.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_05 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-2b3be--View-05---%C4%91i%E1%BB%83m-tr%E1%BA%A3i-nghi%E1%BB%87m-rv/attachments/execution-screenshot-14d982889d2b4825f9163521254c31c016827d54.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-c05a4-ILTER-Select-01---l%E1%BB%8Dc-5-sao-rv/attachments/execution-screenshot-b11d1e580a61d20deaedb802fa07b69fcbac3ad6.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-11447-elect-02---nh%C3%A1nh-r%E1%BB%97ng-4-sao-rv/attachments/execution-screenshot-094d8428b3ad03f8aa28d2ddd8b263064f7a6a6b.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-3aa31-elect-03---nh%C3%A1nh-r%E1%BB%97ng-3-sao-rv/attachments/execution-screenshot-87e7648d367facd06fa8a5342973f76dd68fecf5.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-8968c-elect-04---nh%C3%A1nh-r%E1%BB%97ng-2-sao-rv/attachments/execution-screenshot-c9ca207531d248632df2eb0245b4a4c70b8435c3.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_05 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-eafe2-elect-05---nh%C3%A1nh-r%E1%BB%97ng-1-sao-rv/attachments/execution-screenshot-73807b3c5c4341d51140a43a311d9f504ad0a1fb.png>) |  |
| PRODUCT_REVIEW_FILTER_Clear_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-2c006-Clear-01---T%E1%BA%A5t-c%E1%BA%A3-sau-4-sao-rv/attachments/execution-screenshot-c18a49fda606c32c90f2684388dbc4153bc5cdd5.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_06 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-72df8-06---C%C3%B3-h%C3%ACnh-%E1%BA%A3nh-nh%C3%A1nh-r%E1%BB%97ng-rv/attachments/execution-screenshot-54e5fd070b632dceab2a1ae28aaef3f313621550.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_07 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-d3b7a-TER-Select-07---%C4%90%C3%A3-mua-h%C3%A0ng-rv/attachments/execution-screenshot-d6dc09a5096f15a762b8e7293eee1488e12dd12e.png>) |  |
| PRODUCT_REVIEW_LIST_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-8e794-en-01---Xem-t%E1%BA%A5t-c%E1%BA%A3-%C4%91%C3%A1nh-gi%C3%A1-rv/attachments/review-full-68cc9b8c50929f2cdc6bc042015e768c8c118ab8.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105221047-29496/artifacts/quangthong-22130275_TrinhQ-8e794-en-01---Xem-t%E1%BA%A5t-c%E1%BA%A3-%C4%91%C3%A1nh-gi%C3%A1-rv/attachments/execution-screenshot-19b30d74edace884edc26186d450f94518c73ae5.png>) |  |
| PRODUCT_REVIEW_FORM_Open_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_FORM_View_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_RATING_Select_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_RATING_Switch_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_View_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Clear_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Validate_01 | skipped | Không chụp vì chưa thực thi | Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation.;  |
| PRODUCT_REVIEW_CONTENT_Input_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Input_02 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Limit_01 | skipped | Không chụp vì chưa thực thi | Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation.;  |
| PRODUCT_REVIEW_CONTENT_Validate_02 | skipped | Không chụp vì chưa thực thi | Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation.;  |
| PRODUCT_REVIEW_CONTENT_Input_03 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Input_04 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Security_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_ATTACHMENT_View_01 | skipped | Không chụp vì chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |

## Lịch sử chạy và sửa script

| Run ID | Passed | Failed | Skipped | Interrupted | Ý nghĩa |
|---|---:|---:|---:|---:|---|
| asm8-20261105215357-21251 | 30 | 9 | 15 | 0 | Baseline đầy đủ |
| asm8-20261105220228-26696 | 8 | 1 | 0 | 0 | Chọn lọc sau sửa |
| asm8-20261105221010-29115 | 3 | 0 | 0 | 0 | Chọn lọc sau sửa |
| asm8-20261105221047-29496 | 39 | 0 | 15 | 0 | Lượt đủ sau sửa |

Các lượt đầu `asm8-20261105215044-18789`, `asm8-20261105215147-19671`, `asm8-20261105215327-20928`, `asm8-20261105220546-28087` đã ngắt để sửa locator/chuẩn bị script. Giữ log/status interrupted/not-run; không tính là lượt đầy đủ và không cộng số Passed các lượt.

### Nguyên nhân đã xác minh từ trace/DOM

1. `has` lồng locator có scope .boxReview khiến không tìm thấy phần tử con. Đổi sang locator tương đối đúng vùng, giữ assertion.
2. .star-count có khoảng trắng quanh số. Regex selector nhận whitespace, vẫn phải chọn đúng mức sao và xác nhận value=0 trước lọc.
3. Hai câu rỗng nằm chung một p có br. Assert đầy đủ hai câu trên paragraph, không dùng hai locator exact tách riêng.
4. Hộp tìm CP trên bảng dùng “Nhập tên sản phẩm muốn so sánh” và “+ Chọn để so sánh”. Khay PDP dùng “Tìm sản phẩm muốn so sánh” và “Chọn”. Đã tách selector theo DOM thật.
5. Cookie popup xuất hiện trễ che nút dọn khay. Locator handler bấm Từ chối qua UI. Lượt chọn lọc còn một lỗi do vừa handler vừa click tay nút này, đã bỏ click tay để tránh xung đột. Khi cookie nằm dưới modal tìm so sánh, handler đóng modal, bấm Từ chối rồi mở lại và khôi phục truy vấn bằng UI. Ba test chọn lọc sau sửa đã Passed.
6. Mỗi test khay chụp vùng khay trước cleanup. Test tab so sánh và trang review đầy đủ có ảnh riêng đúng tab đích.

Không nới Expected, không force click, không xóa overlay bằng JS, không retry tự động. Các lỗi baseline là lỗi script/đồng bộ được xác minh, chưa có căn cứ kết luận là lỗi sản phẩm.

## Cách chạy và phần còn lại

```bash
cd "assignment8/Automation Testing Project - Group 15"
npm run test:cp
npm run test:rv
npm run test:cp-rv
npm test  # cả 82 khai báo cá nhân, chỉ chạy khi muốn tạo lượt mới
```

Đã có lượt đủ CP/RV sau sửa; chưa có hai lượt đủ liên tiếp cùng source, chưa tuyên bố hết flaky dài hạn. Muốn hoàn tất form RV cần phiên/môi trường kiểm thử được phép và quy tắc validation được xác nhận. Không sửa ba Expected thành thao tác nhập để ép Passed.

Không commit, push, checkout hoặc merge.

Người dùng xác nhận ngày 05/11/2026 chưa có môi trường/đặc tả validation và yêu cầu giữ ba case RV Untested. Đã kiểm tra workbook không đổi SHA-256; Đánh giá SP!F29/F32/F33 vẫn Untested, G29/G32/G33 là dấu “-”.

[Ảnh báo cáo HTML Playwright gốc](<Envidence%20-%20Group15/asm8-20261105221047-29496/report-overview.png>) chụp cục bộ sau khi lượt chạy hoàn tất, không sửa DOM hoặc bộ đếm. Tổng runner 54 gồm 39 Passed và 15 Skipped.

Cập nhật sau commit source: đã chạy cả 82 PD/CP/RV, 64 Passed/0 Failed/18 Skipped. CP/RV tiếp tục 39 Passed/15 Skipped với cùng spec/fixture/config. Xem [báo cáo tích hợp](INTEGRATION-RUN-REPORT.md).
