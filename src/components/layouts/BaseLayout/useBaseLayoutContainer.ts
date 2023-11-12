import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/index';

import { selectIsAuth } from 'store/auth';

const useBaseLayoutContainer = () => {
  const navigate = useNavigate();

  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
  }, [isAuth]);
};

export default useBaseLayoutContainer;
