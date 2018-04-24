//DATA LAYER
import 'materialize-css/dist/css/materialize.min.css';
import styles from './assets/base.css';


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'

import App from './components/App';
import reducers from './reducers';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore( reducers, {}, applyMiddleware(reduxThunk, logger) );
  const root = document.getElementById('root');

  document.body.style.overflow = "hidden";

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );

});
