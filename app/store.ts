import basketSlice from "@/reducers/basketSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
