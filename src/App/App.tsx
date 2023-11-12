import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Auth, Home, Profile, Settings } from 'pages';

import { AuthLayout, BaseLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme, isAuth }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        {isAuth ? (
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        ) : (
          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
        )}
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
