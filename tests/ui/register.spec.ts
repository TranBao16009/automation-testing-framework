//callback function: hàm được truyền vào trong hàm khác như 1 tham số
// test("verify register function", async ({ page }) => {
//   // thực logic các bước đăng ký tài khoản
//   //bước 1: tới trang https://demo2.cybersoft.edu.vn
//   await page.goto("https://demo2.cybersoft.edu.vn");

import { expect, test } from "../../fixtures/page-fixture";

//   //bước 2: click vào "đăng ký"
//   const registerLink = page.getByRole("link", { name: "Đăng Ký" });

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
  //b1: tới trang https://demo2.cybersoft.edu.vn
  await homePage.goto("/");

  //b2: click vào "đăng nhập"

  await page.getByRole("link", { name: "Đăng nhập" }).click();

  //b3: clip vào "đăng ký"

  await page.locator("#signUp").click();

  const registerForm = page.locator("form").filter({
    hasText: "ĐĂNG KÝGP01GP02GP03GP04GP05GP06GP07GP08GP09GP010Đăng ký",
  });

  const account = crypto.randomUUID().replace(/-/g, "").slice(0, 10);
  const password = "1980534Az!";
  const fullname = "khoatieuhai";
  const email = `${account}@gmail.com`;

  //b4: nhập tài khoản
  const accountInput = registerForm.getByRole("textbox", {
    name: "Tài khoản",
  });
  await accountInput.fill(account);
  //b5: nhập họ tên

  await registerForm.getByRole("textbox", { name: "Họ tên" }).fill(fullname);

  //b6: nhập mật khẩu
  const passwordInput = registerForm.getByRole("textbox", {
    name: "Mật khẩu",
    exact: true,
  });

  await passwordInput.fill(password);
  //b7: nhập email
  const emailInput = registerForm.getByRole("textbox", { name: "Email" });
  await emailInput.fill(email);
  //b8: nhập số điện thoại

  const phoneInput = registerForm.getByRole("textbox", {
    name: "Số điện thoại",
  });
  await phoneInput.fill("0939123412");

  //b9: click vào "đăng ký"

  await registerForm.getByRole("button").click();

  //b10: verify point
  await expect(
    page.getByRole("dialog").filter({ hasText: "Đăng kí thành công" }),
  ).toBeVisible();
});
