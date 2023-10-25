import { Box, Grid, Stack, styled } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { UserAvatar } from '@/components/UserAvatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { IMessageFooterBoxProps, MobileProps } from './interface';

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

export const StyledMessageTypography = styled(Typography)`
  p {
    min-height: 20px;
  }
  ul {
    list-style-type: disc;
  }
`;

export const MessageFooterBox = styled(Box, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: prop => prop !== 'isMobile' && prop !== 'isDisabled',
})<IMessageFooterBoxProps>(({ isMobile, theme, isDisabled }) => ({
  backgroundColor: theme.palette.grey[50],
  border: isMobile ? 'none' : `1px solid ${theme.palette.grey[200]}`,
  borderTop: 'none',
  paddingTop: '1px',
  paddingLeft: isMobile ? '0px' : '16px',
  paddingRight: isMobile ? '0px' : '16px',
  paddingBottom: isMobile ? '0px' : '16px',
  position: 'relative',
  '.tox-tinymce': {
    border: isMobile ? 'none' : `1px solid ${theme.palette.grey[300]}`,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    marginBlockEnd: '0px',
  },
  '.tox .tox-toolbar': {
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'flex-end',
  },
  '.tox .tox-toolbar__primary': {
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'flex-end',
    backgroundImage: 'none',
  },
  '.tox:not(.tox-tinymce-inline).tox-tinymce--toolbar-bottom div.tox-editor-header': {
    borderTop: 'none',
  },
  '.tox .tox-toolbar__group button:last-child': {
    backgroundColor: theme.palette.primary[500],
    marginLeft: '8px',
    cursor: 'pointer',
    textTransform: 'none',
    fontWeight: 500,
    lineHeight: '16px',
    fontFamily: 'Inter',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
    fontSize: '14px',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    height: '32px',
    color: theme.palette.common.white,
    borderRadius: '36px',
  },
  '.tox .tox-toolbar__group button': {
    cursor: 'pointer',
  },
  '.tox .tox-toolbar__group button:not(:last-child)': {
    height: '32px',
    width: '32px',
  },
  '.tox .tox-toolbar__group button:hover': {
    backgroundColor: theme.palette.grey[100],
    borderRadius: '100%',
  },
  '.tox .tox-toolbar__group button:last-child:hover': {
    backgroundColor: theme.palette.primary[600],
    borderRadius: '36px',
  },
  '.tox .tox-toolbar__group button:last-child span': {
    fontWeight: 500,
    cursor: 'pointer',
  },
  '.tox .tox-tbtn svg': {
    height: '20px',
    width: '20px',
    stroke: theme.palette.grey[500],
    fill: theme.palette.grey[500],
  },
  '.tox .tox-tbtn svg:hover': {
    fill: theme.palette.grey[500],
  },
  'button.tox-tbtn.tox-tbtn--select.tox-tbtn--disabled[aria-disabled="true"]': {
    backgroundColor: '#bdbdbd',
  },
  'button.tox-tbtn.tox-tbtn--disabled .tox-icon.tox-tbtn__icon-wrap svg path': {
    stroke: '#bdbdbd',
  },
  '.tox-toolbar--scrolling.tox-tbtn--disabled': {
    backgroundColor: theme.palette.grey[200],
  },
  'iframe.tox-edit-area__iframe': {
    backgroundColor: isDisabled ? `${theme.palette.grey[200]}` : 'none',
  },
  'div.tox-toolbar__primary': {
    backgroundColor: isDisabled ? `${theme.palette.grey[200]}` : 'none',
  },
  'div[data-alloy-vertical-dir="bottomtotop"].tox-editor-header': {
    backgroundColor: isDisabled ? `${theme.palette.grey[200]}` : 'none',
  },
}));

export const MessageHeaderBox = styled(Box, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: prop => prop !== 'isMobile',
})<MobileProps>(({ isMobile, theme }) => ({
  minHeight: isMobile ? '52px' : '68px',
  paddingLeft: isMobile ? '8px' : '0px',
  paddingRight: isMobile ? '8px' : '0px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1px',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderTop: 0,
}));

export const FlexGridItem = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledHeaderAvatar = styled(UserAvatar, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: prop => prop !== 'isMobile',
})<MobileProps>(({ isMobile }) => ({
  width: isMobile ? '28px' : '32px',
  height: isMobile ? '28px' : '32px',
  marginLeft: isMobile ? '8px' : '24px',
  textTransform: 'uppercase',

  fontSize: isMobile ? '14px' : '16px',
}));

export const StyledStack = styled(Stack)(() => ({
  height: '28px',
  marginLeft: '12px',
}));

export const EllipsisWrapperDiv = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
`;

export const EllipsisTypography = styled(Typography)(() => ({
  display: 'table-cell',
}));
