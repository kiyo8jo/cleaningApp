// 部屋のステータス
export const roomStatusOptions = ["OUT", "IN", "OUT-IN", "STAY", "NONE"];

// 現在のベッド数
export const BedsStatusOptions = [0, 1, 2, 3, 4];

// ゲストの数
export const guestsOptions = [0, 1, 2, 3, 4];

// 通知済みか否か
export const isNoticeOptions = [
  { value: 0, text: "未通知" },
  { value: 1, text: "通知済み" },
];

// 清掃済みか否か
export const isCleaningOptions = [
  { value: 0, text: "未清掃" },
  { value: 1, text: "清掃済み" },
];

// stayの清掃タイプ
export const stayCleaningTypeOptions = [
  { value: 0, text: "Eco" },
  { value: 1, text: "Normal" },
];