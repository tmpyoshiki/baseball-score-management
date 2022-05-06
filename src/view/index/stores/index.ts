import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

export interface IndexState {
  readonly latestGames: LatestGames;
  readonly frequentBattledTeams: FrequentBattledTeams;
}
export interface LatestGames {
  readonly games: ReadonlyArray<Game>;
}
export interface FrequentBattledTeams {
  readonly teams: ReadonlyArray<Team>;
}
interface Game {
  readonly gameId: number;
  readonly firstTeam: Team;
  readonly firstTeamScore: number;
  readonly secondTeam: Team;
  readonly secondTeamScore: number;
}
interface Team {
  readonly teamId: number;
  readonly teamName: string;
}

const initialState: IndexState = {
  latestGames: {
    games: [],
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
