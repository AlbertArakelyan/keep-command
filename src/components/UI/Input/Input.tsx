import { FC, forwardRef } from 'react';

import { IInputProps } from './types';

const Input: FC<IInputProps> = forwardRef(
  ({ label, wrapperClassName, labelClassName, error, isDirty, className, ...props }, ref = null) => {
    return (
      <div className={`base-input-wrapper ${error ? 'base-input-wrapper--error' : ''} ${wrapperClassName}`}>
        <input
          className={`base-input ${error ? 'base-input--error' : ''} ${
            isDirty ? 'base-input--dirty' : ''
          } ${className}`}
          // eslint-disable-next-line
          // @ts-ignore
          ref={ref}
          aria-labelledby={`${props.name}-label`}
          aria-invalid={!!error}
          aria-describedby={`${props.name}-hint`}
          {...props}
        />
        {label && (
          <span
            className={`base-input__label ${labelClassName} ${
              props.value?.toString().length ? 'base-input__label--not-empty' : ''
            }`}
            id={`${props.name}-label`}
          >
            {label}
          </span>
        )}
        {error && (
          <span className="base-input__error-message" id={`${props.name}-hint`}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
