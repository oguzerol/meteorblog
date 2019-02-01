import React from 'react';
import { Helmet } from 'react-helmet';
export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>Homepage</div>
      </>
    );
  }
}
