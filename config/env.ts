// config/env.ts
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const ENV = {
  BASE_URL: process.env.BASE_URL ?? "",
  API_BASE_URL: process.env.API_BASE_URL ?? "",
  TEST_ACCOUNT: process.env.TEST_ACCOUNT ?? "",
  TEST_PASSWORD: process.env.TEST_PASSWORD ?? "",
  TOKEN_CYBERSOFT: process.env.TOKEN_CYBERSOFT ?? "",
};

const required: (keyof typeof ENV)[] = [
  "BASE_URL",
  "API_BASE_URL",
  "TEST_ACCOUNT",
  "TEST_PASSWORD",
  "TOKEN_CYBERSOFT",
];
for (const key of required) {
  if (!ENV[key]) {
    throw new Error(`Missing environment variable: ${key}. Kiểm tra file .env`);
  }
}
