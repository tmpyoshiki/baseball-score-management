import React from 'react';
import { Reset } from 'styled-reset';
import Navigation from '../../common/Navigation';

const Main = (): JSX.Element => {
  return (
    <React.Fragment>
      <Reset />
      <Navigation />
    </React.Fragment>
  );
};
export default Main;