import React from 'react';
import { useState, useEffect } from 'react';
import { Message } from './message';
import styles from './message-list.module.css';
import { Input, InputAdornment } from '@mui/material'
import { Send } from '@mui/icons-material'


export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const setNewMessage = () => {
        if (text) {
            setMessages((prevMessages) => ([...prevMessages, { author: 'user', message: text }]));
            setText('');
        }

    }
    const [text, setText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            if (messages.length && lastMessage.author !== 'bot') {
                setMessages((prevMessages) => ([...prevMessages, { author: 'bot', message: 'Hello from bot' }]));
            }
        }, 500);
        const lastMessage = messages[messages.length - 1];


    }, [messages])
    const handePressInput = ({ code }) => {
        if (code === 'Enter') {
            setNewMessage();
        }
    }
    return (
        <div className={styles.wrapper}>
            <div>{messages.map((message, index) =>
                <Message key={index} message={message}></Message>)}
            </div>
            <div>
                <Input autoFocus={true} fullWidth type='text' name='text' placeholder="message" value={text} onKeyPress={handePressInput} onChange={e => setText(e.target.value)} endAdornment={<InputAdornment position='end'><Send className={styles.icon} onClick={setNewMessage} /></InputAdornment>}></Input>
            </div>


        </div>

    );
}