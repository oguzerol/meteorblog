import React from 'react';

export const baseLayout = props => (
  <div>
    <h1>Header</h1>
    {props.children}
    <h1>footer</h1>
  </div>
)