import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import {
  signUp,
  login,
  resetIsVerificationEmailSent,
  selectIsLoading,
  selectIsVerificationEmailSent,
} from 'store/auth';

import { signInSchema, signUpSchema } from 'utils';

import { AuthModes, AuthQueries } from 'constants/auth';

import { IUserSignInData, IUserSignUpData } from 'types';

const useAuthContainer = () => {
  const query = useQuery();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const isVerificationEmailSent = useAppSelector(selectIsVerificationEmailSent);

  const authMode = query.get(AuthQueries.authmode);
  const isSignUp = authMode === AuthModes.signup;

  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserSignInData | IUserSignUpData>({
    resolver: yupResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IUserSignInData | IUserSignUpData) => {
    if (isSignUp) {
      const sendData = data as IUserSignUpData;
      dispatch(signUp(sendData));
    } else {
      const sendData = data as IUserSignInData;
      dispatch(login(sendData));
    }
  };

  useEffect(() => {
    if (!isSignUp) {
      unregister('name');
      unregister('confirmPassword');
    }
  }, [isSignUp]);

  useEffect(() => {
    if (!isSignUp) {
      dispatch(resetIsVerificationEmailSent());
    }
  }, [isSignUp]);

  return {
    isSignUp,
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    values,
    isLoading,
    isVerificationEmailSent,
  };
};

export type UseAuthContainerType = Omit<ReturnType<typeof useAuthContainer>, 'unregister'>;

export default useAuthContainer;
