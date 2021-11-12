import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, List, ListItem, ListItemText } from '@mui/material'
import { MessageList, ChatList } from './components';
import { style } from '@mui/system';
import styles from './styles.module.css';


const light = createTheme({
  theme: {
    color: "#fff",
  },
})


ReactDOM.render(
  <ThemeProvider theme={light}>
    <React.StrictMode>
      <div className={styles.chat}>
        <ChatList />
        <MessageList></MessageList>
      </div>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
