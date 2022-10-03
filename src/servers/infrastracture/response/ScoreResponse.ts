/**
 * スコアの概要情報のレスポンス
 */
export interface TotalScoreResponse {
  /**
   * 先攻チームのスコア
   */
  readonly bat_first_team_score: number;
  /**
   * 後攻チームのスコア
   */
  readonly field_first_team_score: number;
}
