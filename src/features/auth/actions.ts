import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../util/types";

export const getJwtTokens = createAsyncThunk(
  "auth/jwt",
  async (input: UserLogin) => {
    const response = await axios.post(`${API_BASE_URL}/sessions`, input);
    const serializedAuth = JSON.stringify(response.data);
    localStorage.setItem("tokens", serializedAuth);
    return response.data;
  }
);

export const getTokensFromLocal = createAction("auth/local/get");
export const saveTokensToLocal = createAsyncThunk(
  "auth/local/save",
  (accessToken: string) => accessToken
);

export interface UserLogin {
  email: string;
  password: string;
}
