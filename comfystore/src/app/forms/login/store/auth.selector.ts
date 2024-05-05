import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AuthState } from './auth.reducer';

const authDetail = (state: AppState) => state.authDetails;

export const selectLoggedInDetails = createSelector(
  authDetail,
  (state: AuthState) => state.login
);
