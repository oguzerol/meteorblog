import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../../../api/posts';

import { handleChangeName } from '../../actions/index';

class HomePage extends React.Component {
  renderPost = () => {
    const { posts } = this.props;
    return posts.map((post, idx) => <div key={`post-${idx}`}>{post.text}</div>);
  };

  render() {
    const { handleChangeName, name } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {this.renderPost()}
        <div className="container">
          <div className="form-container">
            <p>Your Name: {name}</p>
            <input type="text" onChange={e => handleChangeName(e)} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  name: state.form.name
});

const mapDispatchToProps = dispatch => ({
  handleChangeName: e => {
    dispatch(handleChangeName(e.target.value));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withTracker(() => {
    return {
      posts: Posts.find({}).fetch()
    };
  })
)(HomePage);
