import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: () => {},
  },
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
