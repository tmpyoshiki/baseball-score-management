import Game from '../../domain/model/Games/Game';

export default interface GamesService {
  /**
   * 試合情報一覧を取得
   * @param teamId 取得したいチームのID
   * @param start 開始位置
   * @param resultsNum 取得数
   */
  getGamesByTeamId(
    teamId: number,
    start: number,
    resultsNum: number
  ): Promise<ReadonlyArray<Game> | Error>;
}
