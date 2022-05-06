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
}
