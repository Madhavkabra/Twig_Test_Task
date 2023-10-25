'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

const StyledAppBar = styled(AppBar)`
  padding: 0;
`;

const Logo = styled('img')(({ theme }) => ({
  height: theme.spacing(4.5),
  marginRight: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    height: theme.spacing(4),
  },
}));

export default function Header() {
  return (
    <StyledAppBar position="fixed">
      <Container>
        <Toolbar disableGutters variant="dense">
          <Stack alignItems="center" direction="row">
            <Link href={'/'}>
              <Logo
                alt="chatapp"
                src="https://assets-global.website-files.com/651bd2776f6e865b2f3c65dc/651c84974f7f320f97af324a_twig-logo-dark.png"
                sizes="(max-width: 991px) 100vw, 93.1640625px"
                srcSet="https://assets-global.website-files.com/651bd2776f6e865b2f3c65dc/651c84974f7f320f97af324a_twig-logo-dark-p-500.png 500w, https://assets-global.website-files.com/651bd2776f6e865b2f3c65dc/651c84974f7f320f97af324a_twig-logo-dark.png 12000w"
              />
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
