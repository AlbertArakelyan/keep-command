import { FC } from 'react';

import { Icon } from 'components';

import { IFolderProps } from './types';

import styles from './Folder.module.scss';

const Folder: FC<IFolderProps> = ({ name, description }) => {
  return (
    <div className={styles['folder']}>
      <button className={styles['folder__header']}>
        <h3 className={styles['folder__title']}>{name}</h3>
        <p className={styles['folder__description']}>{description}</p>
      </button>
      <div className={styles['folder__actions-bar']}>
        <button className={styles['folder__action']}>
          <Icon className={styles['folder__action-icon']} name="edit" />
        </button>
        <button className={styles['folder__action']}>
          <Icon className={styles['folder__action-icon']} name="delete" />
        </button>
      </div>
    </div>
  );
};

export default Folder;
