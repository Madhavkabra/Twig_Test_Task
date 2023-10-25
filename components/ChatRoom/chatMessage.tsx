import { IChatMessageDisplay } from '@/interfaces/chatMessage';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, styled, useTheme } from '@mui/material';
import { UserAvatar } from '@/components/common/UserAvatar';

interface IChatMessageProps extends IChatMessageDisplay {
  children: React.ReactNode;
}

export const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledVisibilityIcon = styled(VisibilityOutlinedIcon)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  width: '16px',
  height: '16px',
  color: theme.palette.grey[700],
}));

export const MessageTiteTypography = styled(Typography)(({ theme }) => ({
  display: 'inline-flex',
  marginRight: theme.spacing(1),
  color: theme.palette.grey[700],
  fontWeight: 600,
  fontSize: 14,
}));

export const TimeTypography = styled(Typography)(({ theme }) => ({
  display: 'inline-flex',
  height: '16px',
  marginTop: '2px',
  color: theme.palette.grey[400],
}));

export const StyledListItemAvatar = styled(ListItemAvatar)(() => ({
  minWidth: '44px',
}));

export const StyledListItem = styled(ListItem)(() => ({
  paddingTop: '0px',
  paddingBottom: '0px',
  backgroundColor: 'transparent',
}));

export const StyledAvatar = styled(UserAvatar)(({ theme }) => ({
  width: '36px',
  height: '36px',

  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '32px',
  },
}));

export const StyledChatBox = styled(Box)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

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
