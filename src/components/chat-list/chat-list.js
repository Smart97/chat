import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material'
import styles from './chat-list.module.css';
import classNames from 'classnames';


export const ChatList = () => {
    const [chats, setChats] = useState([{ name: 'first', id: 1 }, { name: 'second', id: 2 }, { name: 'third', id: 3 }])
  
    return (
      <List className={styles.chatList}>
        {chats.map((chat) => <ListItem className={classNames({
            [styles.active]: chat.id===1,
        })} key={chat.id}> <ListItemText primary={chat.name}></ListItemText></ListItem >)}
      </List>
    )
  }