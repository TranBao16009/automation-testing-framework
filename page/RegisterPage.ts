import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class RegisterPage extends CommonPage {
  private accountInput: Locator;
  private passwordInput: Locator;
  private rePasswordInput: Locator;
  private emailInput: Locator;
  private fullnameInput: Locator;
  private registerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountInput = page.getByRole("textbox", { name: "Tài Khoản" });
    this.passwordInput = page.getByRole("textbox", {
      name: "Mật Khẩu",
      exact: true,
    });
    this.rePasswordInput = page.getByRole("textbox", {
      name: "Nhập lại mật khẩu",
    });
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.fullnameInput = page.getByRole("textbox", { name: "Họ Tên" });
    this.registerButton = page.getByRole("button", { name: "Đăng ký" });
  }

  async enterAccountInput(account: string) {
    await this.accountInput.fill(account);
  }

  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterRePasswordInput(rePassword: string) {
    await this.rePasswordInput.fill(rePassword);
  }

  async enterEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async enterFullnameInput(fullname: string) {
    await this.fullnameInput.fill(fullname);
  }

  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async register(
    account: string,
    password: string,
    rePassword: string,
    email: string,
    fullname: string,
  ) {
    await this.enterAccountInput(account);
    await this.enterPasswordInput(password);
    await this.enterRePasswordInput(rePassword);
    await this.enterEmailInput(email);
    await this.enterFullnameInput(fullname);
    await this.clickRegisterButton();
  }
}
