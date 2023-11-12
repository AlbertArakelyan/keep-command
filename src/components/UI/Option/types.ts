import { HTMLAttributes, PropsWithChildren } from 'react';

export interface IOptionProps extends PropsWithChildren, HTMLAttributes<HTMLLIElement> {
  value: string;
}
