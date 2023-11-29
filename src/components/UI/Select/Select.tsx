import { FC } from 'react';

import { ISelectProps } from './types';

const Select: FC<ISelectProps> = ({
  wrapperClassName,
  className,
  optionsListClassName,
  selectedOptionContent,
  isOpen,
  handleKeyDown,
  handleToggle,
  dropdownRef,
  selectedOptionRef,
  children,
}) => {
  return (
    <div className="base-select-wrapper" role="combobox" aria-expanded={isOpen} tabIndex={0} onKeyDown={handleKeyDown}>
      <button
        className="base-select"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-controls="options"
        id="select"
        ref={selectedOptionRef}
      >
        <span className={`base-select__label ${selectedOptionContent ? 'base-select__label--not-empty' : ''}`}>
          Label
        </span>
        <div className="base-select__value">{selectedOptionContent}</div>
      </button>
      <div
        ref={dropdownRef}
        id="options"
        className={`base-select__options ${!isOpen ? 'base-select__options--hidden' : ''}`}
        role="listbox"
        aria-labelledby="select"
      >
        {children}
      </div>
    </div>
  );
};

export default Select;
