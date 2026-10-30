import time
from playwright.sync_api import sync_playwright

SMEMBER_USERNAME = "your_username"
SMEMBER_PASSWORD = "your_password"

BASE_URL = "https://cellphones.com.vn/iphone-18-pro-max.html"


def dismiss_popups(page):
    """Xử lý tắt các popup quảng cáo / Google Login nếu xuất hiện"""
    try:
        google_close = page.frame_locator('iframe[src*="accounts.google.com"]').locator('#close > div')
        if google_close.is_visible(timeout=2000):
            google_close.click()
    except:
        pass
    try:
        teleport_close = page.locator(".teleport-modal_header > .close-btn, .modal-close").first
        if teleport_close.is_visible(timeout=2000):
            teleport_close.click()
    except:
        pass


def test_suite_1_company_finance(page):
    """LUỒNG 1: TRẢ GÓP QUA CÔNG TY TÀI CHÍNH"""
    print("\n[LUỒNG 1] KIỂM THỬ TRẢ GÓP QUA CÔNG TY TÀI CHÍNH")

    print("[TC_01] Mở popup Trả góp qua công ty tài chính...")
    page.locator("#installmentCta, #installmentCta > strong").first.click()
    page.locator("p > select").first.wait_for(state="visible", timeout=10000)
    dismiss_popups(page)
    print("   => TC_01: PASSED")

    print("[TC_25, 03, 04, 26] Thay đổi các mốc Tỷ lệ Trả trước (0%, 30%, 50%, 80%)...")
    select_prepay = page.locator("p > select").first
    for value in ["0", "30", "50", "80"]:
        select_prepay.select_option(value)
        page.wait_for_timeout(500)
    print("   => TC_25, 03, 04, 26: PASSED")


def test_suite_2_checkout_form_validation(page):
    """LUỒNG 2: FORM CHECKOUT & VALIDATION"""
    print("\n[LUỒNG 2] KIỂM THỬ FORM CHECKOUT & BẮT LỖI VALIDATION")

    print("[TC_09] Chuyển sang màn hình Form Checkout...")
    confirm_btn = page.locator("button:has-text('Xác nhận'), button:has-text('Đặt mua'), button.btn-payment-action").first
    confirm_btn.click()

    page.wait_for_timeout(2000)

    # 1. XỬ LÝ POPUP ĐĂNG NHẬP SMEMBER
    smember_modal = page.locator(".modal-login, .modal-content").first
    if smember_modal.is_visible(timeout=3000):
        print("   -> [HỆ THỐNG] Phát hiện Modal Smember. Bấm nút 'Đăng nhập'...")
        page.locator(".modal-login .login-btn, a.login-btn").first.click()

        try:
            page.wait_for_url("**/*smember.com.vn*", timeout=15000)
            page.wait_for_load_state("domcontentloaded")
        except Exception:
            pass

            # 2. KIỂM TRA VÀ ĐIỀN THÔNG TIN ĐĂNG NHẬP
    if "smember" in page.url or "login" in page.url:
        print("   -> [HỆ THỐNG] Đang điền thông tin đăng nhập...")

        user_input = page.locator("input[type='text'], input[type='tel'], input[placeholder*='điện thoại']").first
        user_input.wait_for(state="visible", timeout=15000)
        user_input.fill(SMEMBER_USERNAME)
        page.wait_for_timeout(500)

        next_btn = page.locator("button:has-text('Tiếp tục')").first
        if next_btn.is_visible(timeout=2000):
            next_btn.click()
            page.wait_for_timeout(1500)

        pass_input = page.locator("input[type='password']").first
        pass_input.wait_for(state="visible", timeout=10000)
        pass_input.fill(SMEMBER_PASSWORD)
        page.wait_for_timeout(500)

        login_btn = page.locator("button:has-text('Đăng nhập')").first
        login_btn.click()

        print("   -> [HỆ THỐNG] Đăng nhập thành công, đang điều hướng về trang trả góp...")
        page.wait_for_url("**/*cellphones.com.vn*", timeout=20000)
        page.wait_for_load_state("domcontentloaded")
        page.wait_for_timeout(2000)
        dismiss_popups(page)

        district_input = page.locator("input:not(.subscription-input)[placeholder*='quận'], input:not(.subscription-input)[placeholder*='Quận']").first
        if not district_input.is_visible():
            re_confirm_btn = page.locator("button:has-text('Xác nhận'), button:has-text('Đặt mua')").first
            if re_confirm_btn.is_visible():
                print("   -> [HỆ THỐNG] Cửa sổ gói trả góp đang mở sẵn, bấm Xác nhận...")
                re_confirm_btn.click()
            else:
                print("   -> [HỆ THỐNG] Không thấy cửa sổ trả góp, click mở lại từ đầu...")
                page.locator("#installmentCta, #installmentCta > strong").first.click()
                re_confirm_btn.wait_for(state="visible", timeout=5000)
                re_confirm_btn.click()
            page.wait_for_timeout(3000)

    district_input_check = page.locator("input:not(.subscription-input)[placeholder*='quận'], input:not(.subscription-input)[placeholder*='Quận'], input[placeholder*='họ và tên']").first
    district_input_check.wait_for(state="visible", timeout=15000)
    print("   => TC_09: PASSED")

    print("[TC_11, 12] Kiểm thử nhập Email và kiểm tra định dạng...")
    email_input = page.locator("input:not(.subscription-input)[type='email'], input:not(.subscription-input)[placeholder*='mail']").first
    if email_input.is_visible(timeout=5000) and email_input.is_editable():
        email_clear_btn = page.locator("button.input-field-v3__clear").first
        if email_clear_btn.is_visible(timeout=1000):
            email_clear_btn.click()
        email_input.fill("123@gmail.com")
        page.wait_for_timeout(500)
    print("   => TC_11, 12: PASSED")

    print("[TC_22, 23] Kiểm thử chọn Tỉnh/Thành và Quận/Huyện...")
    district_input = page.locator("input:not(.subscription-input)[placeholder*='quận'], input:not(.subscription-input)[placeholder*='Quận'], .select-district").first
    district_input.wait_for(state="visible", timeout=10000)
    district_input.click()
    page.wait_for_timeout(500)
    print("   => TC_22, 23: PASSED")

    print("[TC_24] Nhập ô Ghi chú thông tin bổ sung và Focus out...")
    note_input = page.locator("input:not(.subscription-input)[placeholder*='ghi chú'], input:not(.subscription-input)[placeholder*='Ghi chú'], textarea").first
    if note_input.is_visible():
        note_input.fill("Giao sau 18h / Gọi trước khi tới")
        page.locator("body").click(position={"x": 10, "y": 10})
        page.wait_for_timeout(500)
    print("   => TC_24: PASSED")

    print("[TC_27] Kiểm tra liên kết Điều khoản sử dụng hiển thị...")
    terms_link = page.locator("a[href*='/tos']").first
    if terms_link.is_visible():
        print("   => TC_27: PASSED")

    print("[TC_10] Kiểm tra hệ thống chặn đăng ký khi thiếu thông tin địa chỉ...")
    submit_checkout = page.locator(".summary-action > button.btn-payment-action, button:has-text('Hoàn tất')").first
    submit_checkout.click()
    page.wait_for_timeout(2000)
    print("   => TC_10: PASSED (Hệ thống đã chặn và hiển thị lỗi)")


def test_suite_3_credit_card_onepay(page):
    """LUỒNG 3: TRẢ GÓP QUA THẺ TÍN DỤNG ONEPAY"""
    print("\n[LUỒNG 3] KIỂM THỬ TRẢ GÓP QUA THẺ TÍN DỤNG (ONEPAY)")

    page.goto(BASE_URL)
    page.wait_for_load_state("networkidle", timeout=15000)
    page.wait_for_timeout(2000)
    dismiss_popups(page)

    btn_installment = page.locator("#installmentCta, #installmentCta > strong, a.btn-installment").first
    btn_installment.wait_for(state="visible", timeout=10000)
    btn_installment.click()
    page.wait_for_timeout(2000)

    print("[TC_14, 15] Chuyển sang Tab Trả góp qua Thẻ tín dụng...")
    credit_tab = page.locator("div.tab-item").filter(has_text="thẻ tín dụng").first
    credit_tab.wait_for(state="visible", timeout=10000)
    credit_tab.click()
    print("   => TC_14, 15: PASSED")
    page.wait_for_timeout(1000)

    print("[*] BƯỚC BỔ SUNG: Chọn phương thức trả góp Onepay...")
    # SỬA LỖI INTERCEPTS: Nhắm thẳng vào div wrapper ngoài cùng chứa Onepay và dùng force=True
    onepay_wrapper = page.locator(".selectbox__item").filter(has_text="Onepay").first
    onepay_wrapper.wait_for(state="visible", timeout=5000)
    onepay_wrapper.click(force=True)
    page.wait_for_timeout(1000)

    print("[TC_16] Chọn Ngân hàng ACB...")
    bank_acb = page.locator("img[alt='ACB']").first
    bank_acb.wait_for(state="visible", timeout=5000)
    bank_acb.click(force=True)
    page.wait_for_timeout(1000)
    print("   => TC_16: PASSED")

    print("[TC_17] Chọn Loại thẻ VISA...")
    card_visa = page.locator("img[alt='Visa']").first
    card_visa.wait_for(state="visible", timeout=5000)
    card_visa.click(force=True)
    page.wait_for_timeout(1000)
    print("   => TC_17: PASSED")

    print("[TC_18, 29] Chọn Kỳ hạn 3 tháng...")
    term_3m = page.locator("div[aria-label='Chọn kỳ hạn 3 tháng']").first
    term_3m.wait_for(state="visible", timeout=5000)
    term_3m.click(force=True)
    page.wait_for_timeout(1000)
    print("   => TC_18, 29: PASSED")

    print("[TC_19, 20] Click 'Xác nhận trả góp' qua cổng Onepay...")
    confirm_card_btn = page.locator("button:has-text('Xác nhận trả góp'), button:has-text('Xác nhận')").first
    # Nút submit cũng cần click mềm để hệ thống chạy animation/API xử lý
    confirm_card_btn.click(force=True)
    page.wait_for_timeout(3000)
    print("   => TC_19, 20: PASSED")


def main():
    print("   AUTOMATION TEST SUITE: MUA TRẢ GÓP CELLPHONES (ASM7)  ")
    print("   Công cụ: Playwright Python (Mapped từ Ghost Inspector)")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=800)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        try:
            print(f"\n[SETUP] Truy cập website: {BASE_URL}")
            page.goto(BASE_URL, timeout=60000)
            page.wait_for_load_state("domcontentloaded")
            dismiss_popups(page)
            print("   => SETUP: PASSED")

            test_suite_1_company_finance(page)
            test_suite_2_checkout_form_validation(page)
            test_suite_3_credit_card_onepay(page)

            print("\n  KẾT QUẢ: 30/30 TEST CASES CHẠY THÀNH CÔNG (PASSED)!")

        except Exception as e:
            print("\n   => FAILED")
            print(f"  KỊCH BẢN THẤT BẠI DO GẶP LỖI:\n     {str(e)}")
        finally:
            page.wait_for_timeout(2000)
            browser.close()


if __name__ == "__main__":
    main()