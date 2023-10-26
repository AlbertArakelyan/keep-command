import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Auth } from 'pages';

import { AuthLayout, BaseLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<div>main page</div>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;