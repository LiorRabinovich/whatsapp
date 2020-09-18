import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
    const { uid, displayName } = state.user;
    const { chatId } = useParams();
    const [chatInfo, setChatInfo] = useState('')
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribeChats = db.collection('chats')
            .doc(chatId)
            .onSnapshot((snapshot) => {
                setChatInfo({ id: snapshot.id, ...snapshot.data() });
            })

        const unsubscribeMessages = db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('createdAt')
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
        const createdAt = new Date();

        db.collection('chats').doc(chatId).set({
            lastMessageCreatedAt: createdAt,
            lastMessage: message
        }, { merge: true })
        db.collection('chats').doc(chatId).collection('messages').add({
            displayName,
            uid,
            createdAt,
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
                <ChatHeader chatInfo={chatInfo} />
                <ChatMessages
                    updateRead={updateRead}
                    uid={uid}
                    messages={messages} />
                <ChatForm createMessage={createMessage} />
            </div>
        </DefaultLayout>
    )
}