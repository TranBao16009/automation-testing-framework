import { Locator, Page } from "@playwright/test";
import { TimeOutConstants } from "../constants/TimeOutConstans";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async goto(
  url: string,
  timeOut: number = 30000,
) {
  await this.page.goto(url, { timeout: timeOut, waitUntil: "domcontentloaded" });
}

  async inputText(
    locator: Locator,
    text: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.fill(text, { timeout: timeOut });
  }

  async click(
    locator: Locator,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.click({ timeout: timeOut });
  }
}