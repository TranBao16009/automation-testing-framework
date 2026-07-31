import { expect, test } from "../../fixtures/page-fixture";

test("Verify register function with POM(Page Object Model)", async ({
  homePage,
  registerPage,
}) => {
  await homePage.goto("/");

  // Issue 3: dùng TopBarComponent thay vì raw locator trực tiếp trong test
  await homePage.getTopBarComponent().navigateToLoginPage();
  await homePage.goToSignUp();

  const account = crypto.randomUUID().replace(/-/g, "").slice(0, 10);
  const password = `Pw!${crypto.randomUUID().slice(0, 12)}`;
  const fullname = "khoatieuhai";
  const email = `${account}@gmail.com`;

  await registerPage.register(
    account,
    password,
    email,
    "0939123412",
    fullname,
  );

  await expect(
    homePage.getPage().getByRole("dialog").filter({ hasText: "Đăng kí thành công" }),
  ).toBeVisible();
});
