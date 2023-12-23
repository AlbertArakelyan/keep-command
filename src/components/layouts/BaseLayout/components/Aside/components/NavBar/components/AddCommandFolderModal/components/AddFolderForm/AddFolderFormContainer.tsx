import { FC } from 'react';

import AddFolderForm from './AddFolderForm';

import useAddCommandFolderFormContainer from './useAddFolderFormContainer';

import { IAddFolderFormContainer } from './types';

const AddFolderFormContainer: FC<IAddFolderFormContainer> = ({ ...props }) => {
  const { loadingAddFolder, register, handleSubmit, values, errors, handleFormSubmit } =
    useAddCommandFolderFormContainer();

  return (
    <AddFolderForm
      loadingAddFolder={loadingAddFolder}
      register={register}
      handleSubmit={handleSubmit}
      values={values}
      errors={errors}
      handleFormSubmit={handleFormSubmit}
      {...props}
    />
  );
};

export default AddFolderFormContainer;
