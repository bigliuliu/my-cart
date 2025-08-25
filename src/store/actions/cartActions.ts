import axios from "axios";
import type { Dispatch } from "redux";
import type { CartAction, CartItem } from "../types/cartType";

// 没有接口调用的清空
// export const clearCart = (): CartAction =>({type:"CLEAR"})

// 需要接口调用清空
export const clearCart = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "CLEAR" });
  };
};

export const addItem = (productInfo: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${productInfo.id}`
      );
      const data = {
        id: res.data.id,
        name: res.data.title,
        price: 1,
        count: 0,
      };
      dispatch({ type: "ADD_ITEM", payload: data });
    } catch (error) {
      console.log("error---ADD_ITEM", error);
    }
  };
};

export const removeItem = (id: number) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = { id: res.data.id };
      dispatch({ type: "REMOVE_ITEM", payload: data });
    } catch (error) {
      console.log("error---REMOVE_ITEM", error);
    }
  };
};

export const updateCount = (id: number, count: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = { id: res.data.id, count };
      dispatch({ type: "UPDATE_COUNT", payload: data });
    } catch (error) {
      console.log("error---UPDATE_COUNT", error);
    }
  };
};
