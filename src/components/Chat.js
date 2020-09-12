import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        }
    }
});

export default function Chat() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ChatHeader />
            <ChatMessages />
        </div>
    )
}