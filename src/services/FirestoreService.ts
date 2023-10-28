import {
  doc,
  collection,
  query,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  QueryConstraint,
  DocumentReference,
  CollectionReference,
  getFirestore,
} from 'firebase/firestore';

class FirestoreService {
  static async get<T extends { id: string }>(path: string, ...getQuery: QueryConstraint[]): Promise<T[] | undefined> {
    const dbCollection = collection(this.db, path);

    const pathWithQuery = getQuery.length ? query(dbCollection, ...getQuery) : dbCollection;

    const response = await getDocs(pathWithQuery);

    const docs = response.docs;

    if (!docs.length) {
      return [];
    }

    return docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    }) as T[];
  }

  static async getDoc<T extends { id: string }>(path: string, id: string): Promise<T> {
    const newDoc = doc(this.db, path, id);

    const response = await getDoc(newDoc);

    if (!response.exists()) {
      throw new Error(`Item doesn't exist.`);
    }

    return {
      id: response.id,
      ...response.data(),
    } as T;
  }

  static async add<T extends object>(path: string, data: T, id?: string) {
    const newDoc = id ? doc(this.db, path, id) : collection(this.db, path);

    if (id) {
      return setDoc(newDoc as DocumentReference, data);
    }

    return addDoc(newDoc as CollectionReference, data);
  }

  static async edit<T extends object>(path: string, data: T, id: string) {
    const newDoc = doc(this.db, path, id);

    return updateDoc(newDoc, data);
  }

  static async delete(path: string, id: string) {
    const newDoc = doc(this.db, path, id);

    return deleteDoc(newDoc);
  }

  static get db() {
    return getFirestore();
  }
}

export default FirestoreService;
