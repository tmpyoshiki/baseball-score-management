import { IndexState } from '../../../../src/view/index/stores';

export const expectedState: IndexState = {
  latestGameScores: {
    scores: [
      {
        gameId: '1',
        myTeamName: 'チーム１',
        myTeamScore: 1,
        oponentTeamName: 'チーム２',
        oponentTeamScore: 2,
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
