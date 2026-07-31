import { Page, Locator, expect } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class HomePage extends CommonPage {
  readonly signUpLink: Locator;
  readonly searchInput: Locator;

  readonly categoryToggleIcon: Locator;
  readonly categorySection: Locator;

  readonly welcomeBanner: Locator;
  readonly bannerImage: Locator;

  readonly footerSection: Locator;

  readonly courseMenuLink: Locator;
  readonly firstCourseCard: Locator;

  constructor(page: Page) {
    super(page);

    this.signUpLink = page.locator("#signUp");
    this.searchInput = page.getByRole("textbox", { name: "Tìm kiếm" });

    // Issue 4: dùng từ khóa ngắn, ổn định thay vì chuỗi dài bị cắt
    this.categoryToggleIcon = page
      .getByRole("listitem")
      .filter({ hasText: "Danh mục" })
      .locator("i");
    this.categorySection = page
      .locator("section")
      .filter({ hasText: "Danh mục" });

    this.welcomeBanner = page
      .locator("div")
      .filter({ hasText: "Chào mừng" })
      .nth(3);
    this.bannerImage = page.locator("img").nth(3);

    this.footerSection = page
      .locator("div")
      .filter({ hasText: "V learning" })
      .nth(1);

    this.courseMenuLink = page.getByRole("link", { name: "Khóa học", exact: true });
    this.firstCourseCard = page.getByRole("link", { name: "Khóa học mới 2026 Lập trình" });
  }

  async assertHomePageLoaded() {
    await expect(this.welcomeBanner).toBeVisible();
  }

  // Issue 2: delegate sang TopBarComponent, không tự click loginButton nữa
  async openLoginModal() {
    await this.getTopBarComponent().navigateToLoginPage();
  }

  async goToSignUp() {
    await this.click(this.signUpLink);
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
