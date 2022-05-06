export default interface GamesRepository {
  getGamesByTeamId(
    teamId: number,
    start: number,
    resultsNum: number
    // TODO: ちょっと型は考えるのでとりあえずObjectに
  ): Promise<ReadonlyArray<Object> | Error>;
}
