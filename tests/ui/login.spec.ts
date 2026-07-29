import { expect, test } from "../../fixtures/page-fixture";
import { HomePage } from "../../page/HomePage";
import { LoginPage } from "../../page/LoginPage";

test("TC_Login_01: Verify that user can login successfully with valid account", async ({
  page,
}) => {
  const account = "khoakhoakhoa";
  const password = "1980534Az!";

  await page.goto("https://demo2.cybersoft.edu.vn");
  await page.getByRole("link", { name: "Đăng nhập" }).click();

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  homePage.getTopBarComponent().navigateToLoginPage();

  await loginPage.enterAccountInput(account);

  await loginPage.enterPasswordInput(password);

  await loginPage.clickLoginButton();

  const successLbl = page.getByRole("heading", {
    name: "Đăng nhập thành công",
  });
  await expect(successLbl).toBeVisible();
});
