import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from './Intro';
import Chat from './Chat';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1,
            display: 'flex',
            background: '#f8f9fa'
        }
    }
});

export default function AppMain() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Router>
                <Route path="/" exact component={Intro} />
                <Route path="/room/:roomId" component={Chat} />
            </Router>
        </main>
    )
}