import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            background: '#ededed',
            padding: '0 15px'
        },
        icons: {
            '& button': {
                color: '#919191',
            }
        }
    }
});

export default function SidebarHeader() {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
            <div className={classes.icons}>
                <IconButton><DonutLargeIcon fontSize="small" /></IconButton>
                <IconButton><ChatIcon fontSize="small" /></IconButton>
                <IconButton><MoreVertIcon fontSize="small" /></IconButton>
            </div>
        </header>
    )
}