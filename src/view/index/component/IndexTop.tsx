import React from 'react';
import styled from 'styled-components';

const Top = styled.article`
  width: 100%;
  min-width: 610px;
  height: 380px;
  padding-top: 100px; /* Navigation領域確保のため */
  background: #000a60;
  display: flex;
  flex-flow: column;
`;
const ShortTitle = styled.h1`
  font: italic 144px bold;
  color: #ffffff;
  text-align: center;
  order: 2;
`;
const FullTitle = styled.p`
  font: italic 48px bold;
  color: #ffffff;
  text-align: center;
  order: 3;
`;
const Explanation = styled.p`
  font: italic 36px bold;
  color: #ffffff;
  order: 1;
`;

const IndexTop = (): JSX.Element => {
  return (
    <Top>
      <ShortTitle>BMT</ShortTitle>
      <FullTitle>Baseball Management Tool</FullTitle>
      <Explanation>あなたのチームを強くするツール</Explanation>
    </Top>
  );
};

export default IndexTop;
