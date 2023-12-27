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
export type IAddFolderPayloadData = IFolderCreateData;
export type IAddFolderReturnData = IFolder;
