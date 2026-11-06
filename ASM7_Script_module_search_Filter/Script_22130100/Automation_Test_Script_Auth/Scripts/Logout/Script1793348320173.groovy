import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

TestObject makeTo(String xpath) {
    TestObject to = new TestObject()
    to.addProperty('xpath', ConditionType.EQUALS, xpath)
    return to
}

// https://smember.com.vn/?company_id=cellphones&_gl=1*1i74569*_gcl_au*MTUzNjc3ODE2LjE3OTI3NDE3NzcuMjU1MDM2NDM2LjE3OTI3NTE1NjQuMTc5Mjc1MTU2My43OTEwODgwOTUuMTc5Mjc1MTU2NC4xNzkyNzUxNTYz*_ga*MTYyMzE1MzUxMS4xNzkyNzQxNzgx*_ga_QLK8WFHNK9*czE3OTMzNjE1MzYkbzckZzEkdDE3OTMzNjE1MzgkajU4JGwwJGgxOTA0MzQ0MzE1
// 1. Chạy kịch bản Login để có phiên hoạt động
WebUI.callTestCase(findTestCase('Test Cases/Login'), [:], com.kms.katalon.core.model.FailureHandling.STOP_ON_FAILURE)

// 2. Nhấn vào khu vực quản lý tài khoản người dùng
TestObject boxUser = makeTo("//div[contains(@class, 'box-member') or contains(@class, 'account-info')] | //a[contains(@href, 'smember')]")
WebUI.waitForElementClickable(boxUser, 10)
WebUI.click(boxUser)
WebUI.delay(2)

// 3. Nhấn nút Đăng xuất
TestObject btnLogout = makeTo("//*[contains(text(), 'Đăng xuất')] | //a[contains(@href, 'logout')]")
WebUI.waitForElementClickable(btnLogout, 10)
WebUI.click(btnLogout)

// 4. Xác nhận đăng xuất nếu có popup xác nhận
//TestObject btnConfirm = makeTo("//button[contains(text(), 'Xác nhận') or contains(text(), 'Đồng ý')]")
//if (WebUI.verifyElementPresent(btnConfirm, 3, com.kms.katalon.core.model.FailureHandling.OPTIONAL)) {
//    WebUI.click(btnConfirm)
//}
TestObject btnConfirmLogout = makeTo("//div[contains(@class, 'modal') or contains(@class, 'dialog') or contains(@class, 'popup')]//button[contains(text(), 'Đăng xuất')] | //button[contains(text(), 'Đăng xuất') and not(contains(text(), 'Ở lại trang'))]")
WebUI.waitForElementClickable(btnConfirmLogout, 5)
WebUI.click(btnConfirmLogout)

// 5. Kiểm tra nút/chữ Đăng nhập xuất hiện lại (đăng xuất thành công)
TestObject checkLoggedOut = makeTo("//*[contains(text(), 'Đăng nhập')]")
WebUI.verifyElementPresent(checkLoggedOut, 10)

WebUI.delay(2)
WebUI.closeBrowser()