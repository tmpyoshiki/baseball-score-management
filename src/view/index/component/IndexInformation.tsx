import React from 'react';
import IndexFrequentBattledTeams from './IndexFrequentBattledTeams';
import IndexLatestGames from './IndexLatestGames';
import styled from 'styled-components';

const HiddenH1 = styled.h1`
  display: none;
`;

const Information = styled.section`
  width: 900px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

const IndexInformation = (): JSX.Element => {
  return (
    <Information>
      <HiddenH1>管理しているチーム情報の概要</HiddenH1>
      <IndexFrequentBattledTeams />
      <IndexLatestGames />
    </Information>
  );
};
export default IndexInformation;
