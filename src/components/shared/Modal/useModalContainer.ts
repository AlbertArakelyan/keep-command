import { useEffect } from 'react';

const useModalContainer = (isOpen?: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
};

export default useModalContainer;
