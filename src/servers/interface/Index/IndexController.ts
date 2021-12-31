import { IndexState } from './../../../view/index/stores/index';
import 'reflect-metadata';
import ScoresService from './../../application/interface/ScoresService';
import { inject, injectable } from 'inversify';
import { renderToString } from 'react-dom/server';
import DIContainerTypes from '../../DIContainer.types';
import TeamsService from '../../application/interface/TeamsService';
import Score from '../../domain/Scores/Score';
import Team from '../../domain/Teams/Team';
import IndexView from '../../../view/index/IndexView';
import createIndexView from '../../../view/index/IndexView';

@injectable()
export default class IndexController {
  @inject(DIContainerTypes.ScoresService)
  private scoresService: ScoresService;

  @inject(DIContainerTypes.TeamsService)
  private teamsService: TeamsService;

  public get() {
    const scores = this.scoresService.getScores(1, 3);
    const teams = this.teamsService.getTeams(1, 3);
    const state = this.createState(scores, teams);
    return createIndexView({ state });
  }

  private createState(
    scoreList: ReadonlyArray<Score>,
    teamList: ReadonlyArray<Team>
  ): IndexState {
    return {
      latestGameScores: {
        scores: scoreList.map((score) => ({
          gameId: score.getGameId(),
          myTeamName: score.getMyTeamName(),
          myTeamScore: score.getMyTeamScore(),
          oponentTeamName: score.getOponentTeamName(),
          oponentTeamScore: score.getOponentTeamScore(),
        })),
      },
      frequentBattledTeams: {
        teams: teamList.map((team) => ({
          teamId: team.getTeamId(),
          teamName: team.getTeamName(),
        })),
      },
    };
  }
}
