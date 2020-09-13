import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage'
import { db } from '../../firebase';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            flex: 1,
            backgroundColor: '#e5ddd5',
            position: 'relative',
            overflow: 'hidden',

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
        },
        list: {
            display: 'flex',
            margin: 0,
            flexDirection: 'column',
            overflowY: 'auto',
            width: '100%',
            padding: `${theme.spacing(2.5)}px 7%`,
            position: 'relative',
            zIndex: 1
        }
    }
});

export default function ChatMessages({ chatId }) {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const listRef = useRef(null);

    useEffect(() => {
        db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp')
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => doc.data()));
                listRef.current.scrollTop = listRef.current.scrollHeight;
            })
    }, [chatId])

    return (
        <section className={classes.root}>
            <ul ref={listRef} className={classes.list}>
                {messages.map((message, messageIndex) => <ChatMessage key={messageIndex} message={message} />)}
            </ul>
        </section>
    )
}