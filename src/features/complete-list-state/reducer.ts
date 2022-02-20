import {
  addItemToComplete,
  CompleteItem,
  removeItemFromComplete,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

type CompleteListState = {
  list: CompleteItem[];
};

const initialState: CompleteListState = {
  list: [],
};

export const completeListReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItemToComplete, (state, action) => {
    state.list = [...state.list, action.payload];
  });

  builder.addCase(removeItemFromComplete, (state, action) => {
    state.list = state.list.filter((item) => item.id !== action.payload);
  });
});

export default completeListReducer;
