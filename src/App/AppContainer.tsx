import App from './App';

import useAppContainer from './useAppContainer';

const AppContainer = () => {
  const { theme, isAuth } = useAppContainer();

  return <App theme={theme} isAuth={isAuth} />;
};

export default AppContainer;
