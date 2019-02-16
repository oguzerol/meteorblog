import React from 'react';
import { Route, Redirect } from 'react-router';

export const AppRoute = ({
  component: Component,
  layout: Layout,
  private,
  ...rest
}) => {
  renderLayout = props => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
  renderRedirect = (props, path) => {
    return (
      <Redirect
        to={{
          pathname: path,
          state: { from: props.location }
        }}
      />
    );
  };
  return (
    <Route
      {...rest}
      render={props => {
        return private
          ? Meteor.userId()
            ? renderLayout(props)
            : renderRedirect(props, '/login')
          : renderLayout(props);
      }}
    />
  );
};
