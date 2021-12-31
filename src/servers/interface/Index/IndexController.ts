import 'reflect-metadata';
import ScoresService from './../../application/interface/ScoresService';
import { inject, injectable } from 'inversify';
import { renderToString } from 'react-dom/server';
import IndexView from '../../../view/index/IndexView';
import DIContainerTypes from '../../DIContainer.types';

@injectable()
export default class IndexController {
  @inject(DIContainerTypes.ScoresService)
  private scoresService: ScoresService;

  public get() {
    const scores = this.scoresService.getScores(1, 3);
    return renderToString(IndexView());
  }
}
