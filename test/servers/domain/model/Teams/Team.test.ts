import Team from '../../../../../src/servers/domain/model/Teams/Team';

describe('Team', () => {
  let team: Team;
  beforeEach(() => {
    team = new Team('1', 'テストチーム１');
  });
  describe('getTeamId', () => {
    it('正常系: 格納されているチームIDが取得できること', () => {
      const actualTeamId = team.getTeamId();
      expect(actualTeamId).toBe('1');
    });
  });
  describe('getTeamName', () => {
    it('正常系: 格納されているチーム名が取得できること', () => {
      const actualTeamName = team.getTeamName();
      expect(actualTeamName).toBe('テストチーム１');
    });
  });
});
