import React from "react";
import styled from "styled-components";

const IndexFrequentBattledTeamsWrapper = styled.article`
  width: 300px;
  margin-top: 50px;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
`;

const Title = styled.h1`
  width: 220px;
  margin: -22px auto;
  padding: 9px 0px;
  background: #000a60;
  display: block;
  text-align: center;
  font: 18px bold;
  color: #ffffff;
`;
const TeamList = styled.ol`
  margin-top 44px;
  text-align: center;
`;
const TeamListItem = styled.li`
  display: block;
  width: 220px;
  height: 40px;
  margin: 20px auto 0px;
  background: #ffffff;
  border: 1px solid #000a60;
  box-sizing: border-box;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;
const TeamListItemLink = styled.a`
  display: block;
  padding: 6px 0;
  color: #000000;
  text-decoration: none;
  font: 18px bold;
  &:hover {
    cursor: pointer;
  }
`;
const More = styled.p`
  margin: 11px 0 11px 220px;
`;

const MoreLink = styled.a`
  font: 12px bold;
  color: #0000ee;
`;

const IndexFrequentBattledTeams = (): JSX.Element => {
  return (
    <IndexFrequentBattledTeamsWrapper>
      <Title>最も対戦しているチーム</Title>
      <TeamList>
        <TeamListItem>
          <TeamListItemLink href="/teams/teamB">チームB</TeamListItemLink>
        </TeamListItem>
        <TeamListItem>
          <TeamListItemLink href="/teams/teamC">チームC</TeamListItemLink>
        </TeamListItem>
        <TeamListItem>
          <TeamListItemLink href="/teams/teamD">チームD</TeamListItemLink>
        </TeamListItem>
      </TeamList>
      <More>
        <MoreLink href="/teams">もっと見る</MoreLink>
      </More>
    </IndexFrequentBattledTeamsWrapper>
  );
};
export default IndexFrequentBattledTeams;
