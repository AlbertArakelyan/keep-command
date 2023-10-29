import { HTMLAttributes } from 'react';

import { LoaderSizeType } from 'types';

export interface ILoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: LoaderSizeType;
}
