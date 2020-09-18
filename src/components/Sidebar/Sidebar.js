import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { db } from '../../firebase'
import SidebarHeader from './SidebarHeader'
import SidebarSearch from './SidebarSearch'
import SidebarChats from './SidebarChats'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            background: theme.palette.common.white,
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            borderRight: '1px solid #dadada'
        }
    }
});

export default function Sidebar() {
    const classes = useStyles();
    const [allChats, setAllChats] = useState([])
    const [searchResultsChats, setSearchResultsChats] = useState(null)

    useEffect(() => {
        const unsubscribe = db.collection('chats')
            .orderBy('lastMessageCreatedAt', 'desc')
            .onSnapshot((snapshot) => {
                setAllChats(snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }));
            })

        return () => {
            unsubscribe();
        }
    }, [])

    function searchChat(e) {
        const { value } = e.target;

        if (!value) {
            return setSearchResultsChats(null);
        }

        const searchResults = allChats.filter((chat) => {
            return chat.title.toLowerCase().includes(value.toLowerCase())
        })
        setSearchResultsChats(searchResults)
    }

    return (
        <aside className={classes.root}>
            <SidebarHeader />
            <SidebarSearch searchChat={searchChat} />
            <SidebarChats allChats={allChats} searchResultsChats={searchResultsChats} />
        </aside>
    )
}