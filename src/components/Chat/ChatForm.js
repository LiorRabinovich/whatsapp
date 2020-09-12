import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            background: '#f6f6f6',
            height: 60,
            textAlign: 'center',
            position: 'relative',
            borderBottom: '1px solid #dbdbdb'
        }
    }
});

export default function ChatForm({ title }) {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            Form
        </footer>
    )
}