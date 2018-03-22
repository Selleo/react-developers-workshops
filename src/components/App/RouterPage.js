import React from 'react';

export default props => (
  <div>
    <h1>Router</h1>
    <p>props</p>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);
