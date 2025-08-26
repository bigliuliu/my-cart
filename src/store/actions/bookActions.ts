import type { Dispatch } from "redux";
import type { Plan } from "../types/bookingType";

import axios from "axios";

export const bookPlan = (plan: Plan) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${Number(plan.destination)}`
      );
      const data = {
        id: res.data.id,
        destination:  plan.destination,
        range:plan.range,
        userInfo:plan.userInfo
      };
      dispatch({ type: "BOOK", payload: data });
    } catch (error) {
      console.log("BOOK_error", error);
      throw error
    }
  };
};

export const cancelPlan = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.data) {
        dispatch({ type: "CANCEL", payload: { id } });
      }
    } catch (error) {
      console.log("CANCEL_error", error);
    }
  };
};

export const deletePlan = (ids: number[]) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.data) {
        dispatch({ type: "DELETE", payload: { ids } });
      }
    } catch (error) {
      console.log("DELETE_error", error);
    }
  };
};

export const updatePlan = (plan: Plan) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${plan.id}`
      );
      if (res.data) {
        dispatch({ type: "UPDATE", payload: plan });
      }
    } catch (error) {
      console.log("UPDATE_error", error);
    }
  };
};
