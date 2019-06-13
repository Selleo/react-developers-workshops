import React, { Component, Fragment } from 'react';
import { times } from 'lodash';

import { fetchPosts, createPost } from '../../../api';
import PostCard from './PostCard';
import PostQuickAdd from './PostQuickAdd';

class ListPage extends Component {
  state = {
    posts: [],
    error: null,
  };

  componentDidMount() {
    fetchPosts({ limit: 4 }).then(data => this.setState({ posts: data }));
  }

  addPost = post => {
    this.setState({ error: null });

    createPost(post)
      .then(data => {
        this.setState({
          posts: [data, ...this.state.posts],
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <Fragment>
        {this.state.error && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}

        <PostQuickAdd onSubmit={this.addPost} />

        <div className="d-flex flex-wrap">
          {this.state.posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ListPage;
