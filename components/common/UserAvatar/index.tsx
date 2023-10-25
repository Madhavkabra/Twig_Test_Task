'use client';

import { Avatar, AvatarProps, styled } from '@mui/material';
import { ReactNode, useState } from 'react';

interface IUserAvatarProps extends AvatarProps {
  displayName?: string;
  children?: ReactNode;
}

const StyledAvatar = styled(Avatar)(() => ({
  height: '40px',
  width: '40px',
}));

const extractInitials = (displayName: string) => {
  const parts = displayName.split(' ');
  if (parts.length > 1) {
    return `${parts[0][0]}${parts[1][0]}`;
  }
  return parts[0][0];
};

export const UserAvatar = ({ displayName, children }: IUserAvatarProps) => {
  const [profileSrc] = useState<string>();

  return (
    <StyledAvatar alt={displayName} src={profileSrc}>
      {children ? children : extractInitials(displayName ?? '')}
    </StyledAvatar>
  );
};
