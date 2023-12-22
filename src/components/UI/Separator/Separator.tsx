import { FC } from 'react';

import { ISeparatorProps } from './types';

const Separator: FC<ISeparatorProps> = ({ className = '', ...props }) => {
  return <div className={`base-separator ${className}`} {...props}></div>;
};

export default Separator;
