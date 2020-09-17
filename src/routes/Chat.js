import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatMessages from '../components/Chat/ChatMessages'
import ChatForm from '../components/Chat/ChatForm'
import DefaultLayout from '../layouts/DefaultLayout'
import { db } from '../firebase';
import { store } from '../store'

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
    const { state } = useContext(store);
    const { chatId } = useParams();
    const [title, setTitle] = useState('')
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribeChats = db.collection('chats').doc(chatId)
            .onSnapshot((snapshot) => {
                setTitle(snapshot.data().title);
            })

        const unsubscribeMessages = db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp')
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }));
            })

        return () => {
            unsubscribeChats();
            unsubscribeMessages();
        }
    }, [chatId])

    function createMessage(message) {
        db.collection('chats').doc(chatId).set({
            lastMessageTimestamp: new Date(),
            lastMessage: message
        }, { merge: true })
        db.collection('chats').doc(chatId).collection('messages').add({
            username: state.user.displayName,
            uid: state.user.uid,
            timestamp: new Date(),
            content: message
        })
    }

    function updateRead(messageId) {
        db.collection('chats').doc(chatId).collection('messages').doc(messageId).set({
            read: true
        }, { merge: true });
    }

    return (
        <DefaultLayout>
            <div className={classes.root}>
                <ChatHeader title={title} />
                <ChatMessages updateRead={updateRead} uid={state.user.uid} messages={messages} />
                <ChatForm createMessage={createMessage} />
            </div>
        </DefaultLayout>
    )
}