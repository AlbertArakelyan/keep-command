import { Routes, Route } from 'react-router-dom';

import { Auth } from 'pages';

import { AuthLayout, BaseLayout } from 'components';

const App = () => {
  return (
    <div className={`App`}>
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