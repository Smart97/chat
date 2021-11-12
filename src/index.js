import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material'
import {MessageList} from './components';

const light = createTheme({
  theme: {
    color: "#fff",
  },
})

ReactDOM.render(
  <ThemeProvider theme={light}>
    <React.StrictMode>
      <MessageList></MessageList>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
