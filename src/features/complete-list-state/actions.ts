import { createAction } from '@reduxjs/toolkit/src/createAction';

export const addItemToComplete = createAction<CompleteItem>('complete/add');
export const removeItemFromComplete = createAction<string>('complete/remove');

export interface CompleteItem {
  id: string;
  quantity: number;
}
