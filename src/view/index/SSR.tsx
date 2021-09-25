import React from 'react';
import Header from '../common/Header';
import Main from './component/Main';

const SSR = (): JSX.Element => (
  <html>
    <Header title="test"/>
    <body>
      <div id="app">
        <Main />
      </div>
      <script src="./client.js"></script>
    </body>
  </html>
);

export default SSR;