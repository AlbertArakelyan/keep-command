import { FC } from 'react';

import Folder from './Folder';

import useFolderContainer from './useFolderContainer';

import { IFolderContainerProps } from './types';

const FolderContainer: FC<IFolderContainerProps> = ({ name, description }) => {
  return <Folder name={name} description={description} />;
};

export default FolderContainer;
