import { AuthToken } from './types';
import axios from 'axios';
import { ActiveListItem } from '../features/added-list';

export async function toggleSelectItem(input: SelectItem, token: AuthToken) {
  try {
    const response = await axios.patch(
      'http://localhost:1500/api/active',
      input,
      {
        headers: {
          Authorization: token.accessToken,
          'x-refresh': token.refreshToken,
        },
      }
    );
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
    const response = await axios.post(
      'http://localhost:1500/api/active-add',
      input,
      {
        headers: {
          Authorization: token.accessToken,
          'x-refresh': token.refreshToken,
        },
      }
    );
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
    const response = await axios.patch(
      'http://localhost:1500/api/active-add',
      input,
      {
        headers: {
          Authorization: token.accessToken,
          'x-refresh': token.refreshToken,
        },
      }
    );
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
    const response = await axios.patch(
      'http://localhost:1500/api/active-del',
      input,
      {
        headers: {
          Authorization: token.accessToken,
          'x-refresh': token.refreshToken,
        },
      }
    );
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export async function updateCurrentListName(input: EditName, token: AuthToken) {
  try {
    console.log(input);
    const response = await axios.patch(
      'http://localhost:1500/api/active-name',
      input,
      {
        headers: {
          Authorization: token.accessToken,
          'x-refresh': token.refreshToken,
        },
      }
    );
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
