import { injectable } from 'inversify';
import { renderToString } from 'react-dom/server';
import IndexView from '../../../view/index/IndexView';
import 'reflect-metadata';

@injectable()
export default class IndexController {
  public get() {
    return renderToString(IndexView());
  }
}
