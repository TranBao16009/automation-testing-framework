import { expect, test } from "../../fixtures/page-fixture";

test("Verify register function with POM(Page Object Model)", async ({
  page,
  homePage,
  registerPage,
}) => {
  await homePage.goto("/");

  await page.getByRole("link", { name: "Đăng nhập" }).click();
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
    page.getByRole("dialog").filter({ hasText: "Đăng kí thành công" }),
  ).toBeVisible();
});
