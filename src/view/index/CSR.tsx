import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import IndexMainComponent from './component/IndexMainComponent';
import createIndexStore, { IndexState } from './stores';

const root = document.getElementById('app');
declare var window: {
  INITIAL_STATE: IndexState;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
};
const initialState: IndexState = window.INITIAL_STATE;
const store = createIndexStore(initialState);
delete window.INITIAL_STATE;

hydrate(
  <Provider store={store}>
    <IndexMainComponent />
  </Provider>,
  root
);
