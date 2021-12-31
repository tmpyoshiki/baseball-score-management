import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IndexState } from '../stores';

const LatestGamesWrapper = styled.article`
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

const GameList = styled.ol`
  margin-top 44px;
  text-align: center;
`;
const GameListItem = styled.li`
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
const GameListItemLink = styled.a`
  display: block;
  padding: 6px 0;
  color: #000000;
  text-decoration: none;
  font: 18px bold;
  &:hover {
    cursor: pointer;
  }
`;
const DetailActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 11px 20px;
`;
const DetailActionLink = styled.a`
  font: 12px bold;
  color: #0000ee;
`;

const IndexLatestGames: React.FC = () => {
  const { scores } = useSelector((state: IndexState) => state.latestGameScores);
  return (
    <LatestGamesWrapper>
      <Title>対戦戦績</Title>
      <GameList>
        {scores.map((score) => (
          <GameListItem key={score.gameId}>
            <GameListItemLink href={`/games/${score.gameId}`}>
              {score.myTeamName} {score.myTeamScore} - {score.oponentTeamScore}{' '}
              {score.oponentTeamName}
            </GameListItemLink>
          </GameListItem>
        ))}
      </GameList>
      <DetailActions>
        <p>
          <DetailActionLink href="/score-keeping">
            スコアを記録する
          </DetailActionLink>
        </p>
        <p>
          <DetailActionLink href="/teams/me">もっと見る</DetailActionLink>
        </p>
      </DetailActions>
    </LatestGamesWrapper>
  );
};
export default IndexLatestGames;
