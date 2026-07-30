import { expect, test } from "../../fixtures/page-fixture";
import { LoginPage } from "../../page/LoginPage";
import { ENV } from "../../config/env";

test("TC_Login_01: Verify that user can login successfully with valid account", async ({
  homePage,
  page,
}) => {
  // BasePage.goto waits for DOMContentLoaded only, so the test can interact
  // with the application without waiting for every asset to finish downloading.
  await homePage.goto("/");

  const loginPage = new LoginPage(page);

  await homePage.getTopBarComponent().navigateToLoginPage();
  await loginPage.enterAccountInput(ENV.TEST_ACCOUNT);
  await loginPage.enterPasswordInput(ENV.TEST_PASSWORD);
  await loginPage.clickLoginButton();

  await expect(page.locator('a[href="/thongtincanhan"]')).toBeVisible();
});