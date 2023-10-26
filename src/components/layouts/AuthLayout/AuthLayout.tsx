import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <h2>Auth layout</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;