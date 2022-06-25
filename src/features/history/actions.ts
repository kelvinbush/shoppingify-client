import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, AuthToken } from "../../util/types";

export const getShoppingHistory = createAsyncThunk(
  "history/getShoppingHistory",
  async (token: AuthToken) => {
    const response = await axios.get(`${API_BASE_URL}/api/history`, {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data;
  }
);
