import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { DocumentReference } from 'firebase/firestore';

import { ADD_FOLDER } from './folder.actionTypes';

import { FolderService } from 'services';

import { IAddFolderPayloadData, IAddFolderReturnData } from './types';
import { RootState } from 'store/configureStore';
import { IFolderWithoutId, IFolder } from 'types';

export const addFolder = createAsyncThunk<IAddFolderReturnData, IAddFolderPayloadData, { state: RootState }>(
  ADD_FOLDER,
  async (data, { getState }) => {
    try {
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
