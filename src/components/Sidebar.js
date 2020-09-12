import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidebarHeader from './SidebarHeader'
import Search from './Search'
import FriendsList from './FriendsList'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: 400,
        }
    }
});

export default function Sidebar() {
    const classes = useStyles();

    return (
        <aside className={classes.root}>
            <SidebarHeader />
            <Search />
            <FriendsList />
        </aside>
    )
}