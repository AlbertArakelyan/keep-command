import { FC } from 'react';

import { IOptionProps } from './types';

const Option: FC<IOptionProps> = ({ value, children, onClick, ...props }) => {
  return (
    <li role="option" value={value} onClick={onClick} {...props}>
      {children}
    </li>
  );
};

export default Option;
