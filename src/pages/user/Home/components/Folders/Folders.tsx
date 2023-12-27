import { FC } from 'react';

import { IFoldersProps } from './types';

import styles from './Folders.module.scss';

const Folders: FC<IFoldersProps> = ({ foldersListContent }) => {
  return <div className={styles['folders']}>{foldersListContent}</div>;
};

export default Folders;
