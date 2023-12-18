import { useState } from 'react';

import { useQuery } from 'hooks';

import { AddItemTypes } from 'constants/global';

const useAddCommandFolderModalContainer = () => {
  const query = useQuery();

  const addItemType = query.get('addItem') as AddItemTypes | null;

  const [addingItemType, setAddingItemType] = useState<AddItemTypes | null>(addItemType);

  return {
    addingItemType,
    setAddingItemType,
  };
};

export type UseAddCommandFolderModalContainer = ReturnType<typeof useAddCommandFolderModalContainer>;

export default useAddCommandFolderModalContainer;
