import { basketReducer } from "@/reducers/basketSlice";
import { restaurantReducer } from "@/reducers/resturantSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
