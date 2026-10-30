import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

// Hàm tiện ích tạo TestObject nhanh bằng XPath
TestObject makeTo(String xpath) {
    TestObject to = new TestObject()
    to.addProperty('xpath', ConditionType.EQUALS, xpath)
    return to
}

// 1. Mở trình duyệt và truy cập trang đăng nhập Smember
// WebUI.openBrowser('https://smember.com.vn/login?action=login&client_id=cps&redirect_uri=https%3A%2F%2Fcellphones.com.vn%2F&response_type=authorization_code&state=qnG5PLcf4GjVeDiF72Ihm7hlJo0rcMjWZEtokXwv&consent=%7B%22consent_analytics%22%3Atrue%2C%22consent_ads%22%3Atrue%2C%22consent_functionality%22%3Atrue%7D')
WebUI.openBrowser('')
WebUI.maximizeWindow()
//WebUI.navigateToUrl('https://cellphones.com.vn/')
WebUI.navigateToUrl('https://smember.com.vn/login?action=login&client_id=cps&redirect_uri=https%3A%2F%2Fcellphones.com.vn%2F&response_type=authorization_code&state=qnG5PLcf4GjVeDiF72Ihm7hlJo0rcMjWZEtokXwv&consent=%7B%22consent_analytics%22%3Atrue%2C%22consent_ads%22%3Atrue%2C%22consent_functionality%22%3Atrue%7D')
WebUI.waitForPageLoad(15)

// 2. Nhập số điện thoại/tài khoản và mật khẩu
TestObject inputPhoneOrEmail = makeTo("//input[@type='tel' or @name='username' or @placeholder='Nhập số điện thoại']")
TestObject inputPassword = makeTo("//input[@type='password' or @name='password']")

WebUI.waitForElementVisible(inputPhoneOrEmail, 10)
WebUI.setText(inputPhoneOrEmail, '0865727027') // Thay bằng số điện thoại đăng nhập thực tế
WebUI.setText(inputPassword, 'Lqh@280604')     // Thay bằng mật khẩu thực tế

// 3. Nhấn nút Đăng nhập
TestObject btnLoginSubmit = makeTo("//button[@type='submit' or contains(text(), 'Đăng nhập')]")
WebUI.click(btnLoginSubmit)

// 4. Kiểm tra đăng nhập thành công (chờ xuất hiện thông tin người dùng hoặc cookie)
WebUI.delay(3)

// Giữ trình duyệt mở nếu muốn tiếp tục các bước sau, hoặc đóng:
//WebUI.closeBrowser()