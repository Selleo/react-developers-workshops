import React from 'react';

const PostCard = ({ id, title, body, imageUrl }) => (
  <div style={{ padding: '1rem' }}>
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  </div>
);

export default PostCard;
