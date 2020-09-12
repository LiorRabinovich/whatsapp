import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Chat from './components/Chat';

const useStyles = makeStyles((theme) => {
  return {
    root: {
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
    },
    main: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#f8f9fa'
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.main}>
          <Route path="/" exact component={Intro} />
          <Route path="/room/:roomId" component={Chat} />
        </main>
      </div>
    </Router>
  );
}

export default App;
