import { ScoresServiceImpl } from './application/impl/ScoreServiceImpl';
import { ScoresService } from './application/interface/ScoresService';
import { Container } from 'inversify';
import DIContainerTypes from './DIContainer.types';
import IndexController from './interface/Index/IndexController';

const container = new Container();

container
  .bind<IndexController>(DIContainerTypes.IndexController)
  .to(IndexController);
container
  .bind<ScoresService>(DIContainerTypes.ScoresService)
  .to(ScoresServiceImpl);

export default container;
