import type { CartItem, CartAction } from "../types/cartType";

const initCart: CartItem[] = [];
export const cartReducer = (
  state: CartItem[] = initCart,
  actions: CartAction
) => {
  switch (actions.type) {
    case "ADD_ITEM": {
      const existing = state.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (existing !== -1) {
        return state.map((item) =>
          item.id === actions.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      return [
        ...state,
        {
          id: actions.payload.id,
          name: actions.payload.name,
          price: actions.payload.price,
          count: 1,
        },
      ];
    }
    case "REMOVE_ITEM": {
      const curCount = state.find(
        (item) => item.id === actions.payload.id
      )?.count;
      if (curCount === 1) {
        return state.filter((item) => item.id !== actions.payload.id);
      }
      return state.map((item) =>
        item.id === actions.payload.id
          ? { ...item, count: item.count - 1 }
          : item
      );
    }
    case "UPDATE_COUNT":
        return state.map(item=>item.id === actions.payload.id ? {...item,count:actions.payload.count}:item)
    case "CLEAR":
        return []
    default:
        return state
  }
};
