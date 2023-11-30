import { FC } from 'react';

import { ModalHeader } from './components';

import { IModalProps } from './types';

const Modal: FC<IModalProps> = ({ title, children }) => {
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content-wrapper" role="dialog" aria-label="Add Command">
          <div className="modal-content">
            <ModalHeader title={title} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
