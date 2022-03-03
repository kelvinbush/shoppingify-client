import { createAction } from '@reduxjs/toolkit';

export const showCompleteState = createAction<DetailState>('display/complete');
export const showEditState = createAction<DetailState>('display/edit');
export const showDetailsState = createAction<DetailState>('display/details');
export const showAddState = createAction<DetailState>('display/add');

export enum DetailState {
  complete = 'COMPLETE',
  details = 'DETAILS',
  edit = 'EDIT',
  add = 'ADD',
}
