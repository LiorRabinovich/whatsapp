import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            background: '#f6f6f6',
            height: 50,
            textAlign: 'center',
            position: 'relative',
            borderBottom: '1px solid #dbdbdb'
        },
        input: {
            borderWidth: 0,
            fontSize: 14,
            background: '#fff',
            margin: 'auto',
            width: 'calc(100% - 20px)',
            height: 'calc(100% - 15px)',
            paddingLeft: '60px',
            borderRadius: 18,
            transition: 'all 0.1s',
        },
        inputFocus: {
            width: '100%',
            height: '100%',
            outline: 'none',
            borderRadius: 0,
        },
        inputIcon: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 10
        }
    }
});

function SearchIconComponent({ isFocus, ...rest }) {
    if (isFocus) return <ArrowBackIcon color="primary" {...rest} fontSize="small" />
    return <SearchIcon {...rest} />;
}

export default function Search() {
    const classes = useStyles();
    const [isFocus, setIsFocus] = useState(false);

    return (
        <form className={classes.root}>
            <IconButton className={classes.inputIcon}>
                <SearchIconComponent isFocus={isFocus} fontSize="small" />
            </IconButton>
            <input
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                className={clsx(classes.input, (isFocus ? classes.inputFocus : ''))}
                placeholder="Search or start a new chat" />
        </form>
    )
}