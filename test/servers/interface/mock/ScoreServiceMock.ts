import ScoresService from '../../../../src/servers/application/interface/ScoresService';
import Score from '../../../../src/servers/domain/model/Scores/Score';

const score = new Score('1', 'チーム１', 1, 'チーム２', 2);
export const scoresServiceMock: ScoresService = {
  getScores: (): Promise<ReadonlyArray<Score>> => {
    return Promise.resolve([score]);
  },
};
