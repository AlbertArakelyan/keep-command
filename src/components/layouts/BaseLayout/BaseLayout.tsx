import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div>
      <h2>Base layout</h2>
      <Outlet />
    </div>
  );
};

export default BaseLayout;