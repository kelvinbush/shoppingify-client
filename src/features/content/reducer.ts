import { getShopItems, ShopResponse } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export type ShopItemState = {
  data2: { results: ShopResponse[] };
  pending: boolean;
  error: boolean;
};

const initialState: ShopItemState = {
  data2: {
    results: [],
  },
  pending: false,
  error: false,
};

export const shopListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getShopItems.pending, (state) => {
      state.pending = true;
    })
    .addCase(getShopItems.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data2 = payload;
    })
    .addCase(getShopItems.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default shopListReducer;
