import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/App.css';  // Import the main CSS file

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
