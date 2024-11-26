export const ROUTERS = {
  LOGIN: "/",
  LOGIN_NEXT: "/login",
  SELECT_YEN_DISCOUNT: "/select-yen-discount",
  SELECT_RATE_DISCOUNT: "/select-rate-discount",
  SELECT_AI_DISCOUNT: "/select-ai-discount",
  SERVICE: "/service",
  LABEL: "/label",
};
export const LOCAL_STORAGE_KEY = {
  TOKEN: "token",
  USER_DATA: "user",
};
export const ALLOWED_KEYS_WITH_CTRL = ["c", "v", "a", "x"];

export const ALLOWED_KEYS = new Set([
  "Delete",
  "Backspace",
  "Tab", // Delete, Backspace, Tab
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight", // Arrow keys
  "Enter",
  "Escape", // Enter, Escape
  "Home",
  "End",
  "PageUp",
  "PageDown", // Navigation keys
  "Enter",
]);

export const MSG = {
  // Common message
  ERROR_COMMON: "エラー。",
  SUCCESS_COMMON: "成功しました。",
  ERROR_NO_DATA_COMMON: "該当データがありません。",
};

export const SYSTEM_CONSTANT = {
  SYSTEM_HOURS_MINUTES_FORMAT: "HH:mm",
  SYSTEM_LOCAL_DATE_FORMAT: "yyyy-MM-DD",
  SYSTEM_LOCAL_DATE_FORMAT_YYYY_MM_DD: "yyyy/MM/DD",
  SYSTEM_LOCAL_DATE_FORMAT_YYYY_MM_DD_DDD: "yyyy/MM/DD ddd",
  SYSTEM_LOCAL_DATE_TIME_FORMAT: "yyyy-MM-DD HH:mm",
  SYSTEM_LOCAL_DATE_TIME_FORMAT_YYYY_MM_DD: "yyyy/MM/DD HH:mm:ss",
  SYSTEM_LOCAL_DATE_TIME_STRING: "YYYYMMDDHHmmss",
  SYSTEM_LOCAL_DATE_STRING: "YYYYMMDD",
  SYSTEM_LOCAL_DATE_MONTH: "MM/DD",
  SYSTEM_LOCAL_DATE_FORMAT_WITH_TEXT: "YYYY年MM月DD日(ddd) HH時mm分",
  SYSTEM_LOCAL_DATE_FORMAT_WITH_TEXT_YYYY_MM_DD: "YYYY年MM月DD日(ddd)",
  SYSTEM_LOCAL_DATE_FORMAT_WITH_TEXT_YYYY_MM: "YYYY年 MM月",
  SYSTEM_LOCAL_DATE_MONTH_DDD: "MM/DD (ddd)",
  SYSTEM_LOCAL_DATE_YY_MM_DD_DDD: "YY/MM/DD (ddd) HH:mm",
  SYSTEM_LOCAL_DATE_FORMAT_YYYY_MM_DD_DDD_1: "yyyy/MM/DD (ddd)",
};

export const SUB_FUNCTION = {
  ENBIKI: "円引",
  PERCENT: "％引",
  HALF: "半額",
};

export const BUMON_LIST = [
  "10",
  "20",
  "30",
  "45",
  "48",
  "52",
  "55",
  "58",
  "60",
];
