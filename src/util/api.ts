import { AuthToken } from './types';
import axios from 'axios';

export async function toggleSelectItem(input: SelectItem, token: AuthToken) {
  try {
    const response = await axios.patch(
      'http://localhost:1500/api/sessions',
      input,
      {
        headers: {
          Authorization: token.accessToken,
          'x-refresh': token.refreshToken,
        },
      }
    );
    console.log(response);
    return response.data.complete;
  } catch (e) {
    console.log(e);
  }
}

export interface SelectItem {
  itemId: string;
  isSelected: boolean;
}
