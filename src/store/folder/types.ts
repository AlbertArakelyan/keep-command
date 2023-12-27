import { NavigateFunction } from 'react-router-dom';

import { IFolder, IFolderCreateData } from 'types';

export interface IFolderState {
  list: IFolder[];
  loading: {
    addFolder: boolean;
    getFolders: boolean;
  };
  error: {
    addFolder: string | null;
    getFolders: string | null;
  };
}

// addFolder action
export interface IAddFolderPayloadData {
  data: IFolderCreateData;
  navigate: NavigateFunction;
}

export type IAddFolderReturnData = IFolder;
