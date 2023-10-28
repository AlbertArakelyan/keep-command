import { IUserSignUpData, IUserSignInData } from 'types';

export interface IAuthState {
  id?: string;
  isAuth: boolean;
  isVerificationEmailSent: boolean;
  isLoading: boolean;
  error: string | null;
}

// updateAuthState action
export interface IUpdateAuthStateReturnData {
  id: string | undefined;
  isAuth: boolean;
}

// signUp action
export type ISignUpPayloadData = IUserSignUpData;

// login action
export type ILoginPayloadData = IUserSignInData;
