import React from "react";
import { Reset } from "styled-reset";
import Navigation from "../../common/component/Navigation";
import IndexContents from "./IndexContents";

const IndexMainComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Reset />
      <Navigation />
      <IndexContents />
    </React.Fragment>
  );
};
export default IndexMainComponent;
