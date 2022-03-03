import {
  DetailState,
  showAddState,
  showCompleteState,
  showDetailsState,
  showEditState,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

type DisplayState = {
  screen: DetailState;
};

const initialState: DisplayState = {
  screen: DetailState.complete,
};

export const displayReducer = createReducer(initialState, (builder) => {
  builder.addCase(showAddState, (state, action) => {
    state.screen = action.payload;
  });
  builder.addCase(showCompleteState, (state, action) => {
    state.screen = action.payload;
  });
  builder.addCase(showEditState, (state, action) => {
    state.screen = action.payload;
  });
  builder.addCase(showDetailsState, (state, action) => {
    state.screen = action.payload;
  });
});
