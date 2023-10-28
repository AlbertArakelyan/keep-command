import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { UPDATE_AUTH_STATE, SIGN_UP, LOGIN, RESET_IS_VERIFICATION_EMAIL_SENT } from './auth.actionTypes';

import { addUser, getUser } from '../user';

import { IUpdateAuthStateReturnData, ISignUpPayloadData, ILoginPayloadData } from './types';

import { AuthService } from 'services';

import { getFirebaseError } from 'helpers';

import { authErrors } from 'constants/authErrors';

export const updateAuthState = createAsyncThunk<IUpdateAuthStateReturnData>(UPDATE_AUTH_STATE, () => {
  const user = AuthService.authUser();
  console.log({
    id: user?.uid,
    isAuth: !!user,
  });

  return {
    id: user?.uid,
    isAuth: !!user,
  };
});

export const signUp = createAsyncThunk<void, ISignUpPayloadData>(SIGN_UP, async (data, { dispatch }) => {
  try {
    const response = await AuthService.signUp(data.email, data.password);

    await AuthService.sendEmailVerification(response.user);

    await dispatch(
      addUser({
        id: response.user.uid,
        email: data.email,
        name: data.name,
        avatar: '',
      })
    );

    await dispatch(updateAuthState());
  } catch (error: any) {
    console.log('signUp', error.toString());
    toast.error(getFirebaseError(error.toString(), authErrors), {
      type: 'error',
      hideProgressBar: true,
    });
    throw error;
  }
});

export const login = createAsyncThunk<void, ILoginPayloadData>(LOGIN, async (data, { dispatch }) => {
  try {
    const response = await AuthService.login(data.email, data.password);

    if (!response.user.emailVerified) {
      throw new Error('Email is not verified');
    }

    dispatch(getUser(response.user.uid));

    await dispatch(updateAuthState());
  } catch (error: any) {
    console.log('login');
    toast.error(getFirebaseError(error.toString(), authErrors), {
      type: 'error',
      hideProgressBar: true,
    });
    throw error;
  }
});

export const resetIsVerificationEmailSent = createAction(RESET_IS_VERIFICATION_EMAIL_SENT);
