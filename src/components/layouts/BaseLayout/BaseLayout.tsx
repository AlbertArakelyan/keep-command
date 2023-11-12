import { Outlet } from 'react-router-dom';

import { Header, Aside } from './components';

import styles from './BaseLayout.module.scss';

const BaseLayout = () => {
  return (
    <div className={styles['base-layout']}>
      <Header />
      <Aside />
      <main className={styles['main']}>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
