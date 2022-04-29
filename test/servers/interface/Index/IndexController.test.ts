import 'reflect-metadata';
import ScoresServiceImpl from '../../../../src/servers/application/impl/ScoreServiceImpl';
import TeamsServiceImpl from '../../../../src/servers/application/impl/TeamsServiceImpl';
import Score from '../../../../src/servers/domain/model/Scores/Score';
import Team from '../../../../src/servers/domain/model/Teams/Team';
import IndexController from '../../../../src/servers/interface/Index/IndexController';
import { IndexState } from '../../../../src/view/index/stores';

jest.mock('../../../../src/servers/application/impl/ScoreServiceImpl');
jest.mock('../../../../src/servers/application/impl/TeamsServiceImpl');

const expectedState: IndexState = {
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
        teamId: '2',
        teamName: 'チーム２',
      },
    ],
  },
};

describe('IndexController', () => {
  describe('get', () => {
    const score = new Score('1', 'チーム１', 1, 'チーム２', 2);
    const team = new Team('2', 'チーム２');

    beforeEach(() => {
      jest.mocked(ScoresServiceImpl).mockImplementation(() => ({
        getScores: () => [score],
      }));
      jest.mocked(TeamsServiceImpl).mockImplementation(() => ({
        getTeams: () => [team],
      }));
    });
    it('正常系: 正常に処理が実行されたときに正しいViewを返すことができること', () => {
      const view = new IndexController(
        new ScoresServiceImpl(),
        new TeamsServiceImpl()
      ).get();
      expect(view.pageName).toBe('index');
      expect(view.title).toBe('BMW - 野球スコア管理ツール');
      expect(view.state).toStrictEqual(expectedState);
    });
  });
});
