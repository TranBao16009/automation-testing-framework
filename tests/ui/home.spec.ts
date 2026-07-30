import { test, expect } from "../../fixtures/page-fixture";
import { ENV } from "../../config/env";

test.describe("HomePage", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto("/");
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
    await expect(homePage.getPage()).not.toHaveURL(new URL("/", ENV.BASE_URL).href);
  });

  test("click vào 1 khóa học cụ thể mở đúng trang chi tiết", async ({ homePage }) => {
    await homePage.clickFirstCourse();
    await expect(homePage.getPage()).toHaveURL(/chitiet/i);
  });
});
