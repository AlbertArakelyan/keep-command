import { FC } from 'react';

import { Icon } from 'components';

import { ISelectProps } from './types';

const Select: FC<ISelectProps> = ({
  wrapperClassName = '',
  className = '',
  optionsListClassName = '',
  labelClassName = '',
  selectedOptionContent,
  isOpen,
  handleKeyDown,
  handleToggle,
  dropdownRef,
  selectedOptionRef,
  label,
  children,
}) => {
  return (
    <div
      className={`base-select-wrapper ${wrapperClassName}`}
      role="combobox"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <button
        className={`base-select ${className}`}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-controls="options"
        id="select"
        ref={selectedOptionRef}
      >
        {label && (
          <span
            className={`base-select__label ${
              selectedOptionContent ? 'base-select__label--not-empty' : ''
            } ${labelClassName}`}
          >
            {label}
          </span>
        )}
        <div className="base-select__value">{selectedOptionContent}</div>
        <div className={`base-select__chevron ${isOpen ? 'base-select__chevron--open' : ''}`}>
          <Icon name="chevron-down" />
        </div>
      </button>
      <div
        ref={dropdownRef}
        id="options"
        className={`base-select__options ${!isOpen ? 'base-select__options--hidden' : ''} ${optionsListClassName}`}
        role="listbox"
        aria-labelledby="select"
      >
        {children}
      </div>
    </div>
  );
};

export default Select;
