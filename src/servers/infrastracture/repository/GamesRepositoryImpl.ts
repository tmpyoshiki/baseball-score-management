import { inject, injectable } from 'inversify';
import DIContainerTypes from '../../DIContainer.types';
import Field from '../../domain/model/Fields/Field';
import Game from '../../domain/model/Games/Game';
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
  ): Promise<ReadonlyArray<Game> | Error> {
    const gameListResponse = await this.BMSAPILibray.getGamesByTeamId(
      teamId,
      start,
      resultsNum
    );
    if (gameListResponse instanceof Error) {
      return gameListResponse;
    }

    return gameListResponse.game_list.map((gameResponse) => {
      const firstTeam = new Team(
        gameResponse.first_team.id,
        gameResponse.first_team.name
      );
      const secondTeam = new Team(
        gameResponse.second_team.id,
        gameResponse.second_team.name
      );
      const field = new Field(gameResponse.field.id, gameResponse.field.name);
      return new Game(
        gameResponse.id,
        firstTeam,
        secondTeam,
        field,
        gameResponse.start_date_time,
        gameResponse.end_date_time
      );
    });
  }
}
