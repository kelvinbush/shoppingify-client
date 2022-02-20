import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL, AuthToken } from '../../util/types';

export const getShopItems = createAsyncThunk(
  'shop/items',
  async (token: AuthToken) => {
    const response = await axios.get(`${API_BASE_URL}/api/items`, {
      headers: {
        Authorization: token.accessToken,
        'x-refresh': token.refreshToken,
      },
    });
    return response.data.list;
  }
);

export interface ShopItem {
  id: string;
  name: string;
  note: string;
  imageUrl: string;
  category: string;
}
