import type { CartItem } from "./CartItemType";

export type OrderType = {
  customer: string;
  phone: string;
  address: string;
  cart: CartItem[];
  position: string;
  priority: boolean;
};