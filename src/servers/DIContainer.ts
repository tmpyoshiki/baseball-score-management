import 'reflect-metadata';
import { Container } from 'inversify';
import DIContainerTypes from './DIContainer.types';
import IndexController from './interface/Index/IndexController';
import TeamsService from './application/interface/TeamsService';
import TeamsServiceImpl from './application/impl/TeamsServiceImpl';
import TeamsRepository from './domain/repository/TeamsRepository';
import TeamsRepositoryImpl from './infrastracture/repository/TeamsRepositoryImpl';
import BMSAPILibrary from './infrastracture/library/interface/BMSAPILibrary';
import BMSAPILibraryImpl from './infrastracture/library/impl/BMSAPILibraryImpl';
import GamesRepositoryImpl from './infrastracture/repository/GamesRepositoryImpl';
import GamesService from './application/interface/GamesService';
import GamesServiceImpl from './application/impl/GamesServiceImpl';
import GamesRepository from './domain/repository/GamesRepository';

const container = new Container();

container
  .bind<IndexController>(DIContainerTypes.IndexController)
  .to(IndexController);
container
  .bind<GamesService>(DIContainerTypes.GamesService)
  .to(GamesServiceImpl);
container
  .bind<TeamsService>(DIContainerTypes.TeamsService)
  .to(TeamsServiceImpl);
container
  .bind<GamesRepository>(DIContainerTypes.GamesRepository)
  .to(GamesRepositoryImpl);
container
  .bind<TeamsRepository>(DIContainerTypes.TeamsRepository)
  .to(TeamsRepositoryImpl);
container
  .bind<BMSAPILibrary>(DIContainerTypes.BMSAPILibrary)
  .to(BMSAPILibraryImpl);

export default container;
