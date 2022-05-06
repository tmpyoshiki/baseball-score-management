import { GameListResponse } from '../../response/GamesResponse';
import { TeamListResponse } from '../../response/TeamsResponse';

export default interface BMSAPILibrary {
  /**
   * チーム一覧を取得するメソッド
   * @param start 開始位置
   * @param resultsNum 取得数
   */
  getTeams(
    start: number,
    resultsNum: number
  ): Promise<TeamListResponse | Error>;

  /**
   * 試合一覧を取得するメソッド
   * @param teamId 取得するチームのID
   * @param start 開始位置
   * @param resultsNum 取得数
   */
  getGamesByTeamId(
    teamId: number,
    start: number,
    resultsNum: number
  ): Promise<GameListResponse | Error>;
}
