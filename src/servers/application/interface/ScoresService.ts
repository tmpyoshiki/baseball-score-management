import Score from '../../domain/model/Scores/Score';

export default interface ScoresService {
  getScores(start: number, resultsNum: number): ReadonlyArray<Score>;
}
