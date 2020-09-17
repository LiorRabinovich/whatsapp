import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar/Sidebar';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            background: 'linear-gradient(180deg, #dddbd1, #d2dbdc)',
            width: '100%',
            height: '100%',

            '&::before': {
                background: '#009688',
                height: 130,
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                content: '""',
                display: 'block'
            }
        },
        app: {
            width: 1260,
            height: 'calc(100% - 40px)',
            minHeight: 500,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateY(-50%) translateX(-50%)',
            display: 'flex',

            [theme.breakpoints.down('md')]: {
                width: '100%',
                height: '100%'
            }
        },
        main: {
            flex: 1,
            display: 'flex',
            backgroundColor: '#f8f9fa'
        }
    }
});

export default function DefaultLayout({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.app}>
                <Sidebar />
                <main className={classes.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}