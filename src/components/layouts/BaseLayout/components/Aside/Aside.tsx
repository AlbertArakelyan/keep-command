import { Link } from 'react-router-dom';

import { NavBar } from './components';

import styles from './Aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles['aside']}>
      <div className={styles['aside__logo']}>
        <Link className={styles['aside__logo-wrapper']} to="/">
          <img className={styles['aside__logo-img']} src="/images/logo.svg" alt="Logo" width={60} height={60} />
        </Link>
      </div>
      <NavBar />
    </aside>
  );
};

export default Aside;
