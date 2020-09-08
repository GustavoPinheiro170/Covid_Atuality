import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './router';
import'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode> 
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
