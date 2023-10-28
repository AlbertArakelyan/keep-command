import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  labelClassName?: string;
  label?: string;
  error?: string;
  isDirty?: boolean;
}
