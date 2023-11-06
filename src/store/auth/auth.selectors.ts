import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const authState = (state: RootState) => state.auth;

export const selectIsAuth = createSelector(authState, ({ isAuth }) => isAuth);
export const selectIsLoading = createSelector(authState, ({ isLoading }) => isLoading);
export const selectIsVerificationEmailSent = createSelector(
  authState,
  ({ isVerificationEmailSent }) => isVerificationEmailSent
);
