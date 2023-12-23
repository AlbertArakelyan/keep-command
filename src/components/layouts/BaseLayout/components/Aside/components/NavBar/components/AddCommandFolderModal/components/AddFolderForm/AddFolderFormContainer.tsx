import { FC } from 'react';

import AddFolderForm from './AddFolderForm';

import useAddCommandFolderFormContainer from './useAddFolderFormContainer';

import { IAddFolderFormContainer } from './types';

const AddFolderFormContainer: FC<IAddFolderFormContainer> = ({ ...props }) => {
  const { register, handleSubmit, values, handleFormSubmit } = useAddCommandFolderFormContainer();

  return (
    <AddFolderForm
      register={register}
      handleSubmit={handleSubmit}
      values={values}
      handleFormSubmit={handleFormSubmit}
      {...props}
    />
  );
};

export default AddFolderFormContainer;
