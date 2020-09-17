import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatMessages from '../components/Chat/ChatMessages'
import ChatForm from '../components/Chat/ChatForm'
import DefaultLayout from '../layouts/DefaultLayout'
import { db } from '../firebase';

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
    const [title, setTitle] = useState('')
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('chats').doc(chatId)
            .onSnapshot((snapshot) => {
                setTitle(snapshot.data().title);
            })

        db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp')
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => doc.data()));
            })
    }, [chatId])

    function createMessage(message) {
        db.collection('chats').doc(chatId).set({
            lastMessageTimestamp: new Date(),
            lastMessage: message
        }, { merge: true })
        db.collection('chats').doc(chatId).collection('messages').add({
            timestamp: new Date(),
            content: message
        })
    }

    return (
        <DefaultLayout>
            <div className={classes.root}>
                <ChatHeader title={title} />
                <ChatMessages messages={messages} />
                <ChatForm createMessage={createMessage} />
            </div>
        </DefaultLayout>
    )
}