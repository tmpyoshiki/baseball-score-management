import React from 'react';
import reduxThunk from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import { Action, applyMiddleware, compose, createStore, Reducer } from 'redux';
import serialize from 'serialize-javascript';
import Head from '../component/Head';
import { Provider } from 'react-redux';

const createPageView = ({
  pageName,
  title,
  content,
  reducer,
  state,
}: {
  pageName: string;
  title: string;
  content: JSX.Element | React.FC;
  reducer: Reducer<any, Action<any>>;
  state: object;
}): string => {
  const composeEnhancers =
    typeof window !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const store = createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  const contentWithProvider = renderToString(
    <Provider store={store}>${content}</Provider>
  );
  return `<html>
      ${renderToString(<Head title={title} />)}
      <body>
        <div id="app">${contentWithProvider}</div>
        <script>window.INITIAL_STATE=${serialize(state)}</script>
        <script src=/${pageName}.js></script>
      </body>
    </html>`;
};

export default createPageView;
