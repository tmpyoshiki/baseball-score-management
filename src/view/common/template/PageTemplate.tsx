import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import Head from '../component/Head';

const createPageView = ({
  pageName,
  title,
  content,
  state,
}: {
  readonly pageName: string;
  readonly title: string;
  readonly content: string;
  readonly state: unknown;
}): string => {
  return `<html>
      ${renderToString(<Head title={title} />)}
      <body>
        <div id="app">${content}</div>
        <script>window.INITIAL_STATE=${serialize(state)}</script>
        <script src=/${pageName}.js></script>
      </body>
    </html>`;
};

export default createPageView;
