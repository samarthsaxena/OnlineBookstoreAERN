import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // BrowserRouter helps to navigate from top to bottom level.
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);