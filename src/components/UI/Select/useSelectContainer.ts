import { useState, useRef, useEffect, KeyboardEvent } from 'react';

const useSelectContainer = (onChange: (option: string) => void) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const selectedOptionRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      handleToggle();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevHighlightedIndex) => Math.max(0, prevHighlightedIndex - 1));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevHighlightedIndex) => prevHighlightedIndex + 1);
      // TODO accept options.length as argument
      // setHighlightedIndex((prevIndex) => Math.min(options.length - 1, prevIndex + 1));
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      if (selectedOptionRef.current === e.target) {
        return e.stopPropagation();
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    highlightedIndex,
    handleKeyDown,
    isOpen,
    handleSelect,
    handleToggle,
    dropdownRef,
    selectedOptionRef,
  };
};

export type UseSelectContainerType = Omit<ReturnType<typeof useSelectContainer>, 'handleSelect' | 'highlightedIndex'>;

export default useSelectContainer;
