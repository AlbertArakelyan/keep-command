import { createReducer } from '@reduxjs/toolkit';

import { updateAuthState, signUp, login, resetIsVerificationEmailSent } from './auth.actions';

import { IAuthState } from './types';

const initialState: IAuthState = {
  id: undefined,
  isAuth: false,
  isVerificationEmailSent: false,
  isLoading: false,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAuthState.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.isAuth = action.payload.isAuth;
    })

    .addCase(signUp.fulfilled, (state) => {
      state.isVerificationEmailSent = true;
      state.error = null;
      state.isLoading = false;
    })
    .addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.isLoading = false;
    })

    .addCase(login.fulfilled, (state) => {
      state.error = null;
      state.isLoading = false;
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.isLoading = false;
    })

    .addCase(resetIsVerificationEmailSent, (state) => {
      state.isVerificationEmailSent = false;
    })

    .addDefaultCase((state) => state);
});

export default authReducer;
