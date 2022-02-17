import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJwtTokens = createAsyncThunk(
  "auth/jwt",
  async (input: UserLogin) => {
    const response = await axios.post(
      "http://localhost:1500/api/sessions",
      input
    );
    return response.data;
  }
);

export interface UserLogin {
  email: string;
  password: string;
}
