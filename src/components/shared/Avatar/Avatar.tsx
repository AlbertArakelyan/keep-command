import { FC } from 'react';

import { Icon } from 'components';

import { IAvatarProps } from './types';

const Avatar: FC<IAvatarProps> = ({ src, size, imageSize = 48, className = '' }) => {
  return (
    <div className={`avatar ${size ? `avatar--${size}` : ''} ${className}`}>
      {src ? (
        <img className="avatar__image" src={src} alt="Avatar" width={imageSize} height={imageSize} />
      ) : (
        <Icon className="avatar__svg" name="user-astronaut" />
      )}
    </div>
  );
};

export default Avatar;
