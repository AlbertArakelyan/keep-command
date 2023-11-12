import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from 'components';

import { NavBarLinkPropsType } from './types';

import styles from './NavBarLink.module.scss';

const NavBarLink: FC<NavBarLinkPropsType> = ({ href, label, icon }) => {
  return (
    <li className={styles['nav-bar__link-wrapper']}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles['nav-bar__link']} ${styles['nav-bar__link--active']}` : styles['nav-bar__link']
        }
        to={href}
      >
        <div className={styles['nav-bar__link-icon-wrapper']}>
          <Icon className={styles['nav-bar__link-icon']} name={icon} />
        </div>
        <p className={styles['nav-bar__link-label']}>{label}</p>
      </NavLink>
    </li>
  );
};

export default NavBarLink;
