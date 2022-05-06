import { FieldResponse } from './FieldResponse';
import { TeamResponse } from './TeamsResponse';

/**
 * 試合一覧のレスポンス
 */
export interface GameListResponse {
  /**
   * 試合一覧
   */
  readonly game_list: ReadonlyArray<GameResponse>;
}

/**
 * 試合のレスポンス
 */
interface GameResponse {
  /**
   * 試合ID
   */
  readonly id: number;
  /**
   * 先攻チーム
   */
  readonly first_team: TeamResponse;
  /**
   * 後攻チーム
   */
  readonly second_team: TeamResponse;
  /**
   * 開催球場情報
   */
  readonly field: FieldResponse;
  /**
   * 開始日時
   */
  readonly start_date_time: string;
  /**
   * 終了日時
   */
  readonly end_date_time: string;
}
