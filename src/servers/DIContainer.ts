import 'reflect-metadata';
import { Container } from 'inversify';
import ScoresServiceImpl from './application/impl/ScoreServiceImpl';
import ScoresService from './application/interface/ScoresService';
import DIContainerTypes from './DIContainer.types';
import IndexController from './interface/Index/IndexController';
import TeamsService from './application/interface/TeamsService';
import TeamsServiceImpl from './application/impl/TeamsServiceImpl';
import TeamsRepository from './domain/repository/TeamsRepository';
import TeamsRepositoryImpl from './infrastracture/repository/TeamsRepositoryImpl';
import BMSAPILibrary from './infrastracture/library/interface/BMSAPILibrary';
import BMSAPILibraryImpl from './infrastracture/library/impl/BMSAPILibraryImpl';

const container = new Container();

container
  .bind<IndexController>(DIContainerTypes.IndexController)
  .to(IndexController);
container
  .bind<ScoresService>(DIContainerTypes.ScoresService)
  .to(ScoresServiceImpl);
container
  .bind<TeamsService>(DIContainerTypes.TeamsService)
  .to(TeamsServiceImpl);
container
  .bind<TeamsRepository>(DIContainerTypes.TeamsRepository)
  .to(TeamsRepositoryImpl);
container
  .bind<BMSAPILibrary>(DIContainerTypes.BMSAPILibrary)
  .to(BMSAPILibraryImpl);

export default container;
