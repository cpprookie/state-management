import React from 'react';

export default ({ tools, clickHandler }) => (
  <ul>
    {console.log(tools)}
    {tools.length ? tools.map((item,index) => <li key={index} onClick={() => {clickHandler(item.name)}}>{item.name}</li>) : null}
  </ul>
)
