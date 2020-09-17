import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';

import Navbar from '../Navbar'
import SettingsButton from '../SettingsButton'
import { auth } from '../../firebase';

const useStyles = makeStyles((theme) => {
    return {
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
        <Navbar>
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
            <div className={classes.icons}>
                <IconButton><DonutLargeIcon fontSize="small" /></IconButton>
                <IconButton><ChatIcon fontSize="small" /></IconButton>
                <SettingsButton logout={() => auth.signOut()} />
            </div>
        </Navbar>
    )
}