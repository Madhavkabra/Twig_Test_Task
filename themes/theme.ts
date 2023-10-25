import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
  }
  interface PaletteOptions {
    black: PaletteOptions['primary'];
  }
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      '100': '#E6E9F9',
      '200': '#BCC3F0',
      '300': '#929EE7',
      '400': '#7989E2', //light
      '500': '#4E63D9', //main
      '600': '#2B43CA', //dark
      '700': '#2235A0',
      '800': '#192776',
      '900': '#10194C',
      light: '#7989E2',
      main: '#4E63D9',
      dark: '#2B43CA',
    },
    info: {
      light: '#E0EAFF', //100
      main: '#6172F3', //500
      dark: '#444CE7', //600
    },
    warning: {
      light: '#FDB022', //400
      main: '#F79009', //500
      dark: '#DC6803', //600
    },
    error: {
      light: '#FEE4E2', //100
      main: '#F04438', //500
      dark: '#D92D20', //600
    },
    success: {
      light: '#D1FADF', //100
      main: '#12B76A', //500
      dark: '#039855', //600
    },
    grey: {
      '50': '#F9FAFB',
      '100': '#F3F4F6',
      '200': '#E5E7EB',
      '300': '#D1D5DB',
      '400': '#9CA3AF',
      '500': '#6B7280',
      '600': '#4B5563',
      '700': '#374151',
      '800': '#1F2937',
      '900': '#111827',
      A200: '#E5E5E5',
    },
    black: {
      '50': '#F6F6F6',
      '100': '#B6C0BF',
      A100: '#97A7AF',
      '200': '#E9E9E9',
      '500': '#2C2C2C',
    },
  },
});

const greyBorder = `1px solid ${theme.palette.grey[200]}`;

export const appTheme = createTheme(theme, {
  typography: {
    fontFamily: 'Inter',
    allVariants: {
      fontStyle: 'normal',
      color: theme.palette.grey[900],
    },
    h1: {
      fontWeight: 500,
      fontSize: '96px',
      lineHeight: '106px',
      letterSpacing: '0.5px',
      fontFamily: 'Merriweather',
    },
    h2: {
      fontWeight: 500,
      fontSize: '60px',
      lineHeight: '73px',
      letterSpacing: '0.5px',
      fontFamily: 'Merriweather',
    },
    h3: {
      fontWeight: 500,
      fontSize: '48px',
      lineHeight: '58px',
      letterSpacing: '0.5px',
      fontFamily: 'Merriweather',
    },
    h4: {
      fontWeight: 500,
      fontSize: '36px',
      lineHeight: '40px',
      letterSpacing: '0.5px',
      fontFamily: 'Merriweather',
    },
    h5: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '0.5px',
      fontFamily: 'Merriweather',
    },
    h6: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '0.5px',
      fontFamily: 'Merriweather',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Inter',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: 'Inter',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '28px',
      fontFamily: 'Inter',
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      fontFamily: 'Inter',
    },
    caption: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      fontFamily: 'Inter',
    },
    overline: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      textTransform: 'uppercase',
      fontFamily: 'Inter',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: theme.palette.common.white,
          borderBottom: greyBorder,
          padding: `${theme.spacing(3)} 0`,
          height: `${theme.spacing(9)}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          padding: `${theme.spacing(2)} 0`,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('lg')]: {
            padding: 0,
          },
          [theme.breakpoints.down('lg')]: {
            padding: `0 ${theme.spacing(3)}`,
          },
          [theme.breakpoints.down('sm')]: {
            padding: `0 ${theme.spacing(2)}`,
          },
        },
        disableGutters: {
          [theme.breakpoints.down('lg')]: {
            padding: 0,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 20,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '&::-webkit-scrollbar': {
            height: '1px',
            width: '4px',
            backgroundColor: 'transparent',
          },
          '&:hover::-webkit-scrollbar-thumb': {
            background: '#8f8f8f',
            '-webkit-border-radius': '1ex',
          },
          '&::-webkit-scrollbar-corner': {
            background: 'inherit',
          },
        },
      },
    },
  },
});
