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
  builder.addCase(showAddState, (state) => {
    state.screen = DetailState.add;
  });
  builder.addCase(showCompleteState, (state) => {
    state.screen = DetailState.complete;
  });
  builder.addCase(showEditState, (state) => {
    state.screen = DetailState.edit;
  });
  builder.addCase(showDetailsState, (state) => {
    state.screen = DetailState.details;
  });
});
