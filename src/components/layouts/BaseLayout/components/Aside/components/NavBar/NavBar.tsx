import { FC } from 'react';

import { Button, Modal } from 'components';
import { AddCommandFolderModal } from './components';

import { INavBarProps } from './types';

import styles from './NavBar.module.scss';

const NavBar: FC<INavBarProps> = ({
  navLinksContent,
  handleAddButtonClick,
  isAddCommandFolderModalOpen,
  addCommandFolderModalTitle,
  handleModalClose,
}) => {
  return (
    <nav className={styles['nav-bar']}>
      <div className={styles['nav-bar__add-button-wrapper']}>
        <Button variant="rounded" onClick={handleAddButtonClick}>
          + Add Command
        </Button>
      </div>
      <ul className={styles['nav-bar__links']}>{navLinksContent}</ul>
      <Modal isOpen={isAddCommandFolderModalOpen} title={addCommandFolderModalTitle} onClose={handleModalClose}>
        <AddCommandFolderModal />
      </Modal>
    </nav>
  );
};

export default NavBar;
