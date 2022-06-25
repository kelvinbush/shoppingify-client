import { getShopItems, ShopItem } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export type ShopItemState = {
  shopItemList: ShopItem[];
  pending: boolean;
  error: boolean;
};

const initialState: ShopItemState = {
  shopItemList: [],
  pending: false,
  error: false,
};

export const shopListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getShopItems.pending, (state) => {
      state.pending = true;
    })
    .addCase(
      getShopItems.fulfilled,
      (state, { payload }: { payload: ShopItem[] }) => {
        state.pending = false;
        state.shopItemList = payload;
      }
    )
    .addCase(getShopItems.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default shopListReducer;
