import Auth from './Auth';

import useAuthContainer from './useAuthContainer';

const AuthContainer = () => {
  const { isSignUp, register, handleSubmit, handleFormSubmit, errors, values } = useAuthContainer();

  return (
    <Auth
      isSignUp={isSignUp}
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      errors={errors}
      values={values}
    />
  );
};

export default AuthContainer;
