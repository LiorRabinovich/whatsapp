import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            background: '#ededed',
            padding: '0 15px'
        }
    }
});

export default function Navbar({ children }) {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            {children}
        </header>
    )
}