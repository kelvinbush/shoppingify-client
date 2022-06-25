import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "../features/auth/reducer";
import shopListReducer from "../features/content/reducer";
import activeListReducer from "../features/added-list/reducer";
import completeListReducer from "../features/complete-list-state/reducer";
import displayReducer from "../features/details-display-state/reducer";
import previewReducer from "../features/item-preview/reducer";
import historyReducer from "../features/history/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shopList: shopListReducer,
    activeList: activeListReducer,
    completeList: completeListReducer,
    detailDisplay: displayReducer,
    previewItem: previewReducer,
    history: historyReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
