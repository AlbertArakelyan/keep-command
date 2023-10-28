import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { ColorType, VariantType } from 'types';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  isLoading?: boolean;
  btnColor?: ColorType;
}
