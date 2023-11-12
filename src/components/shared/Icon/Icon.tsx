import { FC } from 'react';

// Components
import { Search, Terminal, UserAstronaut, Profile, Cogs } from './icons';

// Types
import { IIconProps } from './types';

export const icons = {
  search: Search,
  terminal: Terminal,
  'user-astronaut': UserAstronaut,
  profile: Profile,
  cogs: Cogs,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default Icon;
