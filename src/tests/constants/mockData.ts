import { IUserSignUpData, IUserSignInData } from 'types';

export const mockSignUpData: IUserSignUpData = {
  name: 'Albert Arakelyan',
  email: 'albert@mail.loc',
  password: '12345678',
  confirmPassword: '12345678',
};

export const mockSignInData: IUserSignInData = {
  email: 'albert@mail.loc',
  password: '12345678',
};
