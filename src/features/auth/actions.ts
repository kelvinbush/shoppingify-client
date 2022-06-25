import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../util/types";

export const getJwtTokens = createAsyncThunk(
  "auth/jwt",
  async (input: UserLogin) => {
    const response = await axios.post(`${API_BASE_URL}/sessions`, input);
    return response.data;
  }
);

export interface UserLogin {
  email: string;
  password: string;
}
