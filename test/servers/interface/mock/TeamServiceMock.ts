import TeamsService from '../../../../src/servers/application/interface/TeamsService';
import Team from '../../../../src/servers/domain/model/Teams/Team';

const team = new Team(2, 'チーム２');
export const teamsServiceMock: TeamsService = {
  getTeams: (): Promise<ReadonlyArray<Team>> => {
    return Promise.resolve([team]);
  },
};
