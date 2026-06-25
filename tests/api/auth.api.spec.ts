import test, { expect } from "@playwright/test";

test("TC01: verify login successfull with valid credentials", async ({
  request,
}) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );

  const responseBody = await response.json();
  const token = responseBody.token;

  expect(response.status()).toBe(200); // kiểm tra trạng thái 200
  expect(token).toBeDefined(); // kiểm tra token có được trả về hay không
});