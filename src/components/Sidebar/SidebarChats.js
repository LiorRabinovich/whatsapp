import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
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

export default function SidebarChats({ allChats, searchResultsChats }) {
  const classes = useStyles();
  const location = useLocation();
  const chats = searchResultsChats ? searchResultsChats : allChats;

  return (
    <List className={classes.root}>
      {chats.map((chat) => (
        <ListItem
          key={chat.id}
          button
          disableRipple
          component={Link}
          to={`/chat/${chat.id}`}
          className={classes.listItem}
          alignItems="flex-start"
          selected={location.pathname === `/chat/${chat.id}`}>
          <ListItemAvatar>
            <Avatar alt={chat.title} src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={classes.listItemTitleHeader}>
                <div>{chat.title}</div>
                {chat.lastMessageCreatedAt ? <div className={classes.date}>{moment(chat.lastMessageCreatedAt.toDate()).fromNow()}</div> : ''}
              </div>
            }
            secondary={
              <span className={classes.lastMessage}>
                {chat.lastMessage}
              </span>
            }
          />
        </ListItem>
      ))}

    </List>
  );
}
