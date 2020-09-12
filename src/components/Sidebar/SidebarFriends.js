import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flex: 1,
    overflowY: 'auto',
    padding: 0,
  },
  listItem: {
    position: 'relative',

    '&::after': {
      content: '" "',
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: 1,
      width: 'calc(100% - 70px)',
      background: theme.palette.action.hover
    }
  },
  listItemTitleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    fontSize: 10
  }
}));

export default function FriendsList() {
  const classes = useStyles();
  const location = useLocation();
  const [firends, setFriends] = useState([])

  useEffect(() => {
    setFriends([{
      id: 1,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 2,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }, {
      id: 3,
      name: 'Lior Rabinovich',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
      lastMessage: 'Hello world...',
      date: '12/09/2020'
    }])
  }, [])

  return (
    <List className={classes.root}>
      {firends.map((firend, friendIndex) => (
        <ListItem
          key={friendIndex}
          button
          disableRipple
          component={Link}
          to={`/chat/${firend.id}`}
          className={classes.listItem}
          alignItems="flex-start"
          selected={location.pathname === `/chat/${firend.id}`}>
          <ListItemAvatar>
            <Avatar alt={firend.name} src={firend.image} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={classes.listItemTitleHeader}>
                <div>{firend.name}</div>
                <div className={classes.date}>12/09/2020</div>
              </div>
            }
            secondary={
              <span className={classes.lastMessage}>
                {firend.lastMessage}
              </span>
            }
          />
        </ListItem>
      ))}

    </List>
  );
}
