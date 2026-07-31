import { Locator, Page, expect } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class LoginPage extends CommonPage {
  private loginForm: Locator;
  private accountInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    // Dùng regex ngắn thay vì chuỗi dài bị nối để tránh flaky khi UI thay đổi
    this.loginForm = page
      .locator("form")
      .filter({ hasText: /Đăng nhập/ });
    this.accountInput = this.loginForm.getByRole("textbox", {
      name: "Tài khoản",
    });
    this.passwordInput = this.loginForm.getByRole("textbox", {
      name: "Mật khẩu",
    });
    this.loginButton = this.loginForm.getByRole("button", {
      name: "Đăng nhập",
    });
  }

  async enterAccountInput(account: string) {
    await this.accountInput.fill(account);
  }

  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
  async open() {
        await this.page.goto("/");
        
    }

  async login(account: string, password: string) {
    await this.enterAccountInput(account);
    await this.enterPasswordInput(password);
    await this.clickLoginButton();
  }

  async assertLoginFormVisible() {
    await expect(this.loginButton).toBeVisible();
  }


 

}
