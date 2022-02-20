import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducer';
import shopListReducer from '../features/content/reducer';
import activeListReducer from '../features/added-list/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shopList: shopListReducer,
    activeList: activeListReducer,
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
