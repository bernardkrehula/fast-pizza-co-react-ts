import { createSlice } from "@reduxjs/toolkit";

const cartStatusSlice = createSlice({
  name: "cartSatus",
  initialState: false,
  reducers: {
    toggleCartStatus: (state) => !state,
  },
});

export const { toggleCartStatus } = cartStatusSlice.actions;
export default cartStatusSlice.reducer;
