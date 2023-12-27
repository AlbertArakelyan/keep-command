import { createReducer } from '@reduxjs/toolkit';

import { addFolder, getFolders } from './folder.actions';

import { IFolderState } from './types';

const initialState: IFolderState = {
  list: [],
  loading: {
    addFolder: false,
    getFolders: false,
  },
  error: {
    addFolder: null,
    getFolders: null,
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

    .addCase(getFolders.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading.getFolders = false;
      state.error.getFolders = null;
    })
    .addCase(getFolders.pending, (state) => {
      state.loading.getFolders = true;
      state.error.getFolders = null;
    })
    .addCase(getFolders.rejected, (state, action) => {
      state.error.getFolders = action.error.message as string;
      state.loading.getFolders = false;
    })

    .addDefaultCase((state) => state);
});

export default folderReducer;
