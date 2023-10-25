'use client';

import { IChatMessageDisplay } from '@/interfaces/chatMessage';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  FlexBox,
  MessageTiteTypography,
  StyledAvatar,
  StyledChatBox,
  StyledListItem,
  StyledListItemAvatar,
  StyledVisibilityIcon,
  TimeTypography,
} from './styles';
import { useTheme } from '@mui/material';

interface IChatMessageProps extends IChatMessageDisplay {
  children: React.ReactNode;
}

export default function ChatMessage(props: IChatMessageProps): JSX.Element {
  const theme = useTheme();

  return (
    <StyledChatBox>
      <StyledListItem alignItems="flex-start">
        <StyledListItemAvatar>
          <StyledAvatar displayName={props.userDisplayName} />
        </StyledListItemAvatar>

        <ListItemText
          primary={
            <React.Fragment>
              {props.visibleMessage !== undefined && (
                <FlexBox>
                  <StyledVisibilityIcon />
                  <Typography component="span" variant="caption" fontWeight={400} color={theme.palette.grey[700]}>
                    {props.visibleMessage}
                  </Typography>
                </FlexBox>
              )}
              <FlexBox>
                <MessageTiteTypography variant="subtitle1">{props.messageTitle}</MessageTiteTypography>
                <TimeTypography variant="caption">{props.time}</TimeTypography>
              </FlexBox>
            </React.Fragment>
          }
          secondary={props.children}
          secondaryTypographyProps={{ component: 'div' }}
        />
      </StyledListItem>
    </StyledChatBox>
  );
}
