import React from "react";
import { styled } from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 50px;
`;

const IndexHeader = (): JSX.Element => {
  return (
    <article>
      <h1>BMT</h1>
      <p>Baseball Management Tool</p>
      <p>あなたのチームを強くするツール</p>
    </article>
  );
};

export default IndexHeader;
