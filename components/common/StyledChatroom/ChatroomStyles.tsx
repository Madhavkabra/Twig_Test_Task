import { Box, Container, Divider, Grid, List, ListItemAvatar, Typography, styled } from '@mui/material';
import { UserAvatar } from '../UserAvatar';

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    padding: `0 0`,
  },
}));

// 72px is the header bar.
export const StyledGrid = styled(Grid)`
  height: calc(var(--app-height) - 72px - 1px);
`;

export const EllipsisWrapperDiv = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
  padding-right: 4px;
`;

export const EllipsisTypography = styled(Typography)(() => ({
  display: 'table-cell',
}));

export const StyledListItemAvatar = styled(ListItemAvatar)(() => ({
  minWidth: '40px',
  marginRight: '0px',
}));

export const StyledAvatar = styled(UserAvatar)(() => ({
  height: '24px',
  width: '24px',
  marginRight: '4px',

  '&.MuiAvatar-root': {
    fontSize: '10px',
  },
}));

export const MessageContentBox = styled(Box)(({ theme }) => ({
  height: '100%',
  overflowY: 'scroll',
  borderLeft: `1px solid ${theme.palette.grey[200]}`,
  borderRight: `1px solid ${theme.palette.grey[200]}`,
  overflowWrap: 'break-word',
  p: {
    marginBlockStart: '0px',
    marginBlockEnd: '0px',
  },
  backgroundColor: theme.palette.grey[50],
  '&::-webkit-scrollbar': {
    height: '1px',
    width: '4px',
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#8f8f8f',
    '-webkit-border-radius': '1ex',
  },
  '&::-webkit-scrollbar-corner': {
    background: 'inherit',
  },
}));

export const DateTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
}));

export const DateDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.grey[200],
  margin: '8px 12px 6px 12px',
}));

export const StyledList = styled(List)(() => ({
  paddingBottom: '0px',
}));
