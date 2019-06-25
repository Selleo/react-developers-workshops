import React, { Component } from 'react';

import { updatePost } from '../../../api';
import { Input } from '../../Form';
import { getPost, fetchPost } from '../../../store/posts';
import { connect } from 'react-redux';

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

    const post = {
      ...this.props.post.data,
      ...this.state.post,
    };

    updatePost(post).then(({ id }) => this.props.history.push(`/post/${id}`));
  };

  componentDidMount() {
    if (!this.props.post.data.id) {
      this.props.fetchPost(this.props.match.params);
    }
  }

  render() {
    const post = {
      ...this.props.post.data,
      ...this.state.post,
    };

    if (this.props.post.loading) {
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

const mapStateToProps = (state, ownProps) => ({
  post: getPost(state, ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: fetchPost(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPage);
