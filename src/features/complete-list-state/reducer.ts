import {
  addItemToComplete,
  CompleteItem,
  decrementItem,
  editListName,
  incrementItem,
  removeItemFromComplete,
  setListStatus,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

type CompleteListState = {
  list: CompleteItem[];
  name: string;
  status: boolean;
};

const initialState: CompleteListState = {
  list: [],
  name: "",
  status: false,
};

export const completeListReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItemToComplete, (state, action) => {
    state.list = [...state.list, action.payload];
  });

  builder.addCase(removeItemFromComplete, (state, action) => {
    state.list = state.list.filter((item) => item.id !== action.payload);
  });

  builder.addCase(incrementItem, (state, action) => {
    const item = state.list.find((item) => item.id === action.payload);
    if (item) {
      item.quantity++;
      state.list = [...state.list, item];
    }
  });

  builder.addCase(decrementItem, (state, action) => {
    const item = state.list.find((item) => item.id === action.payload);
    if (item && item.quantity > 1) {
      item.quantity--;
      state.list = [...state.list, item];
    }
  });

  builder.addCase(editListName, (state, action) => {
    state.name = action.payload;
  });

  builder.addCase(setListStatus, (state, action) => {
    state.status = action.payload;
  });
});

export default completeListReducer;
