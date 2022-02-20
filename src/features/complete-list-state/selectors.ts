import { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';

const selectCompleteList = (state: RootState) => state.completeList;

export const completeListSelector = createSelector(
  selectCompleteList,
  (state) => state
);
