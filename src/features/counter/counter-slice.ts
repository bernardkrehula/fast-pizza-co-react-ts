import { createSlice, /* PayloadAction */ } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
        state.value++;
    },
    addAmount(state, action){
        state.value += action.payload;
    }
    
  },
});

export const { increment, addAmount } = counterSlice.actions;
export default counterSlice.reducer;