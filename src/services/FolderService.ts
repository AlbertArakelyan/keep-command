import FirestoreService from './FirestoreService';

import { IFolderWithoutId } from 'types';

class FolderService {
  static path = 'folders';

  static addFolder(folder: IFolderWithoutId, id?: string) {
    return FirestoreService.add(this.path, folder, id);
  }
}

export default FolderService;
