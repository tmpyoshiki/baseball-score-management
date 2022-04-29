import Team from '../../domain/model/Teams/Team';

export default interface TeamsRepository {
  getTeams(start: number, resultsNum: number): ReadonlyArray<Team>;
}
