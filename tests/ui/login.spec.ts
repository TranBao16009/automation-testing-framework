import { expect, test } from "../../fixtures/page-fixture";
import { ENV } from "../../config/env";

test("TC_Login_01: Verify that user can login successfully with valid account", async ({
  homePage,
  loginPage,
}) => {
  // Issue 3: dùng loginPage fixture thay vì new LoginPage(page) thủ công
  await homePage.goto("/");

  await homePage.openLoginModal();
  await loginPage.enterAccountInput(ENV.TEST_ACCOUNT);
  await loginPage.enterPasswordInput(ENV.TEST_PASSWORD);
  await loginPage.clickLoginButton();

  await expect(homePage.getPage().locator('a[href="/thongtincanhan"]')).toBeVisible();
});