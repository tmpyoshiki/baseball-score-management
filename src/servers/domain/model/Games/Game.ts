import moment from 'moment';
import Field from '../Fields/Field';
import Team from '../Teams/Team';

// TODO スコアをどう持つか検討する
export default class Game {
  private gameId: number;
  private firstTeam: Team;
  private secondTeam: Team;
  private field: Field;
  private dates: string;

  constructor(
    gameId: number,
    firstTeam: Team,
    secondTeam: Team,
    field: Field,
    startDateTime: string,
    endDateTime: string
  ) {
    this.gameId = gameId;
    this.firstTeam = firstTeam;
    this.secondTeam = secondTeam;
    this.field = field;
    this.dates = this.calcDates(startDateTime, endDateTime);
  }

  public getGameId(): number {
    return this.gameId;
  }
  public getFirstTeam(): Team {
    return this.firstTeam;
  }
  public getSecondTeam(): Team {
    return this.secondTeam;
  }
  public getField(): Field {
    return this.field;
  }
  public getDates(): string {
    return this.dates;
  }

  /**
   * 試合実施時刻を計算
   * @param startDateTime 開始時刻
   * @param endDateTime 終了時刻
   * @returns 試合実施時刻（「YYYY年MM月DD日 hh:mm〜hh:mm」の形式）
   */
  private calcDates(startDateTime: string, endDateTime: string) {
    const startDate = moment(startDateTime)
      .format('YYYY年MM月DD日 hh:mm')
      .toString();
    const endDate = moment(endDateTime).format('hh:mm').toString();
    return `${startDate}〜${endDate}`;
  }
}
