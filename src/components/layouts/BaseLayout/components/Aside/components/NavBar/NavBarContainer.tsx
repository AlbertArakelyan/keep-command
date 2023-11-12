import NavBar from './NavBar';

import { NavBarLink } from './components';

import { navLinks } from 'constants/navLinks';

const NavBarContainer = () => {
  const navLinksContent = navLinks.map((navLink) => {
    return <NavBarLink key={navLink.href} href={navLink.href} label={navLink.label} icon={navLink.icon} />;
  });

  return <NavBar navLinksContent={navLinksContent} />;
};

export default NavBarContainer;
