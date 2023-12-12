import { FC } from 'react';

import ModalHeader from './ModalHeader';

import { IModalContainerProps } from '../../types';

const ModalContainer: FC<IModalContainerProps> = ({ title, onClose }) => {
  return <ModalHeader title={title} onClose={onClose} />;
};

export default ModalContainer;
