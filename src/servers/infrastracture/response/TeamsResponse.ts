interface TeamListResponse {
  readonly team_list: ReadonlyArray<TeamResponse>;
}
interface TeamResponse {
  readonly id: number;
  readonly name: string;
}
