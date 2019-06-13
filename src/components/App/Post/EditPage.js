import React, { Component } from 'react';

import { fetchPost, updatePost } from '../../../api';
import { Input } from '../../Form';

class EditPage extends Component {
  state = {
    post: {},
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      post: {
        ...this.state.post,
        [name]: value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    updatePost(this.state.post).then(post =>
      this.props.history.push(`/post/${post.id}`),
    );
  };

  componentDidMount() {
    fetchPost(this.props.match.params)
      .then(data => this.setState({ post: data }))
      .catch(() => {
        this.props.history.push('/posts');
      });
  }

  render() {
    const { post } = this.state;

    if (!post.id) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <img src={post.imageUrl} alt={post.title} />
          <Input
            type="text"
            name="imageUrl"
            value={post.imageUrl}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="title"
            value={post.title}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="body"
            value={post.body}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Update Post
          </button>
        </form>
      </div>
    );
  }
}

export default EditPage;
