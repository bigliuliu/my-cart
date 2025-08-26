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
          id: 66,
          destination: "66",
          userInfo: [{name:"8",phone:"8"}],
          range: ["2023/01/03","2023/01/04"],
        },
        {
          id: Number(actions.payload.destination),
          destination: actions.payload.destination,
          userInfo: actions.payload.userInfo,
          range: actions.payload.range,
        },
      ];
    case "CANCEL":
      return state.filter((item) => item.id !== actions.payload.id);
    case "UPDATE":
                console.log(actions.payload,"Reducer 收到的")
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
         console.log(actions.payload.ids,state,"Reducer--")
      return state.filter((item) => !actions.payload.ids.includes(item.id));
    default:
      return state;
  }
};
