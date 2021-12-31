import Score from '../../domain/Scores/Score';

export interface ScoresService {
  getScores(start: number, resultsNum: number): ReadonlyArray<Score>;
}
