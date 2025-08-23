import type { Dispatch } from "redux";
import type { UserState, UserAction } from "../types/userType";

export const loginOut = (): UserAction => ({ type: "LOGIN_OUT" });
// 异步登录
export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${password}`
      );
      const data = await res.json();
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAIL", error: err });
    }
  };
};
