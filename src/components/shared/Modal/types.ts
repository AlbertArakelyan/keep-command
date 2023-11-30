import { PropsWithChildren } from 'react';

export interface IModalContainerProps extends PropsWithChildren {
  title?: string;
}

export type IModalProps = IModalContainerProps;
