import { useNavigate } from 'react-router-dom';

import { useQuery } from 'hooks';

import { AddItemTypes, AddItemQuiries } from 'constants/global';

const useNavBarContainer = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const isAddCommandFolderModalOpen = !!query.get('addItem');
  const addCommandFolderModalTitle = 'Add';

  const handleAddButtonClick = () => {
    navigate({
      search: `${AddItemQuiries.addItem}=${AddItemTypes.folder}`,
    });
  };

  const handleModalClose = () => {
    navigate({
      search: '',
    });
  };

  return {
    isAddCommandFolderModalOpen,
    addCommandFolderModalTitle,
    handleAddButtonClick,
    handleModalClose,
  };
};

export type UseNavBarContainerType = ReturnType<typeof useNavBarContainer>;

export default useNavBarContainer;
