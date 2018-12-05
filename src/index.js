import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/about.css';
import './css/footer.css';
import './css/gallery.css';
import './css/navbar.css';
import './css/reviews.css';
import './css/services.css';
import './css/splash.css';

import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
