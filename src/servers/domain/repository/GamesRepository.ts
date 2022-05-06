import Game from '../model/Games/Game';

export default interface GamesRepository {
  getGamesByTeamId(
    teamId: number,
    start: number,
    resultsNum: number
  ): Promise<ReadonlyArray<Game> | Error>;
}
