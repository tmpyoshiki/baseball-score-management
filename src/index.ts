import { renderToString } from 'react-dom/server';
import express, { Express } from 'express';
import SSR from './view/index/SSR';

const app: Express = express();

app.listen(3000);

app.use(express.static('dist/assets'));

app.get('/', (req, res) => {
  res.send(renderToString(SSR()));
});
