import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { StateProvider } from './store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33b7f6'
    },
    secondary: {
      main: '#07bc4c',
      contrastText: '#fff'
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
        }
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StateProvider>
      <App />
    </StateProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
