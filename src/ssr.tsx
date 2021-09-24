import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from './CountUp'

const ssr = (): string => (`
  <html>
    <head>
      <title>Test</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">
      ${renderToString(<CountUp />)}
      </div>
      <script src="./client.js"></script>
    </body>
  </html>
`);

export default ssr;