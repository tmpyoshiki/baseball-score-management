export default class Team {
  private teamId: number;
  private teamName: string;

  constructor(teamId: number, teamName: string) {
    this.teamId = teamId;
    this.teamName = teamName;
  }

  public getTeamId(): number {
    return this.teamId;
  }
  public getTeamName(): string {
    return this.teamName;
  }
}
