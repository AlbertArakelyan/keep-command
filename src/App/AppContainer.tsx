import App from './App';

import useAppContainer from './useAppContainer';

const AppContainer = () => {
  const { theme, isUserAuth } = useAppContainer();

  return <App theme={theme} isUserAuth={isUserAuth} />;
};

export default AppContainer;
