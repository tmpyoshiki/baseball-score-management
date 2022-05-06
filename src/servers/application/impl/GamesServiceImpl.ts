import { inject, injectable } from 'inversify';
import DIContainerTypes from '../../DIContainer.types';
import Game from '../../domain/model/Games/Game';
import GamesRepository from '../../domain/repository/GamesRepository';
import GamesService from '../interface/GamesService';

@injectable()
export default class GamesServiceImpl implements GamesService {
  constructor(
    @inject(DIContainerTypes.GamesRepository)
    private readonly gamesRepository: GamesRepository
  ) {}

  public async getGamesByTeamId(
    teamId: number,
    start: number,
    resultsNum: number
  ): Promise<ReadonlyArray<Game> | Error> {
    return this.gamesRepository.getGamesByTeamId(teamId, start, resultsNum);
  }
}
