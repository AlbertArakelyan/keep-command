import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/index';

import { changeTheme, selectTheme } from 'store/ui';
import { updateAuthState, selectIsAuth, selectUserId } from 'store/auth';
import { getUser, selectUser } from 'store/user';

import { AuthService } from 'services';

import { getPreferredTheme } from 'utils';

const useAppContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const theme = useAppSelector(selectTheme);
  const isAuth = useAppSelector(selectIsAuth);
  const userId = useAppSelector(selectUserId);
  const user = useAppSelector(selectUser);

  const isUserAuth = isAuth && user;

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

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [userId]);

  return {
    theme,
    isUserAuth,
  };
};

export type UseAppContainerType = ReturnType<typeof useAppContainer>;

export default useAppContainer;
