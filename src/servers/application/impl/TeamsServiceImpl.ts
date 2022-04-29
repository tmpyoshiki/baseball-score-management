import { inject, injectable } from 'inversify';
import DIContainerTypes from '../../DIContainer.types';
import Team from '../../domain/model/Teams/Team';
import TeamsRepository from '../../domain/repository/TeamsRepository';
import TeamsService from '../interface/TeamsService';

@injectable()
export default class TeamsServiceImpl implements TeamsService {
  constructor(
    @inject(DIContainerTypes.TeamsRepository)
    private readonly teamsRepository: TeamsRepository
  ) {}

  public async getTeams(
    start: number,
    resultsNum: number
  ): Promise<ReadonlyArray<Team> | Error> {
    return await this.teamsRepository.getTeams(start, resultsNum);
  }
}
