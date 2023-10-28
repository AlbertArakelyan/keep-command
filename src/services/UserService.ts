import FirestoreService from './FirestoreService';

import { IUserWithoutId, IUser } from 'types';

class UserService {
  static path = 'users';

  // Firestore Database
  static addUser(user: IUserWithoutId, id: string) {
    return FirestoreService.add(this.path, user, id);
  }

  static getUser(id: string) {
    return FirestoreService.getDoc<IUser>(this.path, id);
  }

  // Storage
}

export default UserService;
