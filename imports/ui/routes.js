import React from 'react';
import { Switch } from 'react-router';

import { AppRoute } from './lib/layoutUtils';

// Layouts
import { BaseLayout } from './layout/BaseLayout';
import { EmptyLayout } from './layout/EmptyLayout';

// Pages
import HomePage from './pages/Homepage';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export const renderRoutes = () => {
  return (
    <Switch>
      <AppRoute exact path="/" layout={BaseLayout} component={HomePage} />
      <AppRoute exact path="/about" layout={BaseLayout} component={About} />
      <AppRoute layout={EmptyLayout} component={NoMatch} />
    </Switch>
  );
};
