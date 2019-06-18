import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchPost } from '../../../api';

class DetailsPage extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    fetchPost(this.props.match.params)
      .then(post => this.setState({ post }))
      .catch(() => {
        this.props.history.push('/posts');
      });
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
        <NavLink to={`/post/${id}/edit`}>Edit</NavLink>
      </div>
    );
  }
}

export default DetailsPage;
