import React from 'react';
import Header from '../component/Header';
import Navigation from '../component/Navigation';

interface Props {
  readonly mainComponent: JSX.Element;
}
const SSR: React.FC<Props> = ({ mainComponent }) => (
  <html>
    <Header title="test" />
    <body>
      <div id="app">
      <Navigation />
        <Navigation />
        <div>{mainComponent}</div>
      </div>
      <script src="./client.js"></script>
    </body>
  </html>
);

export default SSR;
