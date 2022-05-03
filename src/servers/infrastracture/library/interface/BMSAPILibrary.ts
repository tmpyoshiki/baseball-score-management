export default interface BMSAPILibrary {
  getTeams(
    start: number,
    resultsNum: number
  ): Promise<TeamListResponse | Error>;
}
