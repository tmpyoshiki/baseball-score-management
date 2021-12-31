import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import reducer, { IndexState } from './../../../view/index/stores/index';
import ScoresService from './../../application/interface/ScoresService';
import DIContainerTypes from '../../DIContainer.types';
import TeamsService from '../../application/interface/TeamsService';
import Score from '../../domain/Scores/Score';
import Team from '../../domain/Teams/Team';
import createPageView from '../../../view/common/helper/createPageView';
import IndexMainComponent from '../../../view/index/component/IndexMainComponent';

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
    return this.createIndexView(state);
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

  private createIndexView(state: object): string {
    return createPageView({
      pageName: 'index',
      title: 'BMW - 野球スコア管理ツール',
      content: IndexMainComponent,
      reducer,
      state,
    });
  }
}
