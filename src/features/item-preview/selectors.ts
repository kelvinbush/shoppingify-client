import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectPreview = (state: RootState) => state.previewItem;
export const previewSelector = createSelector(selectPreview, (state) => state);
