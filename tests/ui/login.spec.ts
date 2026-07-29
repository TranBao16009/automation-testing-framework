import { expect, test } from "../../fixtures/page-fixture";
import { LoginPage } from "../../page/LoginPage";

test("TC_Login_01: Verify that user can login successfully with valid account", async ({
  homePage,
  page,
}) => {
  const account = "khoakhoakhoa";
  const password = "1980534Az!";

  // The demo site can keep non-essential resources loading.  BasePage.goto
  // waits for DOMContentLoaded, so the test can interact with the application
  // without waiting for every asset to finish downloading.
  await homePage.goto("/");

  const loginPage = new LoginPage(page);

  await homePage.getTopBarComponent().navigateToLoginPage();

  await loginPage.enterAccountInput(account);

  await loginPage.enterPasswordInput(password);

  await loginPage.clickLoginButton();

  await expect(page.locator('a[href="/thongtincanhan"]')).toBeVisible();
});
