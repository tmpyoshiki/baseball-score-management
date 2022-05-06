import { IndexState } from '../../../../src/view/index/stores';

export const expectedState: IndexState = {
  latestGames: {
    games: [
      {
        gameId: 1,
        firstTeam: {
          teamId: 1,
          teamName: 'チーム1',
        },
        firstTeamScore: 1,
        secondTeam: {
          teamId: 2,
          teamName: 'チーム2',
        },
        secondTeamScore: 1,
      },
    ],
  },
  frequentBattledTeams: {
    teams: [
      {
        teamId: 2,
        teamName: 'チーム２',
      },
    ],
  },
};
