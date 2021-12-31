import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import IndexMainComponent from './component/IndexMainComponent';
import reducer, { IndexState } from './stores';

const root = document.getElementById('app');
declare var window: {
  INITIAL_STATE: IndexState;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
};
const initialState: IndexState = window.INITIAL_STATE || reducer();
delete window.INITIAL_STATE;
const composeEnhancers =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

hydrate(
  <Provider store={store}>
    <IndexMainComponent />
  </Provider>,
  root
);
