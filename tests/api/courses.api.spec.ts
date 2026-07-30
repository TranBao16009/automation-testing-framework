import { expect, test } from "@playwright/test";
import { API_ENDPOINTS, apiUrl, cyberSoftHeaders } from "../../config/api";

test.describe("Courses API", () => {
  test("TC_COURSE_01: Get course categories successfully", async ({ request }) => {
    const response = await request.get(apiUrl(API_ENDPOINTS.courses.categories), {
      headers: cyberSoftHeaders,
    });

    expect(response.status()).toBe(200);
    const categories = await response.json();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    expect(categories[0]).toEqual(
      expect.objectContaining({ maDanhMuc: expect.any(String), tenDanhMuc: expect.any(String) }),
    );
  });

  test("TC_COURSE_02: Get courses for a valid group", async ({ request }) => {
    const response = await request.get(apiUrl(API_ENDPOINTS.courses.list), {
      headers: cyberSoftHeaders,
      params: { MaNhom: "GP01" },
    });

    expect(response.status()).toBe(200);
    const courses = await response.json();
    expect(Array.isArray(courses)).toBe(true);
    expect(courses.length).toBeGreaterThan(0);
    expect(courses[0]).toEqual(
      expect.objectContaining({ maKhoaHoc: expect.any(String), tenKhoaHoc: expect.any(String) }),
    );
  });
});
