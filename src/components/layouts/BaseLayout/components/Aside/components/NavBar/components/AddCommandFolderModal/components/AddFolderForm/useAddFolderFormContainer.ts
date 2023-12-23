import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { folderSchema } from 'utils';

import { IFolderCreateData } from 'types';

const useAddCommandFolderFormContainer = () => {
  const { register, handleSubmit, watch } = useForm<IFolderCreateData>({
    resolver: yupResolver(folderSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IFolderCreateData) => {
    console.log('data', data);
  };

  return {
    register,
    handleSubmit,
    values,
    handleFormSubmit,
  };
};

export type UseAddCommandFolderFormContainerType = ReturnType<typeof useAddCommandFolderFormContainer>;

export default useAddCommandFolderFormContainer;
