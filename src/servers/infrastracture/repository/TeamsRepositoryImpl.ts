import { injectable } from 'inversify';
import Team from '../../domain/model/Teams/Team';
import TeamsRepository from '../../domain/repository/TeamsRepository';

@injectable()
export default class TeamsRepositoryImpl implements TeamsRepository {
  public getTeams(start: number, resultsNum: number): ReadonlyArray<Team> {}
}
