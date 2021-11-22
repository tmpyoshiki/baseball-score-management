import React from "react";
import { Reset } from "styled-reset";
import Navigation from "../../common/component/Navigation";
import IndexHeader from "./IndexHeader";
import IndexInformation from "./IndexInformation";

const IndexMainComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Reset />
      <Navigation />
      <IndexHeader />
      <IndexInformation />
    </React.Fragment>
  );
};
export default IndexMainComponent;
