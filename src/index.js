import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Message = (props) =>(
  <div>
    <p>{props.messageText}</p>
  </div>
)
let App = () => (
  <div>
    <Message messageText={'some text from props'}/>
  </div>
)
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);