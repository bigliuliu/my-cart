interface Product {
  id: number;
  name: string;
  price: number;
}
export interface CartItem extends Product {
  count: number;
}
export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "UPDATE_COUNT"; payload: { id: number; count: number } }
  | { type: "CLEAR" }
  | {type:"ALL_ITEMS",payload: CartItem[]}
