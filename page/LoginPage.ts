import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class LoginPage extends CommonPage {
  private accountInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountInput = page.getByRole("textbox", { name: "Tài khoản" });
    this.passwordInput = page.getByRole("textbox", { name: "Mật khẩu" });
    this.loginButton = page.getByRole("button", {
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

  async login(account: string, password: string) {
    await this.enterAccountInput(account);
    await this.enterPasswordInput(password);
    await this.clickLoginButton();
  }
}
