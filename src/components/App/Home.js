import React, {Component} from 'react';
import {range} from 'lodash';
import faker from 'faker';

class Home extends Component {
  state = {
    posts: range(1, 3).map(id => ({
      id,
      title: faker.lorem.sentence(),
      body: faker.lorem.sentences(10),
      imageUrl: `https://picsum.photos/320/240?image=${120 + id}`,
    })),
  };

  render() {
    return (
      <div className="d-flex align-content-sm-stretch flex-wrap">
        {this.state.posts.map(post => (
          <div key={post.id} style={{padding: '1rem'}}>
            <div className="card" style={{width: '18rem'}}>
              <img
                className="card-img-top"
                src={post.imageUrl}
                alt={post.title}
              />
              <div className="card-body">
                <p className="card-text">{post.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
