import 'reflect-metadata';
import IndexController from '../../../../src/servers/interface/Index/IndexController';
import { gamesServiceMock } from '../mock/GamesServiceMock';
import { teamsServiceMock } from '../mock/TeamsServiceMock';
import { expectedState } from './expected';

describe('IndexController', () => {
  describe('get', () => {
    it('正常系: 正常に処理が実行されたときに正しいViewを返すことができること', async () => {
      const view = await new IndexController(
        gamesServiceMock,
        teamsServiceMock
      ).get();
      expect(view.pageName).toBe('index');
      expect(view.title).toBe('BMW - 野球スコア管理ツール');
      expect(view.state).toStrictEqual(expectedState);
    });
  });
});
