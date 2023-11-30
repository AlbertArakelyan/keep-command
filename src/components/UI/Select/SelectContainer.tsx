import React, { FC, ReactElement } from 'react';

import Select from './Select';

import { ISelectContainerProps } from './types';
import { IOptionProps } from '../Option/types';

import useSelectContainer from './useSelectContainer';

const SelectContainer: FC<ISelectContainerProps> = ({
  selectedOption,
  onChange,
  className,
  wrapperClassName,
  optionsListClassName,
  children,
}) => {
  const {
    highlightedIndex,
    setHighlightedIndex,
    handleSelect,
    isOpen,
    handleKeyDown,
    handleToggle,
    dropdownRef,
    selectedOptionRef,
  } = useSelectContainer(onChange);

  const optionsContent = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<IOptionProps>, {
      onClick: () => handleSelect((child as React.ReactElement<IOptionProps>).props.value),
      onMouseEnter: () => setHighlightedIndex(null),
      'aria-selected': (child as React.ReactElement<IOptionProps>).props.value === selectedOption,
      className: `base-option ${
        (child as React.ReactElement<IOptionProps>).props.value === selectedOption
          ? 'base-option--selected'
          : highlightedIndex === index
          ? 'base-option--highlighted'
          : ''
      }`,
    });
  });

  const selectedOptionContent =
    optionsContent &&
    (optionsContent.find(
      (option) => (option as React.ReactElement<IOptionProps>).props.value === selectedOption
    ) as React.ReactElement<IOptionProps>);

  // TODO add filtered options for search

  return (
    <Select
      wrapperClassName={wrapperClassName}
      className={className}
      optionsListClassName={optionsListClassName}
      isOpen={isOpen}
      handleKeyDown={handleKeyDown}
      selectedOption={selectedOption}
      selectedOptionContent={selectedOptionContent?.props.children as ReactElement}
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
