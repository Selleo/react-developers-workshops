import React from 'react';
import qs from 'query-string';

export default props => (
  <div>
    <h1>Router</h1>
    <h4>search</h4>
    <pre>{JSON.stringify(qs.parse(props.location.search), null, 2)}</pre>
    <h4>props</h4>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);
