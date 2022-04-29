import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

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
  readonly teamId: number;
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

const composeEnhancers =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default (state: IndexState = initialState) =>
  createStore(
    (state) => state,
    state,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
