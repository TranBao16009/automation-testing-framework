import { test, expect } from "@playwright/test";
import { API_ENDPOINTS, apiUrl, cyberSoftHeaders } from "../../config/api";
import { ENV } from "../../config/env";

test.describe("Auth API", () => {
  test("TC_AUTH_01: Login successfully with valid credentials", async ({
    request,
  }) => {
    const response = await request.post(apiUrl(API_ENDPOINTS.auth.login), {
        data: {
          taiKhoan: ENV.TEST_ACCOUNT,
          matKhau: ENV.TEST_PASSWORD,
        },
        headers: cyberSoftHeaders,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toBeDefined();
    expect(responseBody.taiKhoan).toBe(ENV.TEST_ACCOUNT);
    expect(responseBody.accessToken).toBeTruthy();
    expect(typeof responseBody.accessToken).toBe("string");
  });

  test("TC_AUTH_02: Login failed with invalid password", async ({
    request,
  }) => {
    const response = await request.post(apiUrl(API_ENDPOINTS.auth.login), {
        data: {
          taiKhoan: ENV.TEST_ACCOUNT,
          matKhau: "WrongPassword123",
        },
        headers: cyberSoftHeaders,
    });

    // BUG đã xác nhận: API trả 500 (Internal Server Error) thay vì 400 (Bad Request)
    // khi sai mật khẩu. Đúng chuẩn REST, lỗi input hợp lệ nhưng sai dữ liệu (client error)
    // phải trả 4xx, không phải 5xx (lỗi phía server). Đã báo cho giảng viên.
    expect(response.status()).toBe(500);
    const responseBody = await response.text();
    expect(responseBody).toContain("Tài khoản hoặc mật khẩu không đúng");
  });

  test("TC_AUTH_03: Login failed with invalid username", async ({
    request,
  }) => {
    const response = await request.post(apiUrl(API_ENDPOINTS.auth.login), {
        data: {
          taiKhoan: "unknown_user_xyz",
          matKhau: ENV.TEST_PASSWORD,
        },
        headers: cyberSoftHeaders,
    });

    // Cùng bug như TC_AUTH_02: server trả 500 thay vì 400
    expect(response.status()).toBe(500);
    const responseBody = await response.text();
    expect(responseBody).toContain("Tài khoản hoặc mật khẩu không đúng");
  });

  test("TC_AUTH_04: Login failed with empty credentials", async ({
    request,
  }) => {
    const response = await request.post(apiUrl(API_ENDPOINTS.auth.login), {
        data: {
          taiKhoan: "",
          matKhau: "",
        },
        headers: cyberSoftHeaders,
    });

    // Cùng bug như trên: server không validate input rỗng riêng biệt,
    // xử lý chung như sai credentials, trả 500 thay vì 400
    expect(response.status()).toBe(500);
    const responseBody = await response.text();
    expect(responseBody).toContain("Tài khoản hoặc mật khẩu không đúng");
  });
});
