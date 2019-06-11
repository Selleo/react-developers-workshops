import React, { Component, Fragment } from 'react';
import { times } from 'lodash';
import faker from 'faker';

import PostCard from './PostCard';
import PostQuickAdd from './PostQuickAdd';

class ListPage extends Component {
  state = {
    posts: times(3).map(id => ({
      id,
      title: faker.lorem.sentence(),
      body: faker.lorem.sentences(10),
      imageUrl: `https://picsum.photos/320/240?image=${120 + id}`,
    })),
  };

  addPost = post => {
    this.setState({
      posts: [post, ...this.state.posts],
    });
  };

  render() {
    return (
      <Fragment>
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
