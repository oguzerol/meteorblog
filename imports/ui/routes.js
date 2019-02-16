import React from 'react';
import { Switch } from 'react-router';

import { AppRoute } from './helpers/layoutUtils';

// Layouts
import { BaseLayout } from './layout/BaseLayout';
import { EmptyLayout } from './layout/EmptyLayout';

// Pages
import HomePage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Account from './pages/account/Account';
import NoMatch from './pages/nomatch/NoMatch';

export const renderRoutes = () => {
  return (
    <Switch>
      <AppRoute exact path="/" layout={BaseLayout} component={HomePage} />
      <AppRoute exact path="/login" layout={BaseLayout} component={Account} />
      <AppRoute
        private
        exact
        path="/about"
        layout={BaseLayout}
        component={About}
      />
      <AppRoute layout={EmptyLayout} component={NoMatch} />
    </Switch>
  );
};
