import type { UserState, UserAction } from "../types/userType";

const initUser: UserState = { userInfo: null, status: "idle" };
export const userReducer = (
  state: UserState = initUser,
  actions: UserAction
) => {
  switch (actions.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        status: "loading",
        error: undefined,
      };
    case "LOGIN_SUCCESS":
      return {
        userInfo: actions.payload,
        status: "succeed",
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        status: "failed",
        error: actions.error,
      };
    case "LOGIN_OUT":
      return { userInfo: null, status: "idle" };
    default:
      return state;
  }
};
