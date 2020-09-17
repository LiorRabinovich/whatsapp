import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#f6f6f6',
            height: 60
        },
        form: {
            display: 'flex',
            flex: 2,

            '& textarea': {
                width: '100%',
                resize: 'none',
                border: 'none',
                outline: 'none',
                fontSize: 14,
                padding: theme.spacing(1.5),
                borderRadius: theme.spacing(2),
                fontFamily: theme.typography.fontFamily
            }
        },
    }
});

export default function ChatForm({ createMessage }) {
    const classes = useStyles();
    const [message, setMessage] = useState('')

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey && message.trim() !== '') {
            e.preventDefault();
            createMessage(message);
            setMessage('')
        }
    }

    return (
        <footer className={classes.root}>
            <div>
                <IconButton><InsertEmoticonIcon fontSize="small" /></IconButton>
                <IconButton><AttachFileIcon fontSize="small" /></IconButton>
            </div>
            <form className={classes.form}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message" rows="1"></textarea>
            </form>
            <div><IconButton><MicIcon fontSize="small" /></IconButton></div>
        </footer>
    )
}