import { PropsWithChildren } from 'react';

export interface IModalContainerProps extends PropsWithChildren {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export type IModalProps = IModalContainerProps;
