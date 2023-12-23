import { FC } from 'react';

import { Input, Button } from 'components';

import { IAddFolderForm } from './types';

import styles from './AddFolderForm.module.scss';

const AddFolderForm: FC<IAddFolderForm> = ({
  className = '',
  register,
  handleSubmit,
  values,
  handleFormSubmit,
  ...props
}) => {
  return (
    <form className={className} onSubmit={handleSubmit(handleFormSubmit)} {...props}>
      <Input
        label="Name"
        labelClassName={styles['add-folder-form__input-label']}
        {...register('name')}
        isDirty={!!values.name}
      />
      <Input
        label="Description"
        labelClassName={styles['add-folder-form__input-label']}
        {...register('description')}
        isDirty={!!values.description}
      />
      <Button className={styles['add-folder-form__submit']}>Add</Button>
    </form>
  );
};

export default AddFolderForm;
