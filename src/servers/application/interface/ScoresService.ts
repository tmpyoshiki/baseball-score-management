import ScoreList from '../../domain/ScoreList';

export interface ScoresService {
  getScores(start: number, resultsNum: number): ScoreList;
}
