import { FC } from 'react';

import Modal from './Modal';

import { IModalContainerProps } from './types';

const ModalContainer: FC<IModalContainerProps> = ({ title, children }) => {
  return <Modal title={title}>{children}</Modal>;
};

export default ModalContainer;
