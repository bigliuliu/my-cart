import type { BookingAction, Plan } from "../types/bookingType";

const bookState: Plan[] = [];
export const bookReducer = (
  state: Plan[] = bookState,
  actions: BookingAction
) => {
  switch (actions.type) {
    case "BOOK":
      return [
        ...state,
        {
          id: actions.payload.id,
          destination: actions.payload.destination,
          userInfo: actions.payload.userInfo,
          range: actions.payload.range,
        },
      ];
    case "CANCEL":
      return state.filter((item) => item.id !== actions.payload.id);
    case "UPDATE":
      return state.map((item) =>
        item.id === actions.payload.id
          ? {
              id: actions.payload.id,
              destination: actions.payload.destination,
              userInfo: actions.payload.userInfo,
              range: actions.payload.range,
            }
          : item
      );
    case "DELETE":
      return state.filter((item) => !actions.payload.ids.includes(item.id));
    default:
      return state;
  }
};
