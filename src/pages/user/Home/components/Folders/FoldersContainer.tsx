import Folders from './Folders';
import { Folder } from './components';

import useFoldersContainer from './useFoldersContainer';

const FoldersContainer = () => {
  const { foldersList } = useFoldersContainer();

  const foldersListContent = foldersList.map((folder) => {
    return <Folder key={folder.id} name={folder.name} description={folder.description} />;
  });

  return <Folders foldersListContent={foldersListContent} />;
};

export default FoldersContainer;
