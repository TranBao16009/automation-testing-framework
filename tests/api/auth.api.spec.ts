import { test, expect } from "@playwright/test";

const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";

test.describe("Auth API", () => {
  test("TC_AUTH_01: Login successfully with valid credentials", async ({
    request,
  }) => {
    const response = await request.post(
      `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
      {
        data: {
          taiKhoan: "khoakhoakhoa",
          matKhau: "1980534Az!",
        },
      },
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody).toBeDefined();
    expect(responseBody.taiKhoan).toBe("khkhkh");
    expect(responseBody.accessToken).toBeTruthy();
    expect(typeof responseBody.accessToken).toBe("string");
  });

  test("TC_AUTH_02: Login failed with invalid password", async ({
    request,
  }) => {
    const response = await request.post(
      `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
      {
        data: {
          taiKhoan: "khkhkh",
          matKhau: "WrongPassword123",
        },
      },
    );

    expect(response.status()).toBe(400);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody).toHaveProperty("message");
  });

  test("TC_AUTH_03: Login failed with invalid username", async ({
    request,
  }) => {
    const response = await request.post(
      `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
      {
        data: {
          taiKhoan: "unknown_user",
          matKhau: "1980534Az!",
        },
      },
    );

    expect(response.status()).toBe(400);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty("message");
  });

  test("TC_AUTH_04: Login failed with empty credentials", async ({
    request,
  }) => {
    const response = await request.post(
      `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
      {
        data: {
          taiKhoan: "",
          matKhau: "",
        },
      },
    );

    expect(response.status()).toBe(400);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty("message");
  });
});
