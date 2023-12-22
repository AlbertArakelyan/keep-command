import { FC } from 'react';

import AddFolderForm from './AddFolderForm';

import { IAddFolderFormContainer } from './types';

const AddFolderFormContainer: FC<IAddFolderFormContainer> = ({ ...props }) => {
  return <AddFolderForm {...props} />;
};

export default AddFolderFormContainer;
