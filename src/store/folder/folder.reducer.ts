import { createReducer } from '@reduxjs/toolkit';

import { addFolder } from './folder.actions';

import { IFolderState } from './types';

const initialState: IFolderState = {
  list: [],
  loading: {
    addFolder: false,
  },
  error: {
    addFolder: null,
  },
};

const folderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addFolder.fulfilled, (state, action) => {
      state.list.push(action.payload);
      state.loading.addFolder = false;
      state.error.addFolder = null;
    })
    .addCase(addFolder.pending, (state) => {
      state.loading.addFolder = true;
      state.error.addFolder = null;
    })
    .addCase(addFolder.rejected, (state, action) => {
      state.error.addFolder = action.error.message as string;
      state.loading.addFolder = false;
    })
    .addDefaultCase((state) => state);
});

export default folderReducer;
