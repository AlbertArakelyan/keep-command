import styles from './Header.module.scss';

import { SearchBar } from './components';
import { Avatar } from 'components';

const Header = () => {
  return (
    <header className={styles['header']}>
      <SearchBar />
      <Avatar size="md" imageSize={200} />
    </header>
  );
};

export default Header;
