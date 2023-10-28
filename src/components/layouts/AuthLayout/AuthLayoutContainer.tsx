import AuthLayout from './AuthLayout';

import useAuthLayoutContainer from './useAuthLayoutContainer';

const AuthLayoutContainer = () => {
  useAuthLayoutContainer();

  return <AuthLayout />;
};

export default AuthLayoutContainer;
