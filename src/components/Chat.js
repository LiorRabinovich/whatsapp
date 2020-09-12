import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        }
    }
});

export default function Chat() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Chat
        </div>
    )
}