import 'reflect-metadata';
import IndexController from '../../../../src/servers/interface/Index/IndexController';
import { scoresServiceMock } from '../mock/ScoreServiceMock';
import { teamsServiceMock } from '../mock/TeamServiceMock';
import { expectedState } from './expected';

jest.mock('../../../../src/servers/application/impl/ScoreServiceImpl');
jest.mock('../../../../src/servers/application/impl/TeamsServiceImpl');

describe('IndexController', () => {
  describe('get', () => {
    it('正常系: 正常に処理が実行されたときに正しいViewを返すことができること', async () => {
      const view = await new IndexController(
        scoresServiceMock,
        teamsServiceMock
      ).get();
      expect(view.pageName).toBe('index');
      expect(view.title).toBe('BMW - 野球スコア管理ツール');
      expect(view.state).toStrictEqual(expectedState);
    });
  });
});
