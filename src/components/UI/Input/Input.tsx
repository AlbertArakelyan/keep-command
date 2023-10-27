import { FC, forwardRef } from 'react';

import { IInputProps } from './types';

const Input: FC<IInputProps> = forwardRef(
  ({ label, wrapperClassName, labelClassName, error, className, ...props }, ref = null) => {
    return (
      <div className={`base-input-wrapper ${error ? 'base-input-wrapper--error' : ''} ${wrapperClassName}`}>
        <input
          className={`base-input ${error ? 'base-input--error' : ''} ${className}`}
          // @ts-ignore
          ref={ref}
          aria-labelledby="name-label"
          aria-label="Name" // TODO take from props
          {...props}
        />
        {label && (
          <span
            className={`base-input__label ${labelClassName} ${props.value?.toString().length ? 'base-input__label--not-empty' : ''}`}
            id="name-label"
          >
            {label}
          </span>
        )}
        {error && (
          <span className="base-input__error-message">{error}</span>
        )}
      </div>
    );
  }
);

export default Input;