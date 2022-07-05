import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./lightSlice";


export const store = configureStore({
  reducer: {
    room: roomSlice,
  }
});
