import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const App = () => { 
  const [messages, setMessages] = useState([]);
  const setNewMessage = () => {
   setMessages((prevMessages) => ([...prevMessages, {author: 'user', message: text}])); 
   setText('');
  } 
  const [text, setText] = useState('');

  useEffect(() => {setTimeout(() => {
    if(messages.length && lastMessage.author !=='bot') {
      setMessages((prevMessages) => ([...prevMessages, {author: 'bot', message: 'Hello from bot'}])); 
    }
  }, 500);
    const lastMessage = messages[messages.length-1];
    

  }, [messages])

  return (
    <div>    
      <ul>{messages.map((message) => <li>{message.author}: {message.message}</li>)}</ul>
      <div>
      <div>{text}</div>
      <input type='text' name='text' placeholder="text" value={text} onChange={e => setText(e.target.value)}></input>
      <button onClick={setNewMessage}>setNewMessage</button>                                                                                                              
    </div>

                                                        
    </div>

    );
}


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);
