import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Auth, Home } from 'pages';

import { AuthLayout, BaseLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
