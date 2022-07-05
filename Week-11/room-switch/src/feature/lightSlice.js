import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false
};

export const mySlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    flip: (state) => {
      state.isOn = !state.isOn;
    }
  }
});

export const { flip } = mySlice.actions;
export default mySlice.reducer;
