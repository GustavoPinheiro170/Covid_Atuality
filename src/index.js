import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './router';

ReactDOM.render(
  <React.StrictMode> 
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
