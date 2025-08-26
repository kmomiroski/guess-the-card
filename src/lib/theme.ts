import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Purple
      light: '#A78BFA',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#F59E0B', // Amber
      light: '#FCD34D',
      dark: '#D97706',
    },
    background: {
      default: '#0F0F23',
      paper: '#1A1A2E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA',
    },
    success: {
      main: '#10B981', // Emerald
    },
    error: {
      main: '#EF4444', // Red
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #7C3AED 0%, #F59E0B 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#A1A1AA',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#A1A1AA',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px 0 rgba(0, 0, 0, 0.35)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
          },
        },
        outlined: {
          borderColor: '#7C3AED',
          color: '#7C3AED',
          '&:hover': {
            borderColor: '#A78BFA',
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
          border: '1px solid rgba(124, 58, 237, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
          border: '1px solid rgba(124, 58, 237, 0.2)',
        },
      },
    },
  },
});
