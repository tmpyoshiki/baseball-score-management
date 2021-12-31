export default class Team {
  private teamId: string;
  private teamName: string;

  constructor(teamId: string, teamName: string) {
    this.teamId = teamId;
    this.teamName = teamName;
  }

  public getTeamId(): string {
    return this.teamId;
  }
  public getTeamName(): string {
    return this.teamName;
  }
}
