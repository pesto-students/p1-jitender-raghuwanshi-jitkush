import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

export const { increment, reset } = Counter.actions;
export default Counter.reducer;
