import AddCommandFolderModal from './AddCommandFolderModal';

import useAddCommandFolderModalContainer from './useAddCommandFolderModalContainer';

const AddCommandFolderModalContainer = () => {
  const { addingItemType, handleChangeAddingItemType } = useAddCommandFolderModalContainer();

  return (
    <AddCommandFolderModal addingItemType={addingItemType} handleChangeAddingItemType={handleChangeAddingItemType} />
  );
};

export default AddCommandFolderModalContainer;
