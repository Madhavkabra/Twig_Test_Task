'use client';

import Typography from '@mui/material/Typography';
import { Box, Grid, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import { UserAvatar } from '@/components/UserAvatar';

interface MobileProps {
  isMobile: boolean;
}

const MessageHeaderBox = styled(Box, {
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

const FlexGridItem = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledAvatar = styled(UserAvatar, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: prop => prop !== 'isMobile',
})<MobileProps>(({ isMobile }) => ({
  width: isMobile ? '28px' : '32px',
  height: isMobile ? '28px' : '32px',
  marginLeft: isMobile ? '8px' : '24px',
  textTransform: 'uppercase',

  fontSize: isMobile ? '14px' : '16px',
}));

const StyledStack = styled(Stack)(() => ({
  height: '28px',
  marginLeft: '12px',
}));

const EllipsisWrapperDiv = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
`;

const EllipsisTypography = styled(Typography)(() => ({
  display: 'table-cell',
}));

EllipsisTypography.defaultProps = {
  noWrap: true,
};

export default function MessagesSectionHeader(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MessageHeaderBox isMobile={isMobile}>
      <Grid container>
        <FlexGridItem item xs={12} md={10}>
          <FlexBox>
            <StyledAvatar displayName={'Twig User'} isMobile={isMobile} />
            <StyledStack direction="column" spacing={0} justifyContent="center">
              <EllipsisWrapperDiv>
                <EllipsisTypography variant={isMobile ? 'subtitle1' : 'h6'}>{'Twig User'}</EllipsisTypography>
              </EllipsisWrapperDiv>
            </StyledStack>
          </FlexBox>
        </FlexGridItem>
      </Grid>
    </MessageHeaderBox>
  );
}
