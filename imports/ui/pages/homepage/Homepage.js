import React from 'react';
import { Helmet } from 'react-helmet';

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home Page</title>
        </Helmet>

        <div className="container">Homepage</div>
      </>
    );
  }
}
