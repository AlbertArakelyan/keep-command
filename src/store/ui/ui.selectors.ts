import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const uiState = (state: RootState) => state.ui;

export const selectTheme = createSelector(uiState, ({ theme }) => theme);
