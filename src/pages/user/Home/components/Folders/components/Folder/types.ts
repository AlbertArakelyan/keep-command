import { HTMLAttributes } from 'react';

import { IFolderCreateData } from 'types';

export interface IFolderContainerProps extends IFolderCreateData, HTMLAttributes<HTMLDivElement> {}

export type IFolderProps = IFolderContainerProps;
