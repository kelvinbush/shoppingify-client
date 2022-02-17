import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJwtTokens = createAsyncThunk("auth/jwt", async () => {
  const response = await axios.get("");
  return response.data;
});
