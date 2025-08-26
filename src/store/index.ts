import { createStore, applyMiddleware, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { bookReducer } from "./reducers/bookReducer";
import { thunk } from "redux-thunk";

const persistUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : undefined;

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  book: bookReducer,
});

export const store = createStore(
  rootReducer,
  { user: persistUser },
  applyMiddleware(thunk)
);

// 订阅user的变化，存到localstorage
store.subscribe(() => {
  const userState = store.getState().user;
  localStorage.setItem("user", JSON.stringify(userState));
});
