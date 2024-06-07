// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  items: any[];
} = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const indexToDelete = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexToDelete > -1) {
        state.items.splice(indexToDelete, 1);
      } else {
        console.warn("There is no element found...");
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, current) => {
    return (total += current.price);
  }, 0);

export const basketReducer = basketSlice.reducer;
