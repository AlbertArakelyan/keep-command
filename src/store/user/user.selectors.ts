import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.user;

export const selectUser = createSelector(userState, ({ user }) => user);
