import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectShopItems = (state: RootState) => state.shopList;

export const shopItemsSelector = createSelector(
  selectShopItems,
  (state) => state
);
