import React from "react";
import Header from "../component/Header";

interface Props {
  readonly pageName: string;
}
const PageTemplate: React.FC<Props> = ({ pageName }) => (
  <html>
    <Header title="test" />
    <body>
      <div id="app"></div>
      <script src={`./${pageName}.js`}></script>
    </body>
  </html>
);

export default PageTemplate;
