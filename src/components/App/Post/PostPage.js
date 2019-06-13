import React, { Component } from 'react';

import { fetchPost } from '../../../api';

class PostPage extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    fetchPost(this.props.match.params)
      .then(data =>
        this.setState({ post: data }),
      ).catch(() => {
        this.props.history.push('/posts')
      })
  }

  render() {
    const { id, imageUrl, title, body } = this.state.post;

    if (!id) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default PostPage;
