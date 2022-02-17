import { createReducer } from "@reduxjs/toolkit";
import { getJwtTokens } from "./actions";

export type AuthState = {
  data: { accessToken: string; refreshToken: string };
  pending: boolean;
  error: boolean;
};

const initialState: AuthState = {
  data: {
    accessToken: "",
    refreshToken: "",
  },
  pending: false,
  error: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getJwtTokens.pending, (state) => {
      state.pending = true;
    })
    .addCase(getJwtTokens.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getJwtTokens.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default authReducer;
