export interface IFolder {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  createdAt: number;
}

export type IFolderWithoutId = Omit<IFolder, 'id'>;

export type IFolderCreateData = Omit<Omit<IFolderWithoutId, 'createdAt'>, 'userId'>;
