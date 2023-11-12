import styles from './SearchBar.module.scss';

import { Icon } from 'components';

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-bar__icon-wrapper']}>
        <Icon className={styles['search-bar__icon']} name="search" />
      </div>
      <input className={styles['search-bar__input']} type="text" tabIndex={0} placeholder="Search" />
    </div>
  );
};

export default SearchBar;
