import React, { useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
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
                marginLeft: theme.spacing(0.5),
                fontSize: 14
            },

            '& time, & svg': {
                color: 'rgba(0,0,0,.4)',
            },

            '& time': {
                fontSize: 11
            },

            '& .received': {
                color: '#4fc3f7'
            },

            '&:last-child': {
                marginBottom: 0
            },

            '&::before': {
                content: '" "',
                position: 'absolute',
                width: 0,
                height: 0,
                borderTop: `${theme.spacing(1.5)}px solid #fff`,
                borderLeft: `${theme.spacing(1.5)}px solid transparent`,
                borderRight: `${theme.spacing(1.5)}px solid transparent`,
                top: 0,
                left: `-${theme.spacing(1.5)}px`,
            }
        },
        me: {
            background: '#dcf8c6',
            borderRadius: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(1)}px`,
            alignSelf: 'flex-end',

            '&::before': {
                borderTopColor: `#dcf8c6`,
                left: 'auto',
                right: `-${theme.spacing(1.5)}px`,
            }
        }
    }
});

function ViewMessageIcon({ received }) {
    if (received) return <DoneAllIcon className={'received'} />
    return <CheckIcon />;
}

function ChatMessage({ uid, message, updateRead }) {
    const classes = useStyles();
    const { content, createdAt, displayName, read } = message;
    const me = message.uid === uid;

    useEffect(() => {
        if (!me && !message.read) {
            updateRead(message.id);
        }
    }, [me, message, updateRead])

    return (
        <li className={clsx(classes.root, (me ? classes.me : ''))}>
            {!me ? <div style={{ color: '#029d00' }}>{displayName}</div> : ''}
            <p>{content}</p>
            <footer>
                <time dateTime={createdAt}>{moment(createdAt.toDate()).fromNow()}</time>
                {me ? <ViewMessageIcon classNameReceived={classes.received} received={read} /> : ''}
            </footer>
        </li >
    )
}

export default React.memo(ChatMessage);