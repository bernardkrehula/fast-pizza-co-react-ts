import { createSlice } from "@reduxjs/toolkit";
import type { OrdersState } from "../../types/redux.types.ts/OrdersState";

const initialState: OrdersState = {
  orders: [],
};
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    increment: (state, actions) => {
      state.orders.find((order) => {
        if (order.id === actions.payload) {
          order.amount++;
          order.totalUnitPrice += order.unitPrice;
        }
      });
    },
    decrement: (state, actions) => {
      const { id, amount } = actions.payload;

      state.orders.find((order) => {
        if (order.id === id) {
          order.amount--;
          order.totalUnitPrice -= order.unitPrice;
        }
      });
      if (amount === 1)
        state.orders = state.orders.filter((order) => order.id !== id);
    },
    add: (state, actions) => {
      const { unitPrice } = actions.payload;
      const order = {
        ...actions.payload,
        amount: 1,
        totalUnitPrice: unitPrice,
      };
      state.orders.push(order);
    },
    remove: (state, actions) => {
      state.orders = state.orders.filter(({ id }) => id !== actions.payload);
    },
    clear: (state) => {
      state.orders = [];
    },
  },
  selectors: {
    selectTotalPrice: (state) =>
      state.orders.reduce(
        (acc, { unitPrice, amount = 1 }) => acc + unitPrice * amount,
        0,
      ),
    selectTotalAmount: (state) =>
      state.orders.reduce((acc, { amount = 1 }) => acc + amount, 0),
  },
});

export const { increment, add, decrement, remove, clear } = ordersSlice.actions;
export const { selectTotalPrice, selectTotalAmount } = ordersSlice.selectors;
export default ordersSlice.reducer;
