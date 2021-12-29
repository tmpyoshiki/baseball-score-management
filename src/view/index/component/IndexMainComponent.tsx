import React from 'react';
import { Reset } from 'styled-reset';
import Navigation from '../../common/component/Navigation';
import IndexTop from './IndexTop';
import IndexInformation from './IndexInformation';

const IndexMainComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Reset />
      <Navigation loginTeamName="チームA" />
      <IndexTop />
      <IndexInformation />
    </React.Fragment>
  );
};
export default IndexMainComponent;
