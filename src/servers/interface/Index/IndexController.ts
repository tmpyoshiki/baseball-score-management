import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import createIndexStore, {
  IndexState,
} from './../../../view/index/stores/index';
import ScoresService from './../../application/interface/ScoresService';
import DIContainerTypes from '../../DIContainer.types';
import TeamsService from '../../application/interface/TeamsService';
import Score from '../../domain/model/Scores/Score';
import Team from '../../domain/model/Teams/Team';
import IndexMainComponent from '../../../view/index/component/IndexMainComponent';
import { View } from '../../../view/common/View';

@injectable()
export default class IndexController {
  constructor(
    @inject(DIContainerTypes.ScoresService)
    private readonly scoresService: ScoresService,
    @inject(DIContainerTypes.TeamsService)
    private readonly teamsService: TeamsService
  ) {}

  public get() {
    const scores = this.scoresService.getScores(1, 3);
    const teams = this.teamsService.getTeams(1, 3);
    const state = this.createState(scores, teams);
    const store = createIndexStore(state);
    return new View({
      pageName: 'index',
      title: 'BMW - 野球スコア管理ツール',
      content: IndexMainComponent,
      state,
      store,
    });
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
