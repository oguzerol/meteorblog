import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../../../api/posts';
class About extends React.Component {
  render() {
    const { posts } = this.props;
    return posts.map((post, idx) => <div key={`post-${idx}`}>{post.text}</div>);
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({}).fetch()
  };
})(About);
