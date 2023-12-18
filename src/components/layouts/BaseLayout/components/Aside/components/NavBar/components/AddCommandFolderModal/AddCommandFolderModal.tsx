import { FC } from 'react';

import { IAddCommandFolderModalProps } from './types';

const AddCommandFolderModal: FC<IAddCommandFolderModalProps> = ({ addingItemType, setAddingItemType }) => {
  return (
    <div>
      <div>some select for selecting addItemType</div>
      <form>some form based on the type ({addingItemType})</form>
      <button>some submit button</button>
    </div>
  );
};

export default AddCommandFolderModal;
