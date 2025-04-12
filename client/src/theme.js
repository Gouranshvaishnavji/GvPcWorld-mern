import { createTheme } from '@mui/material/styles';

// Modern art-inspired theme with De Stijl influence
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Bold red
      light: '#FF4D4D',
      dark: '#CC0000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0000FF', // Bold blue
      light: '#4D4DFF',
      dark: '#0000CC',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#FFFF00', // Bold yellow
      light: '#FFFF4D',
      dark: '#CCCC00',
      contrastText: '#000000',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#FFFF00',
    },
    info: {
      main: '#0000FF',
    },
    success: {
      main: '#00FF00',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25rem',
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.00714em',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.00938em',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners for geometric look
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners for geometric look
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners for geometric look
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme; 