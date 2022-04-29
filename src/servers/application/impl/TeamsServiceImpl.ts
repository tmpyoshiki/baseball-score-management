import { injectable } from 'inversify';
import Team from '../../domain/model/Teams/Team';
import TeamsService from '../interface/TeamsService';

@injectable()
export default class TeamsServiceImpl implements TeamsService {
  public getTeams(start: number, resultsNum: number): ReadonlyArray<Team> {
    // TODO: repository追加したら修正
    return [];
  }
}
