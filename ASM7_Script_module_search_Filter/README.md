# ASM7 - CellphoneS Search & Filter Automation

Dự án chuyển các thao tác từ file Ghost Inspector JSON sang Playwright JavaScript.

## Phạm vi test

- 12 test Search: TC_Search_01 đến TC_Search_11 và TC_Search_18.
- 12 file test Filter: TC_Filter_12 đến TC_Filter_17, TC_Filter_19, hai biến thể TC_Filter_20, TC_Filter_21 đến TC_Filter_23.
- Tổng cộng: **24 luồng test được xuất**. Hai file cùng mang mã `TC_Filter_20` không giống nhau về các bước thao tác, vì vậy cả hai được giữ lại và đặt tên `TC_Filter_20A` và `TC_Filter_20B`, không xóa nhầm một luồng.

## 1. Cài đặt

Cần cài Node.js bản LTS. Mở terminal tại thư mục dự án:

```bash
npm install
npx playwright install chromium
```

## 2. Cấu hình tài khoản test

Các file Ghost Inspector gốc có chứa thông tin đăng nhập. Thông tin đó đã được loại khỏi mã nguồn. Tạo file `.env` từ mẫu:

```bash
cp .env.example .env
```

Trên Windows PowerShell có thể dùng:

```powershell
Copy-Item .env.example .env
```

Mở `.env` và điền số điện thoại/mật khẩu của **tài khoản kiểm thử được phép sử dụng**. Không dùng tài khoản cá nhân nếu không cần thiết; không gửi file `.env` cho người khác và không commit file này lên GitHub.

## 3. Chạy test

Chạy toàn bộ Search và Filter:

```bash
npm test
```

Chạy có mở trình duyệt:

```bash
npm run test:headed
```

Chỉ chạy Search:

```bash
npm run test:search
```

Chỉ chạy Filter:

```bash
npm run test:filter
```

Mở báo cáo HTML:

```bash
npm run report
```

## 4. Cấu trúc

```text
ASM7_CellphoneS/
├── tests/
│   ├── data/testcases.json       # Dữ liệu chuyển từ Ghost Inspector
│   ├── support/ghost-runner.js   # Bộ thực thi click/fill/Enter
│   ├── search.spec.js            # Các test Search
│   └── filter.spec.js            # Các test Filter
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## 5. Lưu ý về expected result

Các JSON Ghost Inspector được cung cấp mô tả selector và thao tác (`click`, `assign`, `keypress`), nhưng không chứa expected-result/assertion đầy đủ cho mọi test. Vì vậy bản chuyển đổi hiện kiểm tra selector có thể thao tác, trang vẫn hiển thị và URL vẫn thuộc CellphoneS. Đây là kiểm tra kỹ thuật cơ bản, **chưa thay thế assertion nghiệp vụ** như: kết quả tìm kiếm phải chứa từ khóa, bộ lọc phải hiện đúng hãng/giá, hoặc thông báo rỗng phải xuất hiện.

Trước khi nộp, đối chiếu từng expected result trong bảng test case gốc/Excel và bổ sung assertion tương ứng. Website có thể thay đổi giao diện/selector nên cần chạy thử thực tế và cập nhật selector khi cần.
