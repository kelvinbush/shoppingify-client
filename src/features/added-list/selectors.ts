import { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectActiveList = (state: RootState) => state.activeList;

export const activeListSelector = createSelector(
  selectActiveList,
  (state) => state
);
