export interface IUserSignInData {
  email: string;
  password: string;
}

export interface IUserSignUpData extends IUserSignInData {
  name: string;
  confirmPassword: string;
}

export interface IUserForgotPasswordData {
  email: string;
}
