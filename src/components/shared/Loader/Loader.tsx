import { FC } from 'react';

import { ILoaderProps } from './types';

const Loader: FC<ILoaderProps> = ({ size = 'normal' }) => {
  return (
    <div className={`loader-wrapper loader-wrapper--${size}`}>
      <svg viewBox="22 22 44 44" className="loader">
        <circle cx={44} cy={44} r={20.2} fill="none" strokeWidth={3.6} className="loader-circle"></circle>
      </svg>
    </div>
  );
};

export default Loader;
