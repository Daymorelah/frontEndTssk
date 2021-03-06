import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/app';
import '../styles/index.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
