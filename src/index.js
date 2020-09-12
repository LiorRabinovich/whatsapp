import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33b7f6',
    },
    action: {
      selected: '#ebebeb',
      hover: '#f5f5f5'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #root': {
          width: '100%',
          height: '100%'
        },
        '*::-webkit-scrollbar': {
          width: 7
        },
    
        '*::-webkit-scrollbar-thumb': {
          background: 'rgba(0,0,0,.2)'
        },
        '#root': {
          background: 'linear-gradient(180deg, #dddbd1, #d2dbdc)',
          width: '100%',
          height: '100%',

          '&::before': {
            background: '#009688',
            height: 130,
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            content: '""',
            display: 'block'
          }
        }
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
