import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        }
    }
});

export default function ChatForm({ title }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    )
}