import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "../features/slices/orders-slice";
import loadingSlice from "../features/slices/loading-slice";
import userSlice from "../features/slices/user-slice";
import cartStatusSlice from "../features/slices/cartStatus-slice"


export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    user: userSlice,
    loading: loadingSlice,
    cartStatus: cartStatusSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
