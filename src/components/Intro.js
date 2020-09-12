import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            margin: 'auto',
            textAlign: 'center'
        },
        h1: {
            fontSize: 34,
            fontWeight: 300,
            color: '#525252'
        },
        subtitle: {
            color: 'rgba(0,0,0,.4)',
            width: 442,
            fontSize: 13,
            marginTop: 0,
            marginBottom: theme.spacing(3),
        },
        footer: {
            color: 'rgba(0,0,0,.4)',
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            borderTop: '1px solid rgba(0,0,0,.1)',
            paddingTop: '24px',
            alignItems: 'center',
            fontSize: 13,

            '& span, & a': {
                display: 'inline-block',
                marginLeft: theme.spacing(1)
            },

            '& a': {
                textDecoration: 'none',
                color: '#07bc4c'
            }
        }
    }
});

export default function Intro() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img alt="intro" src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" />
            <h1 className={classes.h1}>Keep your phone connected</h1>
            <p className={classes.subtitle}>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>
            <p className={classes.footer}>
                <ComputerIcon />
                <span>WhatsApp is availasble for Windows.</span>
                <a href="https://www.whatsapp.com/download">Get it here</a>
            </p>
        </div>
    )
}