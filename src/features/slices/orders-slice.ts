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
        if (order.pizzaId === actions.payload) {
          order.quantity++;
          order.totalUnitPrice += order.unitPrice;
        }
      });
    },
    decrement: (state, actions) => {
      const { id, amount } = actions.payload;

      state.orders.find((order) => {
        if (order.pizzaId === id) {
          order.quantity--;
          order.totalUnitPrice -= order.unitPrice;
        }
      });
      if (amount === 1)
        state.orders = state.orders.filter((order) => order.pizzaId !== id);
    },
    add: (state, actions) => {
      const { id, unitPrice } = actions.payload;
      const order = {
        ...actions.payload,
        pizzaId: id,
        quantity: 1,
        totalUnitPrice: unitPrice,
        addIngredients: [],
        removeIngredients: [],
      };
      state.orders.push(order);
    },
    remove: (state, actions) => {
      state.orders = state.orders.filter(
        ({ pizzaId }) => pizzaId !== actions.payload,
      );
    },
    clear: (state) => {
      state.orders = [];
    },
  },
  selectors: {
    selectTotalPrice: (state) =>
      state.orders.reduce(
        (acc, { unitPrice, quantity = 1 }) => acc + unitPrice * quantity,
        0,
      ),
    selectTotalAmount: (state) =>
      state.orders.reduce((acc, { quantity = 1 }) => acc + quantity, 0),
  },
});

export const { increment, add, decrement, remove, clear } = ordersSlice.actions;
export const { selectTotalPrice, selectTotalAmount } =
  ordersSlice.selectors;
export default ordersSlice.reducer;
