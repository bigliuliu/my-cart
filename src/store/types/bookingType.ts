export interface User {
  name: string;
  phone: string;
}
export interface Plan {
  id?: number;
  destination: string;
  userInfo: User[];
  range: string[];
}

export type BookingAction =
  | { type: "BOOK"; payload: Plan }
  | { type: "CANCEL"; payload: { id: number } }
  | { type: "UPDATE"; payload: Plan }
  | { type: "DELETE"; payload: { ids: number[] } };
