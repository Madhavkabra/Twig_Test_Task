'use client';

import { appTheme } from '@/themes/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface MuiThemeProvider {
  children: ReactNode;
}

export default function MuiThemeProvider({ children }: MuiThemeProvider) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
