import { HTMLAttributes, PropsWithChildren } from 'react';

export interface IOptionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  value: string;
}
