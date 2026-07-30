import { ENV } from "./env";

export const API_ENDPOINTS = {
  auth: {
    login: "/QuanLyNguoiDung/DangNhap",
  },
  courses: {
    categories: "/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    list: "/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
  },
} as const;

export const apiUrl = (endpoint: string) => `${ENV.API_BASE_URL}${endpoint}`;

export const cyberSoftHeaders = {
  "Content-Type": "application/json",
  Tokencybersoft: ENV.TOKEN_CYBERSOFT,
};
