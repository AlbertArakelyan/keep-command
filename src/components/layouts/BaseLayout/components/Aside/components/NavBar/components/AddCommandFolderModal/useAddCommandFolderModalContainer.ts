import { useNavigate } from 'react-router-dom';

import { useQuery } from 'hooks';

import { AddItemTypes } from 'constants/global';

const useAddCommandFolderModalContainer = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const addingItemType = query.get('addItem') as AddItemTypes | null;

  const handleChangeAddingItemType = (option: string) => {
    navigate({
      search: `addItem=${option}`,
    });
  };

  return {
    addingItemType,
    handleChangeAddingItemType,
  };
};

export type UseAddCommandFolderModalContainer = ReturnType<typeof useAddCommandFolderModalContainer>;

export default useAddCommandFolderModalContainer;
