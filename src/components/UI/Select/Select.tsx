import { FC } from 'react';

import { ISelectProps } from './types';

const Select: FC<ISelectProps> = ({
  selectedOption,
  isOpen,
  handleKeyDown,
  handleToggle,
  dropdownRef,
  selectedOptionRef,
  children,
}) => {
  return (
    <div className="custom-select" role="combobox" aria-expanded={isOpen} tabIndex={0} onKeyDown={handleKeyDown}>
      <div
        className="selected-option"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-controls="options"
        id="selected-option"
        ref={selectedOptionRef}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <ul ref={dropdownRef} id="options" role="listbox" aria-labelledby="selected-option">
          {children}
        </ul>
      )}
    </div>
  );
};

export default Select;
