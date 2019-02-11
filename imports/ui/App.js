import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
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
        <title> Oguz EROL - Official Website. </title>
        <meta charset="utf-8" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <meta
          name="description"
          content="Learn more Oguz EROL, his projects, interests and experience."
        />
        <meta name="language" content="english" />
        <meta http-equiv="content-type" content="text/html" />
        <meta name="author" content="Oguz EROL" />
        <meta name="designer" content="Oguz EROL" />
        <meta name="publisher" content="Oguz EROL" />
        <meta name="keywords" content="Front End Developer" />
        <meta name="subject" content="Personal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Provider store={store}>
        <Router history={browserHistory}>{renderRoutes()}</Router>
      </Provider>
    </>
  );
};
