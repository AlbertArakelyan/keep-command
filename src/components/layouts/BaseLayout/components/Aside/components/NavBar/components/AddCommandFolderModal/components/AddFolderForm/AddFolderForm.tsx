import { FC } from 'react';

import { Input, Button } from 'components';

import { IAddFolderForm } from './types';

import styles from './AddFolderForm.module.scss';

const AddFolderForm: FC<IAddFolderForm> = ({
  className = '',
  loadingAddFolder,
  register,
  handleSubmit,
  values,
  errors,
  handleFormSubmit,
  ...props
}) => {
  return (
    <form className={className} onSubmit={handleSubmit(handleFormSubmit)} {...props}>
      <Input
        label="Name"
        labelClassName={styles['add-folder-form__input-label']}
        error={errors.name?.message}
        {...register('name')}
        isDirty={!!values.name}
      />
      <Input
        label="Description"
        labelClassName={styles['add-folder-form__input-label']}
        error={errors.description?.message}
        {...register('description')}
        isDirty={!!values.description}
      />
      <Button className={styles['add-folder-form__submit']} isLoading={loadingAddFolder}>
        Add
      </Button>
    </form>
  );
};

export default AddFolderForm;
