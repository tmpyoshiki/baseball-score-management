import Field from '../../../../../src/servers/domain/model/Fields/Field';
import Game from '../../../../../src/servers/domain/model/Games/Game';
import Team from '../../../../../src/servers/domain/model/Teams/Team';

describe('Games', () => {
  let game: Game;
  beforeEach(() => {
    const firstTeam = new Team(1, 'テストチーム1');
    const secondTeam = new Team(2, 'テストチーム2');
    const field = new Field(1, 'テスト球場');
    const startDateTime = '2000/01/01 10:00:00';
    const endDateTime = '2000/01/01 12:00:00';
    game = new Game(
      1,
      firstTeam,
      secondTeam,
      field,
      startDateTime,
      endDateTime
    );
  });
  describe('getGameId', () => {
    it('正常系: 格納されている試合IDが取得できること', () => {
      const actualGameId = game.getGameId();
      expect(actualGameId).toBe(1);
    });
  });
  describe('getFirstTeam', () => {
    it('正常系: 格納されている先攻のチーム情報が取得できること', () => {
      const actualFirstTeam = game.getFirstTeam();
      expect(actualFirstTeam.getTeamId()).toBe(1);
      expect(actualFirstTeam.getTeamName()).toBe('テストチーム1');
    });
  });
  /*  describe('getMyTeamScore', () => {
    it('正常系: 格納されている自分のチームのスコアが取得できること', () => {
      const actualMyTeamScore = game.getMyTeamScore();
      expect(actualMyTeamScore).toBe(1);
    });
  });*/
  describe('getSecondTeam', () => {
    it('正常系: 格納されている後攻のチーム情報が取得できること', () => {
      const actualSecondTeam = game.getSecondTeam();
      expect(actualSecondTeam.getTeamId()).toBe(2);
      expect(actualSecondTeam.getTeamName()).toBe('テストチーム2');
    });
  });
  /*  describe('getOponentTeamScore', () => {
    it('正常系: 格納されている相手チームのスコアが取得できること', () => {
      const actualOpponentTeamScore = score.getOponentTeamScore();
      expect(actualOpponentTeamScore).toBe(4);
    });
  });*/
  describe('getField', () => {
    it('正常系: 格納されている球場情報が取得できること', () => {
      const actualField = game.getField();
      expect(actualField.getFieldId()).toBe(1);
      expect(actualField.getFieldName()).toBe('テスト球場');
    });
  });
  describe('getDates', () => {
    it('正常系: 日付が正しく計算され、取得できること', () => {
      const actualDates = game.getDates();
      expect(actualDates).toBe('2000年01月01日 10:00〜12:00');
    });
    // TODO テスト追加する
    it('異常系: 日付のフォーマットが正しくないとき、xxxになること', () => {});
  });
});
