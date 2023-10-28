import { createReducer } from '@reduxjs/toolkit';

import { getUser } from './user.actions';

import { IUserState } from './types';

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getUser.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.isLoading = false;
    })

    .addDefaultCase((state) => state);
});

export default userReducer;
