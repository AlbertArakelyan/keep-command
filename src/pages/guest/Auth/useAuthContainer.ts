import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInSchema, signUpSchema } from 'utils';

import { AuthModes, AuthQueries } from 'constants/auth';

import { IUserSignInData, IUserSignUpData } from 'types';

const useAuthContainer = () => {
  const query = useQuery();

  const authmode = query.get(AuthQueries.authmode);
  const isSignUp = authmode === AuthModes.signup;

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
    } else {
      const sendData = data as IUserSignInData;
    }
  };

  useEffect(() => {
    if (!isSignUp) {
      unregister('name');
      unregister('confirmPassword');
    }
  }, [isSignUp]);

  return {
    isSignUp,
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    values,
  };
};

export type UseAuthContainerType = Omit<ReturnType<typeof useAuthContainer>, 'unregister'>;

export default useAuthContainer;
