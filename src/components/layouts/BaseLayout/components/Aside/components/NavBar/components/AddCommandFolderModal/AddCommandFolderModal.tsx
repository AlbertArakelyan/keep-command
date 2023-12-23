import { FC } from 'react';

import { Select, Option, Separator, Icon } from 'components';
import { AddFolderForm } from './components';

import { AddItemTypes } from 'constants/global';

import { IAddCommandFolderModalProps } from './types';

import styles from './AddCommandFolderModal.module.scss';

const AddCommandFolderModal: FC<IAddCommandFolderModalProps> = ({ addingItemType, handleChangeAddingItemType }) => {
  return (
    <div>
      <Select
        labelClassName={styles['add-command-folder-modal__select-label']}
        selectedOption={addingItemType}
        label="Type"
        onChange={handleChangeAddingItemType}
      >
        <Option value="command">
          <Icon className={styles['add-command-folder-modal__option-icon']} name="terminal" />
          <span>Command</span>
        </Option>
        <Option value="folder">
          <Icon className={styles['add-command-folder-modal__option-icon']} name="folder" />
          <span>Folder</span>
        </Option>
      </Select>
      <Separator className={styles['add-command-folder-modal__separator']} />
      {addingItemType === AddItemTypes.folder ? (
        <AddFolderForm className={styles['add-command-folder-modal__form']} />
      ) : (
        <div>command modal</div>
      )}
    </div>
  );
};

export default AddCommandFolderModal;
