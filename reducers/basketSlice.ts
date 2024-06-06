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
      // @ts-ignore
      const indexToDelete = state.items.findIndex(
        // @ts-ignore
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

// @ts-ignore
export const selectBasketItems = (state) => state.basket.items;

// @ts-ignore
export const selectBasketItemsWithId = (state, id) =>
  // @ts-ignore
  state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
