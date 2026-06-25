import { Locator, Page } from "@playwright/test";
import { TimeOutConstants } from "../constants/TimeOutConstans";


export class BasePage {
  //thuộc tính
  protected page: Page;

  //constructor
  constructor(page: Page) {
    this.page = page;
  }

  //phương thức
  async inputText(
    locator: Locator,
    text: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.fill(text, { timeout: timeOut });
  }

  //ví dụ: input(locator, "test123")

  async click(
    locator: Locator,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.click({ timeout: timeOut });
  }
}
