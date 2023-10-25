import { Box, styled } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { UserAvatar } from '@/components/UserAvatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

export const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledVisibilityIcon = styled(VisibilityOutlinedIcon)(({ theme }) => ({
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
