export default class Score {
  private gameId: string;
  private myTeamName: string;
  private myTeamScore: number;
  private oponentTeamName: string;
  private oponentTeamScore: number;

  constructor(
    gameId: string,
    myTeamName: string,
    myTeamScore: number,
    oponentTeamName: string,
    oponentTeamScore: number
  ) {
    this.gameId = gameId;
    this.myTeamName = myTeamName;
    this.myTeamScore = myTeamScore;
    this.oponentTeamName = oponentTeamName;
    this.oponentTeamScore = oponentTeamScore;
  }

  public getGameId(): string {
    return this.gameId;
  }
  public getMyTeamName(): string {
    return this.myTeamName;
  }
  public getMyTeamScore(): number {
    return this.myTeamScore;
  }
  public getOponentTeamName(): string {
    return this.oponentTeamName;
  }
  public getOponentTeamScore(): number {
    return this.oponentTeamScore;
  }
}
