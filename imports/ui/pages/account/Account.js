import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Account extends Component {
  componentDidMount() {
    this.view = Blaze.render(
      Template.atForm,
      ReactDOM.findDOMNode(this.refs.loginForm)
    );
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  handleLogout = e => {
    e.preventDefault();
    Meteor.logout(this.props.history.push('/login'));
  };

  render() {
    return (
      <>
        <div className="login-form" ref="loginForm" />

        {Meteor.userId() && (
          <button onClick={e => this.handleLogout(e)}>Logout</button>
        )}
      </>
    );
  }
}
