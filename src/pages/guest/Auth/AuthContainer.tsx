import Auth from './Auth';

import useAuthContainer from './useAuthContainer';

const AuthContainer = () => {
  const {
    isSignUp
  } = useAuthContainer();

  return (
    <Auth
      isSignUp={isSignUp}
    />
  );
};

export default AuthContainer;