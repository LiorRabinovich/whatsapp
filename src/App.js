import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: theme.palette.common.white,
      width: 1200,
      height: 'calc(100% - 40px)',
      minHeight: 500,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
      display: 'flex',

      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%'
      }
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
