import React from 'react';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div>
        No match for <code>{this.props.location.pathname}</code>
      </div>
    );
  }
}