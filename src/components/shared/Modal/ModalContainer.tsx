import { FC } from 'react';

import Modal from './Modal';

import { IModalContainerProps } from './types';

const ModalContainer: FC<IModalContainerProps> = ({ title, isOpen, onClose, children }) => {
  return isOpen ? (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      {children}
    </Modal>
  ) : null;
};

export default ModalContainer;
