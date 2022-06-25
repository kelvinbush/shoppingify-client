import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const getHistory = (state: RootState) => state.history;
export const historySelector = createSelector(getHistory, (state) => state);
