import { inject, injectable } from 'inversify';
import DIContainerTypes from '../../DIContainer.types';
import Team from '../../domain/model/Teams/Team';
import GamesRepository from '../../domain/repository/GamesRepository';
import BMSAPILibrary from '../library/interface/BMSAPILibrary';

@injectable()
export default class GamesRepositoryImpl implements GamesRepository {
  constructor(
    @inject(DIContainerTypes.BMSAPILibrary)
    private readonly BMSAPILibray: BMSAPILibrary
  ) {}

  public async getGamesByTeamId(
    teamId: number,
    start: number,
    resultsNum: number
  ): Promise<ReadonlyArray<object> | Error> {
    const gameListResponse = await this.BMSAPILibray.getGamesByTeamId(
      teamId,
      start,
      resultsNum
    );
    if (gameListResponse instanceof Error) {
      return gameListResponse;
    }

    return gameListResponse.game_list.map((gameResponse) => {
      return gameResponse;
      // TODO: GAMEクラスはちょっと考えなきゃいけないので修正する
      //        return new Game(teamResponse.id, teamResponse.name)
    });
  }
}
