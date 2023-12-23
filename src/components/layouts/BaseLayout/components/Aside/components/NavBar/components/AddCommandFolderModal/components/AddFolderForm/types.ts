import { FormHTMLAttributes } from 'react';

import { UseAddCommandFolderFormContainerType } from './useAddFolderFormContainer';

export type IAddFolderFormContainer = FormHTMLAttributes<HTMLFormElement>;

export interface IAddFolderForm extends IAddFolderFormContainer, UseAddCommandFolderFormContainerType {}
