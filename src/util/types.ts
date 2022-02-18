import { ShopItem } from "../features/content";

export enum Name {
  Beverages = "Beverages",
  FruitAndVegetables = "Fruit and Vegetables",
  Furniture = "Furniture",
}

export interface MyItems {
  category: string;
  id: string;
  items: SortItem[];
}

export interface SortItem {
  id: string;
  name: string;
  note: string;
  imageUrl: string;
}

export function getCategories(data: ShopItem[]) {
  const categorySet: Set<string> = new Set();
  data.forEach((shopItem) => {
    categorySet.add(shopItem.category);
  });
  return Array.from(categorySet);
}
