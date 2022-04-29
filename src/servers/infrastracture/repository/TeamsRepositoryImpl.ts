import { inject, injectable } from 'inversify';
import DIContainerTypes from '../../DIContainer.types';
import Team from '../../domain/model/Teams/Team';
import TeamsRepository from '../../domain/repository/TeamsRepository';
import BMSAPILibrary from '../library/interface/BMSAPILibrary';

@injectable()
export default class TeamsRepositoryImpl implements TeamsRepository {
  @inject(DIContainerTypes.BMSAPILibrary)
  private readonly BMSAPILibray: BMSAPILibrary;

  public async getTeams(
    start: number,
    resultsNum: number
  ): Promise<ReadonlyArray<Team> | Error> {
    const teamListResponse = await this.BMSAPILibray.getTeams(
      start,
      resultsNum
    );
    if (teamListResponse instanceof Error) {
      return teamListResponse;
    }
    return teamListResponse.team_list.map(
      (teamResponse) => new Team(teamResponse.id, teamResponse.name)
    );
  }
}
