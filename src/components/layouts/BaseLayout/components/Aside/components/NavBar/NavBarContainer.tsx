import NavBar from './NavBar';
import { NavBarLink } from './components';

import useNavBarContainer from './useNavBarContainer';

import { navLinks } from 'constants/navLinks';

const NavBarContainer = () => {
  const { handleAddButtonClick, isAddCommandFolderModalOpen, addCommandFolderModalTitle, handleModalClose } =
    useNavBarContainer();

  const navLinksContent = navLinks.map((navLink) => {
    return <NavBarLink key={navLink.href} href={navLink.href} label={navLink.label} icon={navLink.icon} />;
  });

  return (
    <NavBar
      navLinksContent={navLinksContent}
      handleAddButtonClick={handleAddButtonClick}
      isAddCommandFolderModalOpen={isAddCommandFolderModalOpen}
      addCommandFolderModalTitle={addCommandFolderModalTitle}
      handleModalClose={handleModalClose}
    />
  );
};

export default NavBarContainer;
