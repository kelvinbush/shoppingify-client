import { ShopItem } from '../features/content';
import { ActiveListItem } from '../features/added-list/actions';

export const API_BASE_URL = 'http://localhost:1500';

export function getCategories(data: ShopItem[] | ActiveListItem[]) {
  const categorySet: Set<string> = new Set();
  data.forEach((shopItem) => {
    categorySet.add(shopItem.category);
  });
  return Array.from(categorySet);
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
}
