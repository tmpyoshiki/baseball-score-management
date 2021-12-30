import React from 'react';
import Head from '../component/Head';

interface Props {
  readonly pageName: string;
  readonly title: string;
}
const PageTemplate: React.FC<Props> = ({ pageName, title }) => (
  <html>
    <Head title={title} />
    <body>
      <div id="app"></div>
      <script src={`./${pageName}.js`}></script>
    </body>
  </html>
);

export default PageTemplate;
