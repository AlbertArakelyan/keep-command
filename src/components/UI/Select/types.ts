import { PropsWithChildren } from 'react';

import { UseSelectContainerType } from './useSelectContainer';

export interface ISelectContainerProps extends PropsWithChildren {
  selectedOption: string;
  onChange: (option: string) => void;
}

export interface ISelectProps extends ISelectContainerProps, UseSelectContainerType {}
