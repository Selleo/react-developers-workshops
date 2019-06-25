import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { getPost, fetchPost } from '../../../store/posts';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  componentDidMount() {
    if (!this.props.post.data.id) {
      this.props.fetchPost(this.props.match.params);
    }
  }

  render() {
    const { post } = this.props;
    const { id, imageUrl, title, body } = post.data;

    if (post.loading) {
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

const mapStateToProps = (state, ownProps) => ({
  post: getPost(state, ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: fetchPost(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
