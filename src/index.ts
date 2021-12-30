import express, { Express } from 'express';
import IndexController from './servers/interface/Index/IndexController';
import container from './servers/inversify.config';

const app: Express = express();

app.listen(3000);

app.use(express.static('dist/assets'));

app.get('/', (req, res) => {
  const controller = container.get<IndexController>('IndexController');
  const view = controller.get();
  console.log(view);
  res.send(view);
});
