import { FC } from 'react';

import { IOptionProps } from './types';

const Option: FC<IOptionProps> = ({ value, children, onClick, ...props }) => {
  return (
    <div className="base-option-wrapper">
      <button className="base-option" value={value} onClick={onClick} role="option" {...props}>
        {children}
      </button>
    </div>
  );
};

export default Option;
