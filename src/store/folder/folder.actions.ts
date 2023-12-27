import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { DocumentReference } from 'firebase/firestore';

import { ADD_FOLDER, GET_FOLDERS } from './folder.actionTypes';

import { FolderService } from 'services';

import { IAddFolderPayloadData, IAddFolderReturnData } from './types';
import { RootState } from 'store/configureStore';
import { IFolderWithoutId, IFolder } from 'types';

export const addFolder = createAsyncThunk<IAddFolderReturnData, IAddFolderPayloadData, { state: RootState }>(
  ADD_FOLDER,
  async (data, { getState }) => {
    try {
      // TODO create a helper for userId getter function
      const { user } = getState().user;

      const userId = user?.id;

      if (!userId) {
        throw new Error('no user id'); // TODO make meesages with constants
      }

      const sendData: IFolderWithoutId = {
        ...data,
        createdAt: Date.now(),
        userId,
      };

      const response = (await FolderService.addFolder(sendData)) as DocumentReference;

      const responseData: IFolder = {
        ...sendData,
        id: response.id,
      };

      return responseData;
    } catch (error: any) {
      console.log('addFolder', error);
      toast.error(error.message, {
        type: 'error',
        hideProgressBar: true,
      });
      throw error;
    }
  }
);

export const getFolders = createAsyncThunk<IFolder[], undefined, { state: RootState }>(
  GET_FOLDERS,
  async (_, { getState }) => {
    try {
      // TODO create a helper for userId getter function
      const { user } = getState().user;

      const userId = user?.id;

      if (!userId) {
        throw new Error('no user id'); // TODO make meesages with constants
      }

      const response = await FolderService.getFolders(userId);

      console.log(response);

      if (!response) {
        throw new Error('no response'); // TODO make meesages with constants
      }

      return response;
    } catch (error: any) {
      console.log('getFolders', error);
      toast.error(error.message, {
        type: 'error',
        hideProgressBar: true,
      });
      throw error;
    }
  }
);
