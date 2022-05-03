import { createReducer } from '@reduxjs/toolkit';
import { getShoppingHistory } from './actions';

interface HistoryItem {
  id: string;
  name: string;
  isComplete: boolean;
  created_at: string;
}

export type HistoryState = {
  history: HistoryItem[];
  pending: boolean;
  error: string | null;
};

const initialState: HistoryState = {
  history: [],
  pending: false,
  error: null,
};

const historyReducer = createReducer(initialState, (builder) => {
  builder.addCase(getShoppingHistory.pending, (state) => {
    state.pending = true;
    state.error = null;
  });

  builder.addCase(getShoppingHistory.fulfilled, (state, action) => {
    state.history = action.payload;
    state.pending = false;
    state.error = null;
  });

  builder.addCase(getShoppingHistory.rejected, (state) => {
    state.pending = false;
    state.error = "Failed to get shopping history";
  });
});

export default historyReducer;
