import { IChatMessageDisplay } from '@/interfaces/chatMessage';
import Sanitize from '@/components/common/Sanitize';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material';

const StyledTypography = styled(Typography)`
  p {
    min-height: 20px;
  }
  ul {
    list-style-type: disc;
  }
`;

export default function ChatMessageText(props: IChatMessageDisplay): JSX.Element {
  const theme = useTheme();
  return (
    <StyledTypography variant="subtitle2" fontWeight={400} color={theme.palette.grey[900]}>
      <Sanitize html={props.content} />
    </StyledTypography>
  );
}
