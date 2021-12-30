import { Container } from 'inversify';
import DIContainerTypes from './inversify.config.type';
import IndexController from './interface/Index/IndexController';

const container = new Container();

container.bind<IndexController>('IndexController').to(IndexController);

export default container;
