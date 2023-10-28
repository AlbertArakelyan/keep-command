import App from './App';

import useAppContainer from './useAppContainer';

const AppContainer = () => {
  const { theme } = useAppContainer();

  return <App theme={theme} />;
};

export default AppContainer;
