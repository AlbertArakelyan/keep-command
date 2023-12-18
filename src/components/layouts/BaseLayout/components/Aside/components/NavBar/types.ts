import { JSX } from 'react';

import { UseNavBarContainerType } from './useNavBarContainer';

export interface INavBarProps extends UseNavBarContainerType {
  navLinksContent: JSX.Element[];
}
