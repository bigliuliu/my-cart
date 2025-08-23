export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  userInfo: User | null;
  // idle 代表空闲状态
  status: "idle" | "loading" | "succeed" | "failed";
  error?: string;
}

export type UserAction =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAIL"; error: string }
  | { type: "LOGIN_OUT"};
