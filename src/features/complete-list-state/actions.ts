import { createAction } from "@reduxjs/toolkit";

export const addItemToComplete = createAction<CompleteItem>("complete/add");
export const removeItemFromComplete = createAction<string>("complete/remove");
export const incrementItem = createAction<string>("complete/increment");
export const decrementItem = createAction<string>("complete/decrement");
export const editListName = createAction<string>("complete/listName");
export const setListStatus = createAction<boolean>("complete/status");

export interface CompleteItem {
  id: string;
  quantity: number;
}
