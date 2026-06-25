
import { test as base } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { LoginPage } from "../page/LoginPage";
import { RegisterPage } from "../page/RegisterPage";


type MyFixture = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
   //thêm các page khác khi mở rộng
}

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    //set HomePage
    const homePage = new HomePage(page);
     //khai báo sử dụng homePage trong test
    await use(homePage)
  },


  loginPage: async ({ page }, use) => {
    //set LoginPage
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

    registerPage: async ({ page }, use) => {
    //set RegisterPage
    const registerPage = new RegisterPage(page);

    await use(registerPage);
  },
  //thêm các page khác khi mở rộng
});



export { expect } from "@playwright/test";
