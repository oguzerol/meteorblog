import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { renderRoutes } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

const browserHistory = createBrowserHistory();

export const App = () => {
  return <Router history={browserHistory}>{renderRoutes()}</Router>;
};
