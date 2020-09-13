import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatMessages from '../components/Chat/ChatMessages'
import ChatForm from '../components/Chat/ChatForm'

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
    const { chatId } = useParams();

    return (
        <div className={classes.root}>
            <ChatHeader title={chatId} chatId={chatId} />
            <ChatMessages chatId={chatId} />
            <ChatForm chatId={chatId} />
        </div>
    )
}