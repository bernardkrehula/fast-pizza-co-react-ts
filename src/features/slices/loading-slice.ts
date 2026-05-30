import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setIsLoading: (state) => !state,
  },
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
