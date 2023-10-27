import { useQuery } from 'hooks';

import { AuthModes, AuthQueries } from 'constants/auth';

const useAuthContainer = () => {
  const query = useQuery();

  const authmode = query.get(AuthQueries.authmode);

  const isSignUp = authmode === AuthModes.signup;

  return {
    isSignUp
  };
};

export type UseAuthContainerType = Omit<ReturnType<typeof useAuthContainer>, 'unregister'>;

export default useAuthContainer;