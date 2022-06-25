import { ActiveItemResponse, getActiveList } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export type ActiveListState = {
  activeList: ActiveItemResponse;
  pending: boolean;
  error: boolean;
};

const initialState: ActiveListState = {
  activeList: { name: "", list: [] },
  pending: false,
  error: false,
};

export const activeListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getActiveList.pending, (state) => {
      state.pending = true;
    })
    .addCase(
      getActiveList.fulfilled,
      (state, { payload }: { payload: ActiveItemResponse }) => {
        state.pending = false;
        state.activeList.list = payload.list;
        state.activeList.name = payload.name;
      }
    )
    .addCase(getActiveList.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default activeListReducer;
