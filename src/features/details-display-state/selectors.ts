import { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectDisplay = (state: RootState) => state.detailDisplay;
export const displaySelector = createSelector(selectDisplay, (state) => state);
