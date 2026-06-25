//callback function: hàm được truyền vào trong hàm khác như 1 tham số
// test("verify register function", async ({ page }) => {
//   // thực logic các bước đăng ký tài khoản
//   //bước 1: tới trang https://demo1.cybersoft.edu.vn
//   await page.goto("https://demo1.cybersoft.edu.vn");

import { expect, test } from "../../fixtures/page-fixture";

//   //bước 2: click vào "đăng ký"
//   const registerLink = page.getByRole("link", { name: "Đăng Ký" });
//   //cách 2: sử dụng xpath
//   //   const registerLink = page.locator("//a[@href='/sign-up']");
//   await registerLink.click();

//   const account = crypto.randomUUID();
//   const password = "testing15_playwright";
//   const fullname = "Testing playwright";
//   const email = `${account}@gmail.com`;

//   //bước 3: nhập account name
//   const accountInput = page.getByRole("textbox", { name: "Tài Khoản" });
//   await accountInput.fill(account);

//   //bước 4: nhập password
//   const passwordInput = page.getByRole("textbox", {
//     name: "Mật Khẩu",
//     exact: true,
//   });
//   await passwordInput.fill(password);

//   //bước 5: nhập re-password
//   const rePasswordInput = page.getByRole("textbox", {
//     name: "Nhập lại mật khẩu",
//   });
//   await rePasswordInput.fill(password);

//   //bước 6: nhập fullname
//   const fullnameInput = page.getByRole("textbox", { name: "Họ Tên" });
//   await fullnameInput.fill(fullname);

//   //bước 7: nhập email
//   const emailInput = page.getByRole("textbox", { name: "Email" });
//   await emailInput.fill(email);

//   //bước 8: click vào "đăng ký"
//   await page.getByRole("button", { name: "Đăng ký" }).click();

//   //bước 9: verify point
//   const successLbl = page.getByRole("heading", { name: "Đăng ký thành công" });
//   //assertion: mong đợi successLbl hiển thị trên UI
//   await expect(successLbl).toBeVisible();
// });

test("Verify register function with POM(Page Object Model)", async ({
  page,
  homePage,
  registerPage,
}) => {
  const account = crypto.randomUUID();
  const password = "testing15_playwright";
  const fullname = "Testing playwright";
  const email = `${account}@gmail.com`;

  await page.goto("/");

  await homePage.getTopBarComponent().navigateToRegisterPage();

  await registerPage.enterAccountInput(account);

  await registerPage.enterPasswordInput(password);

  await registerPage.enterRePasswordInput(password);

  await registerPage.enterFullnameInput(fullname);

  await registerPage.enterEmailInput(email);

  await registerPage.clickRegisterButton();

  const successLbl = page.getByRole("heading", { name: "Đăng ký thành công" });
  await expect(successLbl).toBeVisible();
});
