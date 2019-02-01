import React from 'react';
import { Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { AppRoute } from './lib/layoutUtils';

// Layouts
import { baseLayout } from './layout/baseLayout';
// Pages
import HomePage from './pages/homepage';
import About from './pages/about';
import NoMatch from './pages/nomatch';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <AppRoute exact path="/" layout={baseLayout} component={HomePage} />
        <AppRoute exact path="/about" layout={baseLayout} component={About} />
        <AppRoute component={NoMatch} />
      </Switch>
    </Router>
  );
};
