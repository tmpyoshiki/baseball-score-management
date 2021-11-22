import React from "react";
import Header from "../component/Header";

const PageTemplate: React.FC = () => (
  <html>
    <Header title="test" />
    <body>
      <div id="app"></div>
      <script src="./client.js"></script>
    </body>
  </html>
);

export default PageTemplate;
