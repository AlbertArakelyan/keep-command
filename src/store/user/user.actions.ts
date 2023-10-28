import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ADD_USER, GET_USER } from './user.actionTypes';

import { UserService } from 'services';

import { deleteIdFromObject } from 'helpers';

import { IAddUserPayloadData, IGetUserReturnData } from './types';

export const addUser = createAsyncThunk<void, IAddUserPayloadData>(ADD_USER, async (data) => {
  try {
    const user = deleteIdFromObject(data);

    await UserService.addUser(user, data.id);
  } catch (error: any) {
    console.log('addUser', error);
    toast.error(error.message, {
      type: 'error',
      hideProgressBar: true,
    });
    throw error;
  }
});

export const getUser = createAsyncThunk<IGetUserReturnData, string>(GET_USER, async (id) => {
  try {
    const response = await UserService.getUser(id);

    return response;
  } catch (error: any) {
    console.log('getUser', error);
    toast.error(error.message, {
      type: 'error',
      hideProgressBar: true,
    });
    throw error;
  }
});
