import { IUser } from 'types';

export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

// addUser action
export type IAddUserPayloadData = IUser;

// getUser action
export type IGetUserReturnData = IUser;
