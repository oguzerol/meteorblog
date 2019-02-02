import React from 'react';
import { Helmet } from 'react-helmet';
import AccountsUIWrapper from '../components/AccountsUIWrapper';

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <AccountsUIWrapper />

        <div className="container">test</div>
      </>
    );
  }
}
