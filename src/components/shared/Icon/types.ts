import { icons } from './Icon';

export type IconsType = typeof icons;

export type IconsKeysType = keyof IconsType;

export interface IIconComponentProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export interface IIconProps extends IIconComponentProps {
  name: IconsKeysType;
}
