import React, { PropsWithChildren } from 'react';

import { UseSelectContainerType } from './useSelectContainer';

import { IOptionProps } from '../Option/types';

export interface ISelectContainerProps extends PropsWithChildren {
  selectedOption: string | null;
  selectedOptionContent?: React.ReactElement<IOptionProps, string | React.JSXElementConstructor<any>> | null;
  onChange: (option: string) => void;
  className?: string;
  wrapperClassName?: string;
  optionsListClassName?: string;
  labelClassName?: string;
  label?: string;
}

export interface ISelectProps extends ISelectContainerProps, UseSelectContainerType {}
