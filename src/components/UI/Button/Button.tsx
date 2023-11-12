import { FC } from 'react';

import { Loader } from 'components';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  className = '',
  btnColor = 'primary',
  variant = 'default',
  isLoading,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`base-button base-button--${btnColor} base-button--${variant} ${
        isLoading ? 'base-button--loading' : ''
      } ${className}`}
      tabIndex={isLoading || disabled ? -1 : 0}
      disabled={disabled || isLoading}
      {...props}
    >
      <div className={`base-button__content`}>{children}</div>
      {isLoading && <Loader className="base-button__loader" size="small" />}
    </button>
  );
};

export default Button;
