import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/index';

import { getFolders, selectList } from 'store/folder';

const useFoldersContainer = () => {
  const dispatch = useAppDispatch();

  const foldersList = useAppSelector(selectList);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  return {
    foldersList,
  };
};

export type UseFoldersContainerType = Omit<ReturnType<typeof useFoldersContainer>, 'foldersList'>;

export default useFoldersContainer;
