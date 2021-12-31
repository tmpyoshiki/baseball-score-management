import { injectable } from 'inversify';
import ScoreList from '../../domain/ScoreList';
import { ScoresService } from './../interface/ScoresService';

@injectable()
export class ScoresServiceImpl implements ScoresService {
  public getScores(start: number, resultsNum: number): ScoreList {
    return {};
  }
}
