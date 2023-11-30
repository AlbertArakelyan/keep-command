import { FC } from 'react';

import { Icon } from 'components';

import { IModalHeaderProps } from './types';

const ModalHeader: FC<IModalHeaderProps> = ({ title }) => {
  return (
    <div className="modal-header">
      <h2 className="modal-header__title">{title}</h2>
      <button className="modal-header__close">
        <Icon className="modal-header__close-icon" name="close" />
      </button>
    </div>
  );
};

export default ModalHeader;
