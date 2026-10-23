# TÀI LIỆU KẾ HOẠCH KIỂM THỬ (TEST PLAN)
**Dự án:** Kiểm thử Chức năng Mua Trả góp (Payment Installment) — Website CellphoneS  
**Công cụ:** Microsoft Excel (Template `AB-SD`), Ghost Inspector, Git / GitHub  
**Tác giả:** GroupXX  

---

## I. TỔNG QUAN & PHẠM VI KIỂM THỬ (SCOPE)

### 1. Mục tiêu (Objectives)
- Đảm bảo tính chính xác của thuật toán tính toán số tiền trả trước, tiền góp hàng tháng, lãi suất và chênh lệch trên các gói trả góp.
- Rà soát toàn bộ các quy tắc bắt lỗi (Validation) trên Form Checkout, đảm bảo trải nghiệm người dùng mượt mà và không phát sinh lỗi dữ liệu.
- Xây dựng bộ kịch bản kiểm thử tự động (Automation Test) chạy trên **Ghost Inspector** hoạt động ổn định, an toàn trên môi trường Production (không tạo đơn hàng rác).

### 2. Phạm vi Kiểm thử (In-Scope)
- **Luồng Trả góp qua Công ty Tài chính (Home Credit, Shinhan Finance...):** Chọn gói, chọn kỳ hạn, tính toán chi phí, form thông tin khách hàng, vị trí nhận hàng tại cửa hàng.
- **Luồng Trả góp qua Thẻ Tín dụng (Onepay):** Chọn ngân hàng, chọn cổng/loại thẻ (VISA/Mastercard), chọn kỳ hạn, form thông tin nhận hàng và chuyển hướng cổng thanh toán.
- **Tương tác UI & Liên kết:** Đổi phiên bản sản phẩm (PDP), chọn Tỉnh/Thành - Quận/Huyện, ô Ghi chú (Optional), liên kết "Điều khoản sử dụng".

### 3. Ngoài Phạm vi Kiểm thử (Out-of-Scope)
- Thao tác thanh toán trực tiếp / trừ tiền thật trên cổng Onepay hoặc hệ thống ngân hàng.
- Môi trường Backend Database / API nội bộ của CellphoneS.

---

## II. CHIẾN LƯỢC KIỂM THỬ (TEST STRATEGY)

### 1. Phương pháp Kiểm thử
- **Hộp đen (Black-box Testing):** Kiểm thử dựa trên Yêu cầu phần mềm (SRS) và giao diện người dùng (UI/UX).
- **Kiểm thử Thủ công (Manual Testing):** Thực thi 30 Test Cases trên file Excel `GroupXX_MaSV_HoTen.xlsx` để đánh giá giao diện thực tế.
- **Kiểm thử Tự động (Automation Testing):** Thiết lập suite kiểm thử trên **Ghost Inspector** ở chế độ Guest/Incognito.

### 2. Nguyên tắc An toàn Automation (Non-Intrusive Testing Rules)
- **Xác thực trạng thái (State Assertion):** Dùng lệnh `Assert element is visible` / `Assert element is enabled` ở bước kiểm tra Form Checkout.
- **Tuyệt đối KHÔNG click nút Đặt hàng / Đăng ký cuối cùng:** Giúp kịch bản tự động kiểm tra đủ 100% logic trên giao diện mà không gửi yêu cầu tạo order thật về hệ thống CellphoneS.

---

## III. KẾ HOẠCH AUTOMATION TEST (GHOST INSPECTOR)

### 1. Checklist Kỹ thuật & Cấu hình Kịch bản
- [x] **Xử lý Popup Quảng cáo / Google Login:** Đặt thuộc tính `Optional (Continue on failure)` cho các bước tắt popup đầu trang.
- [x] **Xóa Dữ liệu Cũ trước khi Nhập (Clear Inputs):** Dùng lệnh `Clear element value` trước khi thực hiện `Type text` đối với các trường Email hoặc Ghi chú để tránh lỗi gõ nối chuỗi ký tự.
- [x] **Thời gian chờ (Delays/Pauses):** Chèn các bước `Pause` (500ms – 1000ms) sau các hành động chọn Dropdown (Tỉnh/Thành, Quận/Huyện) để hệ thống kịp load danh sách Cửa hàng.
- [x] **Kiểm tra Email RFC Format:** Nhập chuỗi không hợp lệ (vd: `test.email.com`) để kiểm tra thông báo lỗi validation; chấp nhận các email đúng cú pháp (vd: `123@gmail.com`).

---

### 2. Sơ đồ Luồng Thực thi Automation (Workflow Diagram)

```text
                       [ Start: Khởi tạo Kịch bản Ghost Inspector ]
                                           │
                                           ▼
                           [ Mở Trang PDP Sản Phẩm CellphoneS ]
                                           │
                                           ▼
                      < Có Popup Google/Quảng Cáo Xuất Hiện? >
                                ├── Có  ──> [ Step Optional: Bấm Tắt Popup ]
                                └── Không ─> [ Bỏ qua & Chạy Tiếp ]
                                           │
                                           ▼
                              [ Click Nút "TRẢ GÓP 0%" ]
                                           │
                                           ▼
                          [ Chọn Công Ty Tài Chính / Ngân Hàng ]
                                           │
                                           ▼
                         [ Assert: So Sánh Số Tiền Trả Mỗi Tháng ]
                                           │
                                           ▼
                         [ Click "ĐẮNG KÝ TRẢ GÓP / XÁC NHẬN" ]
                                           │
                                           ▼
                            [ Chuyển Sang Trang Form Checkout ]
                                           │
                                           ▼
                         [ Thực Hiện Các Kịch Bản Validation ]
                   ┌───────────────────────┼───────────────────────┐
                   ▼                       ▼                       ▼
           [ Bỏ Trống Địa Chỉ ]   [ Clear & Type Email ]   [ Nhập Ô Ghi Chú ]
                   │                       │                       │
                   ▼                       ▼                       ▼
            [ Click Đăng Ký ]      [ Click Đăng Ký ]    [ Focus Out Ô Nhập ]
                   │                       │                       │
                   ▼                       ▼                       ▼
           [ Assert: Kiểm Tra     [ Assert: Kiểm Tra       [ Assert: Dữ Liệu
            Báo Lỗi Vị Trí ]       Lỗi Định Dạng Mail ]     Ghi Chú Đầy Đủ ]
                   └───────────────────────┼───────────────────────┘
                                           │
                                           ▼
                          < An Toàn: KHÔNG Bấm Đặt Hàng Thật >
                                           │
                                           ▼
                     [ Assert Element State: Nút/Form Hiển Thị Đúng ]
                                           │
                                           ▼
                       [ Finish: Xuất Báo Cáo PASSED / FAILED ]
```

---

### 3. Ma trận Danh mục 30 Test Cases (Test Suite Matrix)

| Nhóm Test Case | ID Test Case | Mô tả Chi tiết | Kỹ thuật Assertion (Ghost Inspector) |
| :--- | :--- | :--- | :--- |
| **Popup & Bảng giá** | `TC_01` – `TC_08` | Mở popup, đổi kỳ hạn (3/6/9/12 tháng), so sánh giá góp | `Assert element text` (Số tiền góp/tháng) |
| **Form Trả góp CTC** | `TC_09` – `TC_14` | Bắt lỗi bỏ trống địa chỉ nhận hàng, test validate Email | `Assert element is present` (Báo lỗi đỏ) |
| **Trả góp Thẻ Credit** | `TC_15` – `TC_21` | Chọn ngân hàng, chọn cổng Onepay, bắt lỗi vị trí nhận hàng | `Assert element is visible` (Khung Onepay) |
| **UI & Tương tác** | `TC_22` – `TC_30` | Đổi Tỉnh/Thành reset Quận/Huyện, nhập Ghi chú, click "Điều khoản sử dụng", nút "Thay đổi" gói | `Assert value` / `Assert location URL` |

---

## IV. QUY TRÌNH QUẢN LÝ CODE GIT & NỘP BÀI

### 1. Cấu trúc Repository trên GitHub
```text
GroupXX_Repository/ (Public)
├── GroupXX_TenProject/                <-- Thư mục gộp chung (Nhóm trưởng push)
│   ├── GroupXX_TenProject.xlsx         <-- File gộp tất cả testcase của các thành viên
│   └── TEST_PLAN.md                   <-- Kế hoạch Automation Test chung
│
└── GroupXX_MaSV_HoTen/                <-- Thư mục cá nhân của bạn (Cá nhân push)
    └── GroupXX_MaSV_HoTen.xlsx        <-- File Excel 30 test cases chuẩn AB-SD
```

### 2. Quy trình Push & Merge Git (Git Workflow)
1. Tạo branch cá nhân từ `dev`:  
   `git checkout -b feature/MaSV_HoTen`
2. Commit và push file Excel vào thư mục `GroupXX_MaSV_HoTen`:  
   `git add .`  
   `git commit -m "Add: 30 test cases for Payment Installment feature"`  
   `git push origin feature/MaSV_HoTen`
3. Tạo **Pull Request (PR)** trên GitHub để merge vào branch `dev`.
4. Chụp lại màn hình minh chứng PR / Merge thành công (đặt tên `MaSV_HoTen.png`).

---

## V. CÁC TẬP TIN TRONG FILE NỘP CLASSROOM (`MaSV_HoTen.zip`)

Nén 3 tệp sau thành thư mục `.zip` duy nhất để nộp lên Classroom:

1. **`GroupXX.txt`**: Chứa 1 đường link duy nhất dẫn đến Repository GitHub Public của nhóm.
2. **`MaSV_HoTen.png`**: Ảnh chụp màn hình minh chứng đã push code/merge Pull Request thành công trên Git trước deadline.
3. **`GroupXX_MaSV_HoTen.xlsx`**: File Excel chứa đầy đủ 4 sheet (`Cover`, `Test case List`, `TestDesign`, `Installment`) với 30 test cases đã được cập nhật chuẩn xác theo giao diện thực tế.