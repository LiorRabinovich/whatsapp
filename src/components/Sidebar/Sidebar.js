import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidebarHeader from './SidebarHeader'
import SidebarSearch from './SidebarSearch'
import SidebarFriends from './SidebarFriends'

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

    return (
        <aside className={classes.root}>
            <SidebarHeader />
            <SidebarSearch />
            <SidebarFriends />
        </aside>
    )
}