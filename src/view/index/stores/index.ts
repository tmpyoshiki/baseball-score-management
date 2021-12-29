import { combineReducers } from "redux";
interface IndexState {
  readonly latestGameScores: LatestGameScores;
  readonly frequentBattledTeams: FrequentBattledTeams;
}
interface LatestGameScores {
  readonly scores: ReadonlyArray<Score>;
}
interface Score {
  readonly myTeamName: string;
  readonly myTeamScore: number;
  readonly oponentTeamName: string;
  readonly oponentTeamScore: number;
}
interface FrequentBattledTeams {
  readonly teams: ReadonlyArray<BattledTeam>;
}
interface BattledTeam {
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

const indexReducer = (state: IndexState = initialState) => state;

export default combineReducers({ indexReducer });
