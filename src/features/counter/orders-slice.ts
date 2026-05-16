import { createSlice } from "@reduxjs/toolkit";
import type { OrdersState } from "../../types/redux.types.ts/OrdersState";

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  user: "",
};
const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
    increment: (state, actions) => {
      state.orders.find(
        (order) => order.id === actions.payload && order.amount++,
      );
    },
    decrement: (state, actions) => {
      const { id, amount } = actions.payload;
      state.orders.find((order) => {
        if (order.id === id) {
          order.amount--;
        }
      });
      if (amount === 1)
        state.orders = state.orders.filter((order) => order.id !== id);
    },
    add: (state, actions) => {
      const order = { ...actions.payload, amount: 1 };
      state.orders.push(order);
    },
    remove: (state, actions) => {
      state.orders = state.orders.filter(({ id }) => id !== actions.payload);
    },
    clear: (state) => {
      state.orders = [];
    },
  },
});

export const {
  increment,
  add,
  decrement,
  remove,
  clear,
  setUser,
  setIsLoading,
} = ordersSlice.actions;
export default ordersSlice.reducer;
