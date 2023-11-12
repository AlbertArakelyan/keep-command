import React, { FC } from 'react';

import Select from './Select';

import { ISelectContainerProps } from './types';
import { IOptionProps } from '../Option/types';

import useSelectContainer from './useSelectContainer';

const SelectContainer: FC<ISelectContainerProps> = ({ selectedOption, onChange, children }) => {
  const { highlightedIndex, handleSelect, isOpen, handleKeyDown, handleToggle, dropdownRef, selectedOptionRef } =
    useSelectContainer(onChange);

  const optionsContent = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<IOptionProps>, {
      onClick: () => handleSelect((child as React.ReactElement<IOptionProps>).props.value),
      'aria-selected': (child as React.ReactElement<IOptionProps>).props.value === selectedOption,
      className:
        (child as React.ReactElement<IOptionProps>).props.value === selectedOption
          ? 'selected'
          : highlightedIndex === index
          ? 'highlighted'
          : '',
    });
  });

  // TODO create selectedOptionContent based on selectedOption (or a component)

  return (
    <Select
      isOpen={isOpen}
      handleKeyDown={handleKeyDown}
      selectedOption={selectedOption}
      onChange={onChange}
      handleToggle={handleToggle}
      dropdownRef={dropdownRef}
      selectedOptionRef={selectedOptionRef}
    >
      {optionsContent}
    </Select>
  );
};

export default SelectContainer;
