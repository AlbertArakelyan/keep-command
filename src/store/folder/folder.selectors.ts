import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configureStore';

const folderState = (state: RootState) => state.folder;

export const selectLoadingAddFolder = createSelector(folderState, ({ loading }) => loading.addFolder);
