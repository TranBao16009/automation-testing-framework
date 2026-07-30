import { Page, Locator, expect } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class HomePage extends CommonPage {
  readonly loginButton: Locator;
  readonly signUpLink: Locator;
  readonly searchInput: Locator;

  readonly categoryToggleIcon: Locator;
  readonly categorySection: Locator;

  readonly welcomeBanner: Locator;
  readonly bannerImage: Locator;

  readonly footerSection: Locator;

  readonly loginFormSubmitButton: Locator;
  readonly courseMenuLink: Locator;
  readonly firstCourseCard: Locator;

  constructor(page: Page) {
    super(page);

    this.loginButton = page.getByRole("button", { name: "Đăng nhập" });
    this.signUpLink = page.locator("#signUp");
    this.searchInput = page.getByRole("textbox", { name: "Tìm kiếm" });

    this.categoryToggleIcon = page
      .getByRole("listitem")
      .filter({ hasText: "Danh mụcLập trình BackendThiế" })
      .locator("i");
    this.categorySection = page
      .locator("section")
      .filter({ hasText: "Danh mụcLập trình BackendThiế" });

    this.welcomeBanner = page
      .locator("div")
      .filter({ hasText: "Chào mừngđến với môi trường" })
      .nth(3);
    this.bannerImage = page.locator("img").nth(3);

    this.footerSection = page
      .locator("div")
      .filter({ hasText: "V learning 1800-123-4567devit" })
      .nth(1);

    this.loginFormSubmitButton = page
      .locator("form")
      .filter({ hasText: "Đăng nhậphoặc sử dụng tài kho" })
      .getByRole("button");

    this.courseMenuLink = page.getByRole("link", { name: "Khóa học", exact: true });
    this.firstCourseCard = page.getByRole("link", { name: "Khóa học mới 2026 Lập trình" });
  
  }

  async assertHomePageLoaded() {
    await expect(this.welcomeBanner).toBeVisible();
  }

  async openLoginModal() {
    await this.click(this.loginButton);
  }

  async goToSignUp() {
    await this.click(this.signUpLink);
  }

  async submitLoginForm() {
    await this.click(this.loginFormSubmitButton);
  }

  async searchCourse(keyword: string) {
    await this.inputText(this.searchInput, keyword);
    await this.page.keyboard.press("Enter");
  }

  async openCategoryMenu() {
    await this.click(this.categoryToggleIcon);
  }

  async assertCategorySectionVisible() {
    await expect(this.categorySection).toBeVisible();
  }

  async assertBannerVisible() {
    await expect(this.bannerImage).toBeVisible();
  }

  async assertFooterVisible() {
    await expect(this.footerSection).toBeVisible();
  }

  async goToCourseListPage() {
    await this.click(this.courseMenuLink);
  }


async clickFirstCourse() {
  await this.firstCourseCard.scrollIntoViewIfNeeded();
  await this.click(this.firstCourseCard);
}
}
