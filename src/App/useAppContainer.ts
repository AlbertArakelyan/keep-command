import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/index';

import { changeTheme } from 'store/ui';
import { updateAuthState } from 'store/auth';

import { AuthService } from 'services';

import { getPreferredTheme } from 'utils';

const useAppContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { theme } = useAppSelector((state) => state.ui);
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();

    if (theme !== preferredTheme) {
      dispatch(changeTheme(preferredTheme));
    }
  }, []);

  useEffect(() => {
    AuthService.onAuthChanged((user) => {
      dispatch(updateAuthState());

      if (!user) {
        navigate('/auth');
      }
    });
  }, []);

  return {
    theme,
    isAuth,
  };
};

export type UseAppContainerType = ReturnType<typeof useAppContainer>;

export default useAppContainer;
