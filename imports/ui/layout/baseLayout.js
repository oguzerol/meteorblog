import React from 'react';
import Content from '../routes';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div className="BaseLayoutDiv">
        <Content />
      </div>
    );
  }
}