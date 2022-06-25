import { ShopItem } from "../content";
import { createReducer } from "@reduxjs/toolkit";
import { addItemToPreview } from "./actions";

type ItemPreviewState = {
  item?: ShopItem;
};

const initialState: ItemPreviewState = {
  item: undefined,
};
const previewReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItemToPreview, (state, action) => {
    state.item = action.payload;
  });
});

export default previewReducer;
