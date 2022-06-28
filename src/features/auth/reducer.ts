import { createReducer } from "@reduxjs/toolkit";
import { getJwtTokens, getTokensFromLocal, saveTokensToLocal } from "./actions";

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

const getLocal = () => {
  const serializedTokens = localStorage.getItem("tokens");
  const localTokens = serializedTokens && JSON.parse(serializedTokens);
  return localTokens
    ? localTokens
    : {
        accessToken: "",
        refreshToken: "",
      };
};

const saveLocal = (tokens: { accessToken: string; refreshToken: string }) => {
  const stringfyTokens = JSON.stringify(tokens);
  localStorage.setItem("tokens", stringfyTokens);
  return tokens;
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
    })
    .addCase(getTokensFromLocal, (state) => {
      state.pending = false;
      state.error = false;
      state.data = getLocal();
    })
    .addCase(saveTokensToLocal.fulfilled, (state, { payload }) => {
      state.data = saveLocal({
        accessToken: payload,
        refreshToken: state.data.refreshToken,
      });
    });
});

export default authReducer;
