import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state: RootState) => state.auth;

export const authSelector = createSelector(selectAuth, (state) => state);
