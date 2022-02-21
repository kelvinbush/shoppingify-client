import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL, AuthToken } from '../../util/types';
import axios from 'axios';

export const getActiveList = createAsyncThunk(
  'active/list',
  async (token: AuthToken) => {
    const response = await axios.get(`${API_BASE_URL}/api/active`, {
      headers: {
        Authorization: token.accessToken,
        'x-refresh': token.refreshToken,
      },
    });

    return response.data;
  }
);

export interface ActiveItemResponse {
  name: string;
  list: ActiveListItem[];
}

export interface ActiveListItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  isSelected: boolean;
  activeId:string
}
