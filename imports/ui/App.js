import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Helmet } from 'react-helmet';

import { renderRoutes } from './routes';

import '../../client/bootstrap.min.css';
import './main.scss';

const browserHistory = createBrowserHistory();

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <Router history={browserHistory}>{renderRoutes()}</Router>
    </>
  );
};
