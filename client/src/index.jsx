import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import GlobalStyles from './globalStyles.js'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles/>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
