import React from 'react';
import { hydrate } from 'react-dom';
import Main from './component/Main';

hydrate(<Main />, document.getElementById('app'));