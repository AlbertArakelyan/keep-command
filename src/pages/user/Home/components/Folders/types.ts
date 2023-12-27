import { JSX } from 'react';

import { UseFoldersContainerType } from './useFoldersContainer';

export interface IFoldersProps extends UseFoldersContainerType {
  foldersListContent: JSX.Element[];
}
