import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { db } from '../../firebase'

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

export default function SidebarChats() {
  const classes = useStyles();
  const location = useLocation();
  const [firends, setFriends] = useState([])

  useEffect(() => {
    db.collection('chats').onSnapshot((snapshot) => {
      console.log({ snapshot: snapshot });
      setFriends(snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      }));
    })
  }, [])

  console.log({ firends })

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
            <Avatar alt={firend.title} src={firend.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={classes.listItemTitleHeader}>
                <div>{firend.title}</div>
                <div className={classes.date}>{moment(firend.lastMessageTimestamp.toDate()).fromNow()}</div>
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
