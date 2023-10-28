import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updatePassword,
  updateEmail,
  deleteUser,
  onAuthStateChanged,
  sendEmailVerification,
  getAuth,
  User,
  NextOrObserver,
} from 'firebase/auth';

class AuthService {
  static login(email: string, paswword: string) {
    return signInWithEmailAndPassword(this.auth, email, paswword);
  }

  static signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  static sendEmailVerification(user: User) {
    return sendEmailVerification(user);
  }

  static logout() {
    return signOut(this.auth);
  }

  static changePassword(password: string) {
    const user = this.auth.currentUser;

    if (!user) {
      return;
    }

    return updatePassword(user, password);
  }

  static changeEmail(email: string) {
    const user = this.auth.currentUser;

    if (!user) {
      return;
    }

    return updateEmail(user, email);
  }

  static deleteUser() {
    const user = this.auth.currentUser;

    if (!user) {
      return;
    }

    return deleteUser(user);
  }

  static userId() {
    return this.auth.currentUser?.uid;
  }

  static authUser() {
    return this.auth.currentUser;
  }

  static isAuth() {
    return !!this.auth.currentUser;
  }

  static onAuthChanged(callback: NextOrObserver<User | null>) {
    return onAuthStateChanged(this.auth, callback);
  }

  static get auth() {
    return getAuth();
  }
}

export default AuthService;
