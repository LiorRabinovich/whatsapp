import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { auth, googleProvider } from '../firebase'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            height: '100%',
            width: '100%'
        },
        paper: {
            margin: 'auto',
            padding: theme.spacing(10),
            textAlign: 'center'
        },
        logo: {
            fontSize: 100,
            color: '#07bc4c'
        },
        googleButton: {
            background: '#cf4332',
            color: '#fff',

            '&:hover, &focus': {
                background: '#cf4332',
                color: '#fff',
            }
        }
    }
});

export default function Intro() {
    const classes = useStyles();

    function handleClick() {
        try {
            auth.signInWithPopup(googleProvider)
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <WhatsAppIcon className={classes.logo} />
                <h1>Sign in to Whatsapp</h1>
                <Button
                    onClick={handleClick}
                    className={classes.googleButton}
                    startIcon={<AccountCircleIcon />}
                >Sign in with Google</Button>
            </Paper>
        </div>
    )
}