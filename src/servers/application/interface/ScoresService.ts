import Score from '../../domain/Scores/Score';

export default interface ScoresService {
  getScores(start: number, resultsNum: number): ReadonlyArray<Score>;
}
