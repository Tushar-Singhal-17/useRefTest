import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);

