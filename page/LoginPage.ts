import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class LoginPage extends CommonPage {
  private loginForm: Locator;
  private accountInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginForm = page
      .locator("form")
      .filter({ hasText: "Đăng nhậphoặc sử dụng tài khoản" });
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

 

}
