//DATA LAYER
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';


import App from './components/App';
import reducers from './reducers';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore( reducers, {}, applyMiddleware());
  const root = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );



});
