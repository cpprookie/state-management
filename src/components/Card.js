import React from 'react';

export default ({ tool, clickHandler }) => (
  <ul>
  <li onClick={() => {clickHandler(tool)}}>{tool.name}</li>
  </ul>
)