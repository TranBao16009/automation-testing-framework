import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class RegisterPage extends CommonPage {
  private registerForm: Locator;
  private accountInput: Locator;
  private passwordInput: Locator;
  private emailInput: Locator;
  private fullnameInput: Locator;
  private phoneInput: Locator;
  private registerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.registerForm = page.locator("form").filter({
      hasText: "ĐĂNG KÝGP01GP02GP03GP04GP05GP06GP07GP08GP09GP010Đăng ký",
    });
    this.accountInput = this.registerForm.getByRole("textbox", {
      name: "Tài khoản",
    });
    this.passwordInput = this.registerForm.getByRole("textbox", {
      name: "Mật khẩu",
      exact: true,
    });
    this.emailInput = this.registerForm.getByRole("textbox", { name: "Email" });
    this.fullnameInput = this.registerForm.getByRole("textbox", {
      name: "Họ tên",
    });
    this.phoneInput = this.registerForm.getByRole("textbox", {
      name: "Số điện thoại",
    });
    this.registerButton = this.registerForm.getByRole("button", {
      name: "Đăng ký",
    });
  }

  async enterAccountInput(account: string) {
    await this.accountInput.fill(account);
  }

  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async enterFullnameInput(fullname: string) {
    await this.fullnameInput.fill(fullname);
  }
  async enterPhoneInput(phone: string) {
    await this.phoneInput.fill(phone);
  }
  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async register(
    account: string,
    password: string,
    email: string,
    phone: string,
    fullname: string,
  ) {
    await this.enterAccountInput(account);
    await this.enterPasswordInput(password);
    await this.enterEmailInput(email);
    await this.enterFullnameInput(fullname);
    await this.enterPhoneInput(phone);
    await this.clickRegisterButton();
  }
}
