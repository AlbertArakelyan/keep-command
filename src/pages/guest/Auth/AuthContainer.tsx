import Auth from './Auth';

import useAuthContainer from './useAuthContainer';

const AuthContainer = () => {
  const { isSignUp, register, handleSubmit, handleFormSubmit, errors, values, isLoading, isVerificationEmailSent } =
    useAuthContainer();

  return (
    <Auth
      isSignUp={isSignUp}
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      errors={errors}
      values={values}
      isLoading={isLoading}
      isVerificationEmailSent={isVerificationEmailSent}
    />
  );
};

export default AuthContainer;
