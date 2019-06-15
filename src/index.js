import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/navbar.css';
import './css/splash.css';
import './css/about.css';
import './css/book.css';
import './css/services.css';
import './css/gallery.css';
import './css/photo.css';
import './css/reviews.css';
import './css/contact.css';
import './css/notFound.css'
import './css/footer.css';

import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
