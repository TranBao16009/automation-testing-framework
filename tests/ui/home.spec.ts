import { test, expect } from "../../fixtures/page-fixture.ts";

test.describe("HomePage", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto("https://demo2.cybersoft.edu.vn/");
    await homePage.assertHomePageLoaded();
  });

  test("hiển thị banner chào mừng khi vào trang chủ", async ({ homePage }) => {
    await homePage.assertBannerVisible();
  });

  test("mở modal đăng nhập khi click nút Đăng nhập", async ({ homePage }) => {
    await homePage.openLoginModal();
    await expect(homePage.loginFormSubmitButton).toBeVisible();
  });

  test("mở menu danh mục hiển thị đầy đủ danh mục", async ({ homePage }) => {
    await homePage.openCategoryMenu();
    await homePage.assertCategorySectionVisible();
  });

  test("hiển thị footer thông tin liên hệ", async ({ homePage }) => {
    await homePage.assertFooterVisible();
  });
 
  test("click vào menu 'Khóa học' điều hướng đúng trang", async ({ homePage }) => {
  await homePage.goToCourseListPage();
  await expect(homePage.page).not.toHaveURL("https://demo2.cybersoft.edu.vn/");
});

test("click vào 1 khóa học cụ thể mở đúng trang chi tiết", async ({ homePage }) => {
  await homePage.clickFirstCourse();
  await expect(homePage.page).toHaveURL(/chitiet/i);
});
});
