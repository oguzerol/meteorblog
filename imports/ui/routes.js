import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import HomePage from './pages/homepage';
import About from './pages/about';
import NoMatch from './pages/nomatch';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
