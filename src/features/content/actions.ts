import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getShopItems = createAsyncThunk(
  "shop/items",
  async (token: AuthToken) => {
    const response = await axios.get("http://localhost:1500/api/items", {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data.list;
  }
);

function parseResponse(data: Item[]): { list: AllItemsResponse[] } {
  const allItems: AllItemsResponse[] = [];
  data.forEach((item: Item) => {
    const sample = {
      name: item.name,
      id: item.id,
      category: item.category.name,
      note: item.note,
      imageUrl: item.imageUrl,
    };
    allItems.push(sample);
  });
  return { list: allItems };
}

export interface Item {
  id: string;
  name: string;
  note: string;
  imageUrl: string;
  category: Category;
}

export interface ShopItem {
  id: string;
  name: string;
  note: string;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
}

export interface AllItemsResponse {
  category: string;
  name: string;
  imageUrl: string;
  note: string;
  id: string;
}
