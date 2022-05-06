/**
 * チーム一覧のレスポンス
 */
export interface TeamListResponse {
  /**
   * チーム一覧
   */
  readonly team_list: ReadonlyArray<TeamResponse>;
}

/**
 * チームのレスポンス
 */
interface TeamResponse {
  /**
   * チームID
   */
  readonly id: number;
  /**
   * チーム名
   */
  readonly name: string;
}
