import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const initialState = {
  books: [
    { title: 'JS: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ]
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, initialState)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
