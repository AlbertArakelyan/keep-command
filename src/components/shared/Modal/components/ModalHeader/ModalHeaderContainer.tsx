import { FC } from 'react';

import ModalHeader from './ModalHeader';

import { IModalContainerProps } from '../../types';

const ModalContainer: FC<IModalContainerProps> = ({ title }) => {
  return <ModalHeader title={title} />;
};

export default ModalContainer;
