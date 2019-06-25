import React, { Component, Fragment } from 'react';

import { createPost } from '../../../api';
import PostCard from './PostCard';
import PostQuickAdd from './PostQuickAdd';
import { fetchPosts, getPosts } from '../../../store/posts';
import { connect } from 'react-redux';

class ListPage extends Component {
  state = {
    posts: [],
    error: null,
  };

  componentDidMount() {
    this.props.fetchPosts({ limit: 6 });
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
    const { posts } = this.props;

    return (
      <Fragment>
        {posts.error && <div className="alert alert-danger">{posts.error}</div>}

        <PostQuickAdd onSubmit={this.addPost} />

        {posts.loading && <div>Loading ...</div>}

        <div className="d-flex flex-wrap">
          {posts.data.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: fetchPosts(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage);
