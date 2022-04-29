import Score from '../../../../../src/servers/domain/model/Scores/Score';

describe('Score', () => {
  let score: Score;
  beforeEach(() => {
    score = new Score('1', 'テストチーム１', 1, 'テストチーム２', 4);
  });
  describe('getGameId', () => {
    it('正常系: 格納されている試合IDが取得できること', () => {
      const actualGameId = score.getGameId();
      expect(actualGameId).toBe('1');
    });
  });
  describe('getMyTeamName', () => {
    it('正常系: 格納されている自分のチーム名が取得できること', () => {
      const actualMyTeamName = score.getMyTeamName();
      expect(actualMyTeamName).toBe('テストチーム１');
    });
  });
  describe('getMyTeamScore', () => {
    it('正常系: 格納されている自分のチームのスコアが取得できること', () => {
      const actualMyTeamScore = score.getMyTeamScore();
      expect(actualMyTeamScore).toBe(1);
    });
  });
  describe('getOponentTeamName', () => {
    it('正常系: 格納されている相手チーム名が取得できること', () => {
      const actualOpponentTeamName = score.getOponentTeamName();
      expect(actualOpponentTeamName).toBe('テストチーム２');
    });
  });
  describe('getOponentTeamScore', () => {
    it('正常系: 格納されている相手チームのスコアが取得できること', () => {
      const actualOpponentTeamScore = score.getOponentTeamScore();
      expect(actualOpponentTeamScore).toBe(4);
    });
  });
});
