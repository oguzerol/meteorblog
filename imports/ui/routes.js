import React from 'react';
import { Switch } from 'react-router';

import { AppRoute } from './lib/layoutUtils';

// Layouts
import { baseLayout } from './layout/baseLayout';
// Pages
import HomePage from './pages/homepage';
import About from './pages/about';
import NoMatch from './pages/nomatch';

export const renderRoutes = () => {
  return (
    <Switch>
      <AppRoute exact path="/" layout={baseLayout} component={HomePage} />
      <AppRoute exact path="/about" layout={baseLayout} component={About} />
      <AppRoute component={NoMatch} />
    </Switch>
  );
};
