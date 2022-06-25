import { API_BASE_URL, AuthToken } from "./types";
import axios from "axios";
import { ActiveListItem } from "../features/added-list";

const baseUrl = `${API_BASE_URL}/active`;

export async function toggleSelectItem(input: SelectItem, token: AuthToken) {
  try {
    const response = await axios.patch(`${baseUrl}`, input, {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export async function addToActiveList(
  input: ActiveListItemInput,
  token: AuthToken
) {
  try {
    const response = await axios.post(`${baseUrl}-add`, input, {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export async function updateQuantity(
  input: ActiveListItemInput,
  token: AuthToken
) {
  try {
    const response = await axios.patch(`${baseUrl}-add`, input, {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteActiveItem(
  input: ActiveListItem,
  token: AuthToken
) {
  try {
    const response = await axios.patch(`${baseUrl}-del`, input, {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export async function updateCurrentListName(input: EditName, token: AuthToken) {
  try {
    console.log(input);
    const response = await axios.patch(`${baseUrl}-name`, input, {
      headers: {
        Authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
    });
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export interface EditName {
  name: string;
  id: string;
}

export interface SelectItem {
  itemId: string;
  isSelected: boolean;
}

export interface ActiveListItemInput {
  itemId: string;
  quantity: number;
}
