import React from 'react';
import Head from '../component/Head';

interface Props {
  readonly pageName: string;
}
const PageTemplate: React.FC<Props> = ({ pageName }) => (
  <html>
    <Head title="test" />
    <body>
      <div id="app"></div>
      <script src={`./${pageName}.js`}></script>
    </body>
  </html>
);

export default PageTemplate;
