'use client';

import { IChatMessageDisplay } from '@/interfaces/chatMessage';
import Sanitize from '@/components/Sanitize';
import { useTheme } from '@mui/material';
import { StyledMessageTypography } from './styles';

export default function ChatMessageText(props: IChatMessageDisplay): JSX.Element {
  const theme = useTheme();
  return (
    <StyledMessageTypography variant="subtitle2" fontWeight={400} color={theme.palette.grey[900]}>
      <Sanitize html={props.content} />
    </StyledMessageTypography>
  );
}
