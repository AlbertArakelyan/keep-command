import { FC } from 'react';

import { Select, Option, Separator } from 'components';
import { AddFolderForm } from './components';

import { AddItemTypes } from 'constants/global';

import { IAddCommandFolderModalProps } from './types';

import styles from './AddCommandFolderModal.module.scss';

const AddCommandFolderModal: FC<IAddCommandFolderModalProps> = ({ addingItemType, handleChangeAddingItemType }) => {
  console.log(addingItemType);

  return (
    <div>
      <Select
        labelClassName={styles['add-command-folder-modal__select-label']}
        selectedOption={addingItemType}
        label="Type"
        onChange={handleChangeAddingItemType}
      >
        <Option value="command">Command</Option>
        <Option value="folder">Folder</Option>
      </Select>
      <Separator className={styles['add-command-folder-modal__separator']} />
      {addingItemType === AddItemTypes.folder ? <AddFolderForm /> : <div>command modal</div>}
    </div>
  );
};

export default AddCommandFolderModal;
