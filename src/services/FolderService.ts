import { where, orderBy } from 'firebase/firestore';

import FirestoreService from './FirestoreService';

import { IFolderWithoutId, IFolder } from 'types';

class FolderService {
  static path = 'folders';

  static addFolder(folder: IFolderWithoutId, id?: string) {
    return FirestoreService.add(this.path, folder, id);
  }

  static getFolders(userId: string) {
    return FirestoreService.get<IFolder>(this.path, where('userId', '==', userId), orderBy('createdAt', 'desc'));
  }
}

export default FolderService;
