import { FC } from 'react';

import { ModalHeader } from './components';

import { IModalProps } from './types';

const Modal: FC<IModalProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <div className="modal">
      {/* TODO: The upper div will become a portal root */}
      <div className="modal-overlay">
        <div className="modal-content-wrapper" role="dialog" aria-label="Add Command">
          <div className="modal-content">
            <ModalHeader title={title} onClose={onClose} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
