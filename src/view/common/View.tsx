import React from 'react';
import { Store } from 'redux';
import serialize from 'serialize-javascript';
import Head from './component/Head';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

interface Props<T> {
  readonly pageName: string;
  readonly title: string;
  readonly content: JSX.Element | React.FC;
  readonly state: T;
  readonly store: Store;
}

export class View<T> {
  readonly pageName: string;
  readonly title: string;
  readonly content: JSX.Element | React.FC;
  readonly state: T;
  readonly store: Store;

  constructor(props: Props<T>) {
    this.pageName = props.pageName;
    this.title = props.title;
    this.content = props.content;
    this.state = props.state;
    this.store = props.store;
  }

  public renderAsString(): string {
    return renderToString(this.render());
  }

  private render(): JSX.Element {
    const initialState = JSON.stringify(this.state)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
    return (
      <html>
        <Head title={this.title} />
        <body>
          <div id="app">
            <Provider store={this.store}>{this.content}</Provider>
          </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.INITIAL_STATE = ${initialState}`,
            }}
          ></script>
          <script src={`/${this.pageName}.js`}></script>
        </body>
      </html>
    );
  }
}
