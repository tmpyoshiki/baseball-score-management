import React from "react";
import { Provider } from "react-redux";
import PageTemplate from "../common/template/PageTemplate";
import store from "./stores/index";

const IndexView = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PageTemplate pageName="index" />;
    </Provider>
  );
};

export default IndexView;
