import { injectable } from 'inversify';
import Score from '../../domain/model/Scores/Score';
import ScoresService from './../interface/ScoresService';

@injectable()
export default class ScoresServiceImpl implements ScoresService {
  public getScores(start: number, resultsNum: number): ReadonlyArray<Score> {
    // TODO: repository追加したら修正
    return [];
  }
}
