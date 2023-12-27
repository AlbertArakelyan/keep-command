import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import { addFolder, selectLoadingAddFolder } from 'store/folder';

import { folderSchema } from 'utils';

import { IFolderCreateData } from 'types';

const useAddCommandFolderFormContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loadingAddFolder = useAppSelector(selectLoadingAddFolder);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFolderCreateData>({
    resolver: yupResolver(folderSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: IFolderCreateData) => {
    dispatch(addFolder({ data, navigate }));
  };

  return {
    loadingAddFolder,
    register,
    handleSubmit,
    values,
    errors,
    handleFormSubmit,
  };
};

export type UseAddCommandFolderFormContainerType = ReturnType<typeof useAddCommandFolderFormContainer>;

export default useAddCommandFolderFormContainer;
