# Thực thi tích hợp PD/CP/RV — 22130275 Trịnh Quang Thông

Ngày chạy: 05/11/2026 (Asia/Ho_Chi_Minh). Group15. Phạm vi ba chức năng của một thành viên, chưa phải suite tất cả thành viên nhóm.

Run ID: `asm8-20261105222818-34028`. Source commit: `3aac5f88f39f91bee67f95e80915ede868e1f12e`. Thời gian: 552.83 giây. Runner `passed`, exit code `0`.

| Project | Passed | Failed/TimedOut | Skipped | Interrupted | Tổng |
|---|---:|---:|---:|---:|---:|
| PD | 25 | 0 | 3 | 0 | 28 |
| CP | 25 | 0 | 0 | 0 | 25 |
| RV | 14 | 0 | 15 | 0 | 29 |

[Báo cáo HTML Playwright gốc](<Test%20Report%20-%20Group%2015/asm8-20261105222818-34028/index.html>) · [JSON summary](<Test%20Report%20-%20Group%2015/asm8-20261105222818-34028/execution-summary.json>) · [Log console](<Envidence%20-%20Group15/asm8-20261105222818-34028/logs/console.log>)

## Cách thực thi

```bash
cd "assignment8/Automation Testing Project - Group 15"
node scripts/run-suite.cjs --project=pd --project=cp --project=rv
```

Chrome headed, 1280×800 mặc định, locale vi-VN, 1 worker, retries=0. Mỗi test tự tạo context/dữ liệu. Playwright chạy theo thứ tự project cấu hình CP, RV, PD. Không cộng kết quả lịch sử thành số case của lượt này.

## Skipped và phần chưa hoàn thiện

- PD: thêm giỏ, mua ngay, URL payload giữ skip an toàn.
- RV: 12 case form/input chưa có phiên tài khoản phù hợp trong context sạch. Không sao chép cookie/đăng nhập hoặc thao tác form ẩn.
- RV: ba case validation chưa đủ đặc tả/môi trường gửi thử (14 ký tự, 1000 ký tự, 15 dấu cách). Người dùng yêu cầu giữ Untested trong workbook.
- Skipped không tương đương Passed hoặc Failed. Case cần tiền đề dữ liệu khác còn được ghi lý do ở từng dòng.
- Không cập nhật workbook/Expected hoặc bộ nộp PD đã duyệt chỉ để khớp kết quả runner. Bộ PPT/ZIP đủ cả ba chức năng chưa được thay thế trong bước này.

## Từng case

| Case | Kết quả | Ảnh thực thi | Lý do / ghi chú |
|---|---|---|---|
| PRODUCT_COMPARE_PAGE_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-b5a90-n-01---m%E1%BB%9F-b%E1%BA%A3ng-m%E1%BB%99t-s%E1%BA%A3n-ph%E1%BA%A9m-cp/attachments/execution-screenshot-86c8a1ceb3dc59e85e90bf9c618f7711eded6e01.png>) |  |
| PRODUCT_COMPARE_LIST_Add_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-09b8e-E-LIST-Add-01---th%C3%AAm-t%E1%BB%AB-PDP-cp/attachments/compare-tray-before-cleanup-545161c57e0b11bddf11b99901b4000fad12fa9a.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-09b8e-E-LIST-Add-01---th%C3%AAm-t%E1%BB%AB-PDP-cp/attachments/execution-screenshot-adf2793e22087f140aabd3b842375579a8f85da4.png>) |  |
| PRODUCT_COMPARE_SEARCH_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-ff164-SEARCH-Open-01---m%E1%BB%9F-h%E1%BB%99p-t%C3%ACm-cp/attachments/execution-screenshot-2e6a00e0017730e060c9b1ebc2176081e8ef52aa.png>) |  |
| PRODUCT_COMPARE_SEARCH_Search_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-36cc0-H-Search-01---t%C3%ACm-iPhone-17-cp/attachments/execution-screenshot-9ecb891a2bc3aa7598e54913d501005b65306288.png>) |  |
| PRODUCT_COMPARE_LIST_Add_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-5255b-IST-Add-02---th%C3%AAm-c%C3%B9ng-h%C3%A3ng-cp/attachments/execution-screenshot-8c0c6e88b9c99b1d94ec942aadde3957778edd29.png>) |  |
| PRODUCT_COMPARE_LIST_Add_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-cdcf2-IST-Add-03---th%C3%AAm-kh%C3%A1c-h%C3%A3ng-cp/attachments/execution-screenshot-0ca190a4f88a9ef6db66f192a831abb4cb2530c9.png>) |  |
| PRODUCT_COMPARE_LIST_Add_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-36ab9-IST-Add-04---ba-c%E1%BB%99t-%C4%91%E1%BB%99c-l%E1%BA%ADp-cp/attachments/execution-screenshot-b79bd76a70dd3500554a12015b358fe512430d80.png>) |  |
| PRODUCT_COMPARE_LIST_Limit_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-6fbf5--th%E1%BB%AD-th%C3%AAm-th%E1%BB%A9-t%C6%B0-trong-khay-cp/attachments/compare-tray-before-cleanup-c443bc7f6fe00ecafea71664e7d426e44b965fd3.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-6fbf5--th%E1%BB%AD-th%C3%AAm-th%E1%BB%A9-t%C6%B0-trong-khay-cp/attachments/execution-screenshot-1c5f0fa51c32097ecb788d7f98198a5274be1c4f.png>) |  |
| PRODUCT_COMPARE_LIST_Duplicate_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-8a175-cate-01---th%C3%AAm-l%E1%BA%A1i-c%C3%B9ng-PDP-cp/attachments/compare-tray-before-cleanup-db89fbda9dbcfa169923b0b7d64f413d30c8860d.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-8a175-cate-01---th%C3%AAm-l%E1%BA%A1i-c%C3%B9ng-PDP-cp/attachments/execution-screenshot-b8ee2b20f911d7b26e4a034c750f6989b7fb957a.png>) |  |
| PRODUCT_COMPARE_LIST_Remove_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-3bb39--Remove-01---b%E1%BB%8F-c%E1%BB%99t-th%E1%BB%A9-hai-cp/attachments/execution-screenshot-cbf6720a8492aa462fde07946b9e0f61cf240f7d.png>) |  |
| PRODUCT_COMPARE_LIST_Remove_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-26f06-IST-Remove-02---b%E1%BB%8F-c%E1%BB%99t-cu%E1%BB%91i-cp/attachments/execution-screenshot-2c30f3f80a2b44eb45d92d5ae393654e3579900b.png>) |  |
| PRODUCT_COMPARE_LIST_Replace_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-f6803-place-01---th%C3%AAm-l%E1%BA%A1i-%C3%B4-%C4%91%C3%A3-b%E1%BB%8F-cp/attachments/execution-screenshot-8f8f073fd19bc6c4ec4cc219926253298463d011.png>) |  |
| PRODUCT_COMPARE_SPECS_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-a6821-S-View-01---t%C3%AAn-h%C3%A0ng-c%C6%A1-b%E1%BA%A3n-cp/attachments/execution-screenshot-b829c28fef2b30146c03b374767675fa660f1761.png>) |  |
| PRODUCT_COMPARE_SPECS_View_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-688c7-View-02---dung-l%C6%B0%E1%BB%A3ng-256-GB-cp/attachments/execution-screenshot-5381c3121244d43896d7e0122325826bde61c59c.png>) |  |
| PRODUCT_COMPARE_SPECS_View_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-207fa---gi%C3%A1-tr%E1%BB%8B-c%C3%B9ng-h%C3%A0ng-Chipset-cp/attachments/execution-screenshot-cf466c293a404ce9216434cdf9c68f70c54c8413.png>) |  |
| PRODUCT_COMPARE_SPECS_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-d2292-n-01---m%E1%BB%9F-c%E1%BA%A5u-h%C3%ACnh-chi-ti%E1%BA%BFt-cp/attachments/execution-screenshot-a967a68d74d4e2490c55f860c765a8d510154c0c.png>) |  |
| PRODUCT_COMPARE_SEARCH_Search_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-3941f--02---t%E1%BB%AB-kh%C3%B3a-kh%C3%B4ng-t%E1%BB%93n-t%E1%BA%A1i-cp/attachments/execution-screenshot-69f4fb18023ebfc28a2018f64f942ba2211fb1e6.png>) |  |
| PRODUCT_COMPARE_SEARCH_Clear_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-53353-ARCH-Clear-01---x%C3%B3a-t%E1%BB%AB-kh%C3%B3a-cp/attachments/execution-screenshot-c24323b860da351e26f548dc0eaf6f4fac36f3e5.png>) |  |
| PRODUCT_COMPARE_SEARCH_Input_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-d9a2d-ARCH-Input-01---ba-d%E1%BA%A5u-c%C3%A1ch-cp/attachments/execution-screenshot-da1e052163a030c771abe22477ab07d6f4f77c74.png>) |  |
| PRODUCT_COMPARE_SEARCH_Input_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-f661d-H-Input-02---k%C3%BD-t%E1%BB%B1-%C4%91%E1%BA%B7c-bi%E1%BB%87t-cp/attachments/execution-screenshot-6f9de0f64ec7d5517789b73f40829083e4162c03.png>) |  |
| PRODUCT_COMPARE_SEARCH_Input_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-1f2f2-nput-03---ti%E1%BA%BFng-Vi%E1%BB%87t-c%C3%B3-d%E1%BA%A5u-cp/attachments/execution-screenshot-4e1acf2ec39b84a0812d9cac35c33228fcf108bd.png>) |  |
| PRODUCT_COMPARE_PAGE_Reload_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-4485c-Reload-01---reload-theo-URL-cp/attachments/execution-screenshot-8d2e817a73907b3479ecaeaeba29d37cd7a1afed.png>) |  |
| PRODUCT_COMPARE_PAGE_Open_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-bb59f-GE-Open-02---tab-m%E1%BB%9Bi-t%E1%BB%AB-URL-cp/attachments/compare-direct-tab-16591d6a81acbaeff2db04c55b441a23f375ba89.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-bb59f-GE-Open-02---tab-m%E1%BB%9Bi-t%E1%BB%AB-URL-cp/attachments/execution-screenshot-eae7a6ff29771591b37e3f1d2b7fd87bc7de1e8f.png>) |  |
| PRODUCT_COMPARE_PAGE_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-336e6--ch%E1%BB%89-ki%E1%BB%83m-tra-href-Mua-ngay-cp/attachments/execution-screenshot-47e060e97548e5e1614f161230b00446608e7a62.png>) |  |
| PRODUCT_COMPARE_PAGE_Responsive_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-6bb70-nsive-01---viewport-390x844-cp/attachments/execution-screenshot-3d5d5770ad613eae3523a3fa3d2c39b7ff1fb885.png>) | Kiểm tra geometry/phần tử; vẫn cần xem ảnh để đánh giá khả năng đọc toàn bố cục. |
| PRODUCT_REVIEW_SUMMARY_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-0c72c-Y-View-01---ti%C3%AAu-%C4%91%E1%BB%81-khu-v%E1%BB%B1c-rv/attachments/execution-screenshot-cbea0d23282e4075de4eb968fca90569caad9d8b.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-84eca-Y-View-02---%C4%91i%E1%BB%83m-trung-b%C3%ACnh-rv/attachments/execution-screenshot-2e1344f596651def69ecd76f9aaaf6ee5c5419f2.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-b5c5f-iew-03---t%E1%BB%95ng-l%C6%B0%E1%BB%A3t-hi%E1%BB%87n-t%E1%BA%A1i-rv/attachments/execution-screenshot-cea94b563fb2c338cd3bbc0cc6b21997e20d1d8e.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-259d3-Y-View-04---ph%C3%A2n-b%E1%BB%91-n%C4%83m-sao-rv/attachments/execution-screenshot-078daf6d3019b4ddbcc2c4a6ced7802ef92ec733.png>) |  |
| PRODUCT_REVIEW_SUMMARY_View_05 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-2b3be--View-05---%C4%91i%E1%BB%83m-tr%E1%BA%A3i-nghi%E1%BB%87m-rv/attachments/execution-screenshot-8aa81f334aa03114c7ecf306532d14715923655c.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-c05a4-ILTER-Select-01---l%E1%BB%8Dc-5-sao-rv/attachments/execution-screenshot-f161eab9b769b6d043131808e3d9ff6ae60f2882.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-11447-elect-02---nh%C3%A1nh-r%E1%BB%97ng-4-sao-rv/attachments/execution-screenshot-dd088fe2ed2836cf99f9ffd960c7a6bee2d35000.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-3aa31-elect-03---nh%C3%A1nh-r%E1%BB%97ng-3-sao-rv/attachments/execution-screenshot-243d1d1c4876a2f92c369c31d79023904f933e3f.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-8968c-elect-04---nh%C3%A1nh-r%E1%BB%97ng-2-sao-rv/attachments/execution-screenshot-278bde97c92e1a43ab71480268282a4e9a1a4b0b.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_05 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-eafe2-elect-05---nh%C3%A1nh-r%E1%BB%97ng-1-sao-rv/attachments/execution-screenshot-3a5733201212b6944845e30b45497e5aff7dc484.png>) |  |
| PRODUCT_REVIEW_FILTER_Clear_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-2c006-Clear-01---T%E1%BA%A5t-c%E1%BA%A3-sau-4-sao-rv/attachments/execution-screenshot-7b063b3cf9c5dce5de9a8c360885baf60c6a27c4.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_06 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-72df8-06---C%C3%B3-h%C3%ACnh-%E1%BA%A3nh-nh%C3%A1nh-r%E1%BB%97ng-rv/attachments/execution-screenshot-4a5c3c733189afb9e4dbd8143aaea31580aec523.png>) |  |
| PRODUCT_REVIEW_FILTER_Select_07 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-d3b7a-TER-Select-07---%C4%90%C3%A3-mua-h%C3%A0ng-rv/attachments/execution-screenshot-bc22d45ac7995861116ec371a88399d7fa407f5d.png>) |  |
| PRODUCT_REVIEW_LIST_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-8e794-en-01---Xem-t%E1%BA%A5t-c%E1%BA%A3-%C4%91%C3%A1nh-gi%C3%A1-rv/attachments/review-full-69fc85fd07576ef1ac2c359deee249ec5a0420e1.png>), [Ảnh 2](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-8e794-en-01---Xem-t%E1%BA%A5t-c%E1%BA%A3-%C4%91%C3%A1nh-gi%C3%A1-rv/attachments/execution-screenshot-19c0b8c94f7e11a796dc00d2c088d46212c6529c.png>) |  |
| PRODUCT_REVIEW_FORM_Open_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_FORM_View_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_RATING_Select_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_RATING_Switch_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_View_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Clear_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Validate_01 | skipped | Không có ảnh do chưa thực thi | Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation.;  |
| PRODUCT_REVIEW_CONTENT_Input_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Input_02 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Limit_01 | skipped | Không có ảnh do chưa thực thi | Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation.;  |
| PRODUCT_REVIEW_CONTENT_Validate_02 | skipped | Không có ảnh do chưa thực thi | Expected còn CẦN XÁC MINH trong workbook; cần đặc tả/môi trường cho phép gửi thử. Không suy từ nhập liệu sang validation.;  |
| PRODUCT_REVIEW_CONTENT_Input_03 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Input_04 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_CONTENT_Security_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_REVIEW_ATTACHMENT_View_01 | skipped | Không có ảnh do chưa thực thi | Cần phiên CellphoneS đăng nhập có sẵn. Project chạy context sạch, không sao chép cookie hoặc đăng nhập; không gửi đánh giá.;  |
| PRODUCT_DETAIL_INFO_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-5a575-1---m%E1%BB%9F-URL-s%E1%BA%A3n-ph%E1%BA%A9m-c%E1%BB%91-%C4%91%E1%BB%8Bnh-pd/attachments/execution-screenshot-64791dcf934ee187cd9f7a6dce0f78eafdb94a7a.png>) |  |
| PRODUCT_DETAIL_INFO_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-867a9-th%E1%BB%8B-t%C3%AAn-gi%C3%A1-%E1%BA%A3nh-v%C3%A0-th%C3%B4ng-s%E1%BB%91-pd/attachments/execution-screenshot-57186534ea9c011a1151edcf9057191e2f3fa177.png>) |  |
| PRODUCT_DETAIL_INFO_View_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-1363c-%C3%A1n-v%C3%A0-gi%C3%A1-g%E1%BB%91c-%C4%91ang-hi%E1%BB%83n-th%E1%BB%8B-pd/attachments/execution-screenshot-1876dac19f92b9e19d46f29139951295b633c324.png>) |  |
| PRODUCT_DETAIL_INFO_View_03 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-14b4f-h%C3%A3n-ph%E1%BA%A7n-tr%C4%83m-gi%E1%BA%A3m-c%E1%BA%A1nh-gi%C3%A1-pd/attachments/execution-screenshot-1eaaf0b3ade2ff1b881e5b3ab64acc2437b8cd64.png>) |  |
| PRODUCT_DETAIL_VARIANT_Select_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-91b1e-IANT-Select-01---ch%E1%BB%8Dn-256GB-pd/attachments/execution-screenshot-98de3a92972b3eb379df6efe917bce45fee7bac2.png>) |  |
| PRODUCT_DETAIL_VARIANT_Select_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-e6449-IANT-Select-02---ch%E1%BB%8Dn-512GB-pd/attachments/execution-screenshot-160d6614b17646fa392c806c7967457806a2533d.png>) |  |
| PRODUCT_DETAIL_VARIANT_Switch_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-aa5cb---chuy%E1%BB%83n-512GB-r%E1%BB%93i-v%E1%BB%81-256GB-pd/attachments/execution-screenshot-3b0a1938ac8a66c9259f8bc295f1fbc2c615e1b6.png>) |  |
| PRODUCT_DETAIL_VARIANT_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-27c9a-01---m%E1%BB%9F-tr%E1%BB%B1c-ti%E1%BA%BFp-URL-512GB-pd/attachments/execution-screenshot-406928a5f5c842d5551c51813ecd5b67a899dc54.png>) |  |
| PRODUCT_DETAIL_COLOR_Select_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-2ea92--l%C6%B0%E1%BB%A3t-c%C3%A1c-m%C3%A0u-%C4%91ang-hi%E1%BB%83n-th%E1%BB%8B-pd/attachments/execution-screenshot-9c52911bb133d5f6bc4ee004f05b70915cbba471.png>) |  |
| PRODUCT_DETAIL_COLOR_Select_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-dfc04--L%C3%A1-X%C3%B4-Th%C6%A1m-v%C3%A0-ki%E1%BB%83m-tra-%E1%BA%A3nh-pd/attachments/execution-screenshot-246ea8846a73bae2f94b273d192b262fbc4fa51a.png>) |  |
| PRODUCT_DETAIL_VARIANT_Switch_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-385ab--m%C3%A0u-T%C3%ADm-khi-%C4%91%E1%BB%95i-sang-512GB-pd/attachments/execution-screenshot-2014c03ebd22d1aee5a11c6d2b3a84f1045ca1c5.png>) |  |
| PRODUCT_DETAIL_GALLERY_Select_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-dccf1-elect-01---ch%E1%BB%8Dn-%E1%BA%A3nh-thu-nh%E1%BB%8F-pd/attachments/execution-screenshot-0a5803d878ba93a56359aa64ee40d053da4bd38b.png>) |  |
| PRODUCT_DETAIL_GALLERY_Navigate_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-253e5-e-01---chuy%E1%BB%83n-%E1%BA%A3nh-b%E1%BA%B1ng-Next-pd/attachments/execution-screenshot-d7947ad7de6e15c37bac1e6f04e5c8dbeb8d49a1.png>) |  |
| PRODUCT_DETAIL_GALLERY_Navigate_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-bf93c-02---Previous-t%E1%BA%A1i-slide-%C4%91%E1%BA%A7u-pd/attachments/execution-screenshot-426b6918d2d70b2c8516d63af90278af5327a9fd.png>) |  |
| PRODUCT_DETAIL_GALLERY_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-18346-ape-v%C3%A0-%C4%91%C3%B3ng-h%E1%BB%99p-tho%E1%BA%A1i-video-pd/attachments/execution-screenshot-7c9ff0158c4b34e50440c0e629cc7931274f5a60.png>) |  |
| PRODUCT_DETAIL_INFO_View_04 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-c34e6--th%E1%BB%8B-kh%E1%BB%91i-Khuy%E1%BA%BFn-m%C3%A3i-%C4%91i-k%C3%A8m-pd/attachments/execution-screenshot-1dae19e33fa12263023e862936832225738b15c8.png>) |  |
| PRODUCT_DETAIL_INFO_Open_02 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-d98c9-02---m%E1%BB%9F-ph%E1%BA%A7n-m%C3%B4-t%E1%BA%A3-s%E1%BA%A3n-ph%E1%BA%A9m-pd/attachments/execution-screenshot-148f53fec7398d883480248e5f0f4569543b4fa8.png>) |  |
| PRODUCT_DETAIL_SPECS_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-18c22--hi%E1%BB%83n-th%E1%BB%8B-c%C3%A1c-h%C3%A0ng-th%C3%B4ng-s%E1%BB%91-pd/attachments/execution-screenshot-585218c0f8bfbedf9993dd660b91765030db48e5.png>) |  |
| PRODUCT_DETAIL_SPECS_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-0d1da----m%E1%BB%9F-b%E1%BA%A3ng-th%C3%B4ng-s%E1%BB%91-m%E1%BB%9F-r%E1%BB%99ng-pd/attachments/execution-screenshot-56a1c88bac593376d92d88994d20f14021394a62.png>) |  |
| PRODUCT_DETAIL_SPECS_Switch_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-ab39c-h-01---chuy%E1%BB%83n-nh%C3%B3m-M%C3%A0n-h%C3%ACnh-pd/attachments/execution-screenshot-b51a2cb7a39bc5fa45de9f1bf8c9b2212c3169db.png>) |  |
| PRODUCT_DETAIL_ACTION_Add_01 | skipped | Không có ảnh do chưa thực thi |  |
| PRODUCT_DETAIL_ACTION_Buy_01 | skipped | Không có ảnh do chưa thực thi |  |
| PRODUCT_DETAIL_COLOR_Switch_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-910d0-witch-01---%C4%91%E1%BB%95i-gi%E1%BB%AFa-hai-m%C3%A0u-pd/attachments/execution-screenshot-8b6ce65bd9b98b8b0a61521b1ae38d03987d44d2.png>) |  |
| PRODUCT_DETAIL_ERROR_Open_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-36dc3-Open-01---URL-kh%C3%B4ng-t%E1%BB%93n-t%E1%BA%A1i-pd/attachments/execution-screenshot-4e8ed69827001e2d8c86b552c6e829b9ae29fa1b.png>) |  |
| PRODUCT_DETAIL_ERROR_Security_01 | skipped | Không có ảnh do chưa thực thi |  |
| PRODUCT_DETAIL_COMPAT_Reload_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-a16fb--t%E1%BA%A3i-l%E1%BA%A1i-v%E1%BA%ABn-gi%E1%BB%AF-m%C3%A0u-v%C3%A0-URL-pd/attachments/execution-screenshot-d42e8bf8974c7d8da0e433caeb0efaedb120c5e9.png>) |  |
| PRODUCT_DETAIL_COMPAT_Navigate_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-28cb4-igate-01---Back-r%E1%BB%93i-Forward-pd/attachments/execution-screenshot-09ec7ced73ac99e434093b0df8b64f65f1256dab.png>) |  |
| PRODUCT_DETAIL_COMPAT_View_01 | passed | [Ảnh 1](<Envidence%20-%20Group15/asm8-20261105222818-34028/artifacts/quangthong-22130275_TrinhQ-03795-hi%E1%BB%83n-th%E1%BB%8B-%E1%BB%9F-viewport-390x844-pd/attachments/execution-screenshot-fc953fa9be3403164630ef391b2f4dafbd3c517c.png>) |  |

## Đánh giá và bước tiếp theo

Các lỗi nếu có là kết quả thật của runner, cần phân tích trace/DOM riêng trước khi quy thành lỗi sản phẩm. Không tự đổi Expected hoặc dùng kết quả thủ công thay cho automation.

Commit tiếng Việt đã tạo trước lượt chạy. Chưa push. Kết quả và minh chứng lượt mới được lưu bằng commit riêng sau commit source; xem Git log để đối chiếu.

## Đối chiếu chạy lại CP/RV

Hai lượt đầy đủ cho CP/RV (`asm8-20261105221047-29496` và `asm8-20261105222818-34028`) đều 25 CP Passed, 14 RV Passed/15 Skipped. SHA-256 của spec CP/RV, fixture và config giữa hai lượt trùng nhau. Đây là bằng chứng lặp lại trong hai lượt, chưa đảm bảo hết flaky ở mọi điều kiện mạng.

[Ảnh tổng quan báo cáo gốc](<Envidence%20-%20Group15/asm8-20261105222818-34028/report-overview.png>). Giao diện All hiển thị 64, Skipped 18; runner khai báo tổng 82. Không sửa bộ đếm trong ảnh.
