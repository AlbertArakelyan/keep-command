import { FC } from 'react';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({ className, btnColor = 'primary', variant = 'default', isLoading, children, disabled, ...props }) => {
  return (
    <button
      className={`base-button base-button--${btnColor} base-button--${variant} ${isLoading ? 'base-button--loading' : ''} ${className}`}
      tabIndex={isLoading || disabled ? -1 : 0}
      disabled={disabled || isLoading}
      aria-disabled={isLoading || disabled} // Or props.disabled
      {...props}
    >
      <div className={`base-button__content`}>
        {children}
      </div>
      <span className="base-button__loader">L...</span>
    </button>
  );
};

export default Button;