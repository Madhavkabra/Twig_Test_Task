'use client';

import { Grid, useMediaQuery, useTheme } from '@mui/material';
import {
  EllipsisTypography,
  EllipsisWrapperDiv,
  FlexBox,
  FlexGridItem,
  MessageHeaderBox,
  StyledHeaderAvatar,
  StyledStack,
} from './styles';

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
            <StyledHeaderAvatar displayName={'Twig User'} isMobile={isMobile} />
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
