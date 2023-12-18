import AddCommandFolderModal from './AddCommandFolderModal';

import useAddCommandFolderModalContainer from './useAddCommandFolderModalContainer';

const AddCommandFolderModalContainer = () => {
  const { addingItemType, setAddingItemType } = useAddCommandFolderModalContainer();

  return <AddCommandFolderModal addingItemType={addingItemType} setAddingItemType={setAddingItemType} />;
};

export default AddCommandFolderModalContainer;
