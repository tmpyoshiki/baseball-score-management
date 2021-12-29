import { createStore } from "redux";

export interface IndexState {
  readonly latestGameScores: LatestGameScores;
  readonly frequentBattledTeams: FrequentBattledTeams;
}
export interface LatestGameScores {
  readonly scores: ReadonlyArray<GameScore>;
}
export interface FrequentBattledTeams {
  readonly teams: ReadonlyArray<BattledTeam>;
}
interface GameScore {
  readonly gameId: string;
  readonly myTeamName: string;
  readonly myTeamScore: number;
  readonly oponentTeamName: string;
  readonly oponentTeamScore: number;
}
interface BattledTeam {
  readonly teamId: string;
  readonly teamName: string;
}

const initialState: IndexState = {
  latestGameScores: {
    scores: [],
  },
  frequentBattledTeams: {
    teams: [],
  },
};

const reducer = (state: IndexState = initialState) => state;

export default createStore(reducer);
