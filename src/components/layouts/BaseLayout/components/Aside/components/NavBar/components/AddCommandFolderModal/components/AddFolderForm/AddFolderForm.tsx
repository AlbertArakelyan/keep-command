import { FC } from 'react';

import { IAddFolderForm } from './types';

const AddFolderForm: FC<IAddFolderForm> = ({ className = '', ...props }) => {
  return (
    <form className={`test ${className}`} {...props}>
      <div>folder</div>
      <button>add</button>
    </form>
  );
};

export default AddFolderForm;
