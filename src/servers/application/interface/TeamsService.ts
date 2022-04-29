import Team from '../../domain/model/Teams/Team';

export default interface TeamsService {
  getTeams(start: number, resultsNum: number): ReadonlyArray<Team>;
}
