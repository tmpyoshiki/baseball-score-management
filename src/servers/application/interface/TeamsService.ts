import Team from '../../domain/Teams/Team';

export default interface TeamsService {
  getTeams(start: number, resultsNum: number): ReadonlyArray<Team>;
}
