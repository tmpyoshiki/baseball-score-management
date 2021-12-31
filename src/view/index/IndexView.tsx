import React from 'react';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import IndexMainComponent from './component/IndexMainComponent';
import { renderToString } from 'react-dom/server';
import reducer from '../index/stores';
import createPageView from '../common/template/PageTemplate';

const createIndexView = ({ state }: { state: any }): string => {
  const composeEnhancers =
    typeof window !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const store = createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  const content = renderToString(
    <Provider store={store}>
      <IndexMainComponent />
    </Provider>
  );
  return createPageView({
    pageName: 'index',
    title: 'BMW - 野球スコア管理ツール',
    content,
    state,
  });
};

export default createIndexView;
