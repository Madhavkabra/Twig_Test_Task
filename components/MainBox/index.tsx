'use client';

import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: '72px',
  backgroundColor: theme.palette.common.white,
  minHeight: 'calc(100vh - 86px)',
}));

interface IMainBoxProps {
  children: React.ReactNode;
}

function MainBox(props: IMainBoxProps): JSX.Element {
  return <StyledBox>{props.children}</StyledBox>;
}

export default MainBox;
