import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Input = ({setNewMessage}) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const handleChange = (event) => {
    console.log(event.target.name);
    if(event.target.name === 'author') {
      setAuthor(event.target.value);
      console.log('now author is ' + text);
    } else {
      setText(event.target.value);
      console.log('now text is ' + author);
    }
  }

  return (
    <div>
      <div>{text}</div>
      <div>{author}</div>
      <input type='text' name='author' placeholder="author" onChange={handleChange}></input>
      <input type='text' name='text' placeholder="text" onChange={handleChange}></input>
      <button onClick={setNewMessage}>setNewMessage</button>                                                          {/* а вот эта не работает */}
    </div>
  )
}
const App = () => { 
  const [messages, setMessages] = useState([{text:'text', author:'author'}, {text:'text2', author:'author2'}]);
  const setNewMessage = () => {
   /* setMessages(() => ([...messages, {text:'{text}', author:'{author}'}])) */
   setMessages((prevMessages) => ([...prevMessages, {text:'{text}', author:'{author}'}])) 
  } 

  return (
    <div>    
      <ul>{messages.map((message) => <li>{message.text} {message.author}</li>)}</ul>
      <Input setMessages={setMessages}></Input>
{/*       <button onClick={() => setMessages([...messages, {text:'text3', author:'author3'}])}>new</button>*/}
      <button onClick={setNewMessage}>setNewMessage</button>                                                            {/* Эта работает */}
    </div>

    );
}


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);