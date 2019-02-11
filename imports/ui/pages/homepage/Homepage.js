import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleChangeName } from '../../actions/index';

class HomePage extends React.Component {
  handleChangeName = e => {
    const name = e.target.value;
    this.props.actions.handleChangeName(name);
  };

  render() {
    const { name } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="container">
          <div className="form-container">
            <p>Your Name: {name}</p>
            <input type="text" onChange={this.handleChangeName} />
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    name: state.form.name
  }),
  dispatch => ({
    actions: bindActionCreators({ handleChangeName }, dispatch)
  })
)(HomePage);
