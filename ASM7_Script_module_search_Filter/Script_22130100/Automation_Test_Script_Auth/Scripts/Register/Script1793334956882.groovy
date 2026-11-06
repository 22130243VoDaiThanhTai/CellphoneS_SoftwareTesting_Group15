import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import org.openqa.selenium.Keys
import org.openqa.selenium.WebElement
import com.kms.katalon.core.webui.common.WebUiCommonHelper

// Hàm tiện ích tạo TestObject nhanh bằng XPath
TestObject makeTo(String xpath) {
    TestObject to = new TestObject()
    to.addProperty('xpath', ConditionType.EQUALS, xpath)
    return to
}

// 1. Mở trình duyệt và vào Google (tương ứng WebUI.openBrowser('https://www.google.com/'))
WebUI.openBrowser('https://www.google.com/')
WebUI.maximizeWindow()
WebUI.waitForPageLoad(10)

// 2. Chuyển hướng tới trang Đăng nhập Smember (tương ứng selenium.open("https://smember.com.vn/login..."))
WebUI.navigateToUrl('https://smember.com.vn/login?action=login&client_id=cps&redirect_uri=https%3A%2F%2Fcellphones.com.vn%2F&response_type=authorization_code&state=qnG5PLcf4GjVeDiF72Ihm7hlJo0rcMjWZEtokXwv&consent=%7B%22consent_analytics%22%3Atrue%2C%22consent_ads%22%3Atrue%2C%22consent_functionality%22%3Atrue%7D')
WebUI.waitForPageLoad(15)

// 3. Click nút/link "Đăng ký ngay" (tương ứng selenium.click("link=Đăng ký ngay"))
TestObject linkRegisterNow = makeTo("//a[contains(text(), 'Đăng ký ngay')] | //*[contains(text(), 'Đăng ký ngay')]")
WebUI.waitForElementClickable(linkRegisterNow, 10)
WebUI.click(linkRegisterNow)

// 4. Đảm bảo đã chuyển đến trang Đăng ký (tương ứng selenium.open("https://smember.com.vn/register..."))
// Nếu click không tự chuyển URL, navigate trực tiếp vào URL đăng ký:
if (!WebUI.getUrl().contains('register')) {
    WebUI.navigateToUrl('https://smember.com.vn/register?pre_uri=%2Flogin')
    WebUI.waitForPageLoad(15)
}

// ================= DỮ LIỆU ĐIỀN FORM =================
String hoTen = 'Huy Le'
String sdt = '0865727027'
String email = 'huymap20042004@gmail.com'
String matKhau = 'Lqh@280604'
String ngaySinh = '28062004'
// ====================================================

// 5. Điền Họ và Tên
TestObject inputName = makeTo("//input[@name='name' or @id='name' or contains(@placeholder, 'Họ và tên')]")
WebUI.waitForElementVisible(inputName, 10)
WebUI.setText(inputName, hoTen)

// 6. Điền Số điện thoại
TestObject inputPhone = makeTo("//input[@name='phone' or @type='tel' or contains(@placeholder, 'số điện thoại')]")
WebUI.setText(inputPhone, sdt)

// 7. Điền Email
TestObject inputEmail = makeTo("//input[@name='email' or @type='email' or contains(@placeholder, 'Email')]")
if (WebUI.verifyElementPresent(inputEmail, 3, FailureHandling.OPTIONAL)) {
    WebUI.setText(inputEmail, email)
}

// 8. Điền Ngày sinh
TestObject inputDob = makeTo("//input[@name='birthday' or @name='dob' or contains(@placeholder, 'dd/mm/yyyy') or contains(@placeholder, 'Ngày sinh')]")
if (WebUI.verifyElementPresent(inputDob, 5, FailureHandling.OPTIONAL)) {
    WebElement el = WebUiCommonHelper.findWebElement(inputDob, 10)
    
    String jsScript = '''
        var el = arguments[0];
        el.focus();
        // Gán trực tiếp qua prototype để Vue/React nhận state
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(el, '28/06/2004');
        
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.blur();
    '''
    WebUI.executeJavaScript(jsScript, Arrays.asList(el))
}


// 9. Chọn Giới tính (Nam / Nữ)
TestObject radioGenderMale = makeTo("//input[@type='radio' and (@value='male' or @value='1')] | //label[contains(text(), 'Nam')]")
if (WebUI.verifyElementPresent(radioGenderMale, 2, FailureHandling.OPTIONAL)) {
    WebUI.click(radioGenderMale)
}

// 10. Điền Mật khẩu
TestObject inputPassword = makeTo("//input[@name='password' or @placeholder='Nhập mật khẩu' or (@type='password' and not(contains(@placeholder, 'lại')))]")
WebUI.setText(inputPassword, matKhau)

// 11. Điền Xác nhận lại mật khẩu
TestObject inputConfirmPassword = makeTo("//input[@name='confirmPassword']")
WebUI.waitForElementVisible(inputConfirmPassword, 10)
WebUI.click(inputConfirmPassword)
WebUI.setText(inputConfirmPassword, matKhau)

// 13. Tích chọn đồng ý điều khoản
TestObject chkTerms = makeTo("//input[@type='checkbox' or contains(@class, 'checkbox')]")
if (WebUI.verifyElementPresent(chkTerms, 2, FailureHandling.OPTIONAL)) {
    WebUI.check(chkTerms)
}

// 14. Bấm nút hoàn tất Đăng ký
TestObject btnRegisterSubmit = makeTo("//button[@type='submit' or contains(text(), 'Đăng ký') or contains(text(), 'Hoàn tất')]")
WebUI.click(btnRegisterSubmit)

// 15. Dừng chờ nhập OTP hoặc giải Captcha (nếu có gửi mã về điện thoại)
WebUI.delay(60)

// 16. Đóng trình duyệt
WebUI.closeBrowser()