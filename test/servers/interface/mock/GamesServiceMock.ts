import GamesService from '../../../../src/servers/application/interface/GamesService';
import Field from '../../../../src/servers/domain/model/Fields/Field';
import Game from '../../../../src/servers/domain/model/Games/Game';
import Team from '../../../../src/servers/domain/model/Teams/Team';

const firstTeam = new Team(1, 'チーム1');
const secondTeam = new Team(2, 'チーム2');
const field = new Field(1, 'テスト球場');
const score = new Game(
  1,
  firstTeam,
  secondTeam,
  field,
  '2000/01/01 10:00:00',
  '2000/01/01 12:00:00',
  1,
  4
);
export const gamesServiceMock: GamesService = {
  getGamesByTeamId: (): Promise<ReadonlyArray<Game>> => {
    return Promise.resolve([score]);
  },
};
