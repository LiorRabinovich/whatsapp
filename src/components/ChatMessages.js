import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message'
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1,
            backgroundColor: '#e5ddd5',
            position: 'relative',
            margin: 0,
            padding: `${theme.spacing(2.5)}px 7%`,
            display: 'flex',
            flexDirection: 'column',

            '&::after': {
                content: '" "',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.06,
                backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-light_686b98c9fdffef3f63127759e2057750.png")'
            }
        }
    }
});

export default function ChatMessages() {
    const classes = useStyles();

    return (
        <ul className={classes.root}>
            <Message content="test test test" />
            <Message content="test test test 2" me />
            <Message content="test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2test test test 2" me />
        </ul>
    )
}