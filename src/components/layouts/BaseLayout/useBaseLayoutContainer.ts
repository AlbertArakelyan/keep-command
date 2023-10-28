import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/index';

const useBaseLayoutContainer = () => {
  const navigate = useNavigate();

  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
  }, [isAuth]);
};

export default useBaseLayoutContainer;
