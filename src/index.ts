import express, { Express } from 'express';
import IndexController from './servers/interface/Index/IndexController';
import DIContainer from './servers/DIContainer';
import DIContainerTypes from './servers/DIContainer.types';

const app: Express = express();

app.listen(3000);

app.use(express.static('dist/assets'));

app.get('/', async (req, res) => {
  const view = await DIContainer.get<IndexController>(
    DIContainerTypes.IndexController
  ).get();
  res.send(view.renderAsString()).status(200);
});
