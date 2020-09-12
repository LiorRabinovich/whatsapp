import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            listStyleType: 'none',
            padding: theme.spacing(1),
            borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px`,
            background: theme.palette.common.white,
            position: 'relative',
            marginBottom: theme.spacing(2.5),
            width: 'fit-content',
            maxWidth: 480,

            '& footer': {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            },

            '& p': {
                margin: `0 0 ${theme.spacing(0.5)}px 0`,
                padding: 0
            },

            '& svg': {
                marginLeft: theme.spacing(0.5)
            },

            '& time, & svg': {
                color: 'rgba(0,0,0,.4)',
                fontSize: 11
            },

            '&:last-child': {
                marginBottom: 0
            }
        },
        me: {
            background: '#dcf8c6',
            borderRadius: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(1)}px`,
            alignSelf: 'flex-end',

            '&::before': {
                content: '" "',
                position: 'absolute',
                width: 0,
                height: 0,
                borderTop: `${theme.spacing(1.5)}px solid #dcf8c6`,
                borderLeft: `${theme.spacing(1.5)}px solid transparent`,
                borderRight: `${theme.spacing(1.5)}px solid transparent`,
                top: 0,
                right: `-${theme.spacing(1.5)}px`,
            }
        }
    }
});

function ViewMessageIcon({ received, ...rest }) {
    if (received) return <DoneAllIcon {...rest} />
    return <CheckIcon {...rest} />;
}

export default function ChatMessage({ me, content }) {
    const classes = useStyles();

    return (
        <li className={clsx(classes.root, (me ? classes.me : ''))}>
            <p>{content}</p>
            <footer>
                <time datetime="">14:12</time>
                {me ? <ViewMessageIcon received={false} /> : ''}
            </footer>
        </li>
    )
}