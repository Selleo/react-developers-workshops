import React from 'react';

import { NavLink } from 'react-router-dom';

const PostCard = ({ id, title, body, imageUrl }) => (
  <NavLink style={{ padding: '1rem' }} to={`/post/${id}`}>
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  </NavLink>
);

export default PostCard;
