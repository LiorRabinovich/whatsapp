import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Navbar from '../Navbar';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        },
        avatarContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            marginRight: 10
        },
        h1: {
            fontSize: 16,
            fontWeight: 400
        },
        icons: {
            '& button': {
                color: '#919191',
            }
        }
    }
});

export default function ChatHeader({ chatInfo }) {
    const classes = useStyles();

    return (
        <Navbar>
            <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar} alt="Lior Rabinovich" src={chatInfo.avatar} />
                <h1 className={classes.h1}>{chatInfo.title}</h1>
            </div>
            <div className={classes.icons}>
                <IconButton><SearchIcon fontSize="small" /></IconButton>
                <IconButton><MoreVertIcon fontSize="small" /></IconButton>
            </div>
        </Navbar>
    )
}