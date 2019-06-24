import React, { Component } from 'react';

import { Input } from '../../Form';

const generatePostUrl = () => {
  const imgNumber = Math.floor(Math.random() * 100);
  return `https://picsum.photos/320/240?image=${imgNumber}`;
};

class PostQuickAdd extends Component {
  emptyPost = {
    title: '',
    body: '',
  };

  state = {
    showForm: false,
    ...this.emptyPost,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleToggle = () => this.setState({ showForm: !this.state.showForm });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      ...this.state,
      imageUrl: generatePostUrl(),
    });

    this.setState(this.emptyPost);
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-secondary"
          onClick={this.handleToggle}>
          +
        </button>

        {this.state.showForm && (
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Add Post
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default PostQuickAdd;
