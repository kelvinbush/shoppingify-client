import { ShopItem } from "../features/content";


export function getCategories(data: ShopItem[]) {
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
