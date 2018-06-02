import React from 'react';
import { inject, observer } from 'mobx-react';

const Cards = inject('store')(observer(({ store }) => {
  const { showTools, tools, pickTool } = store;
  if (!showTools) {
    return null;
  }
  return (
    <ul>
      {tools.length ? tools.map((item,index) => <li key={index} onClick={() => {pickTool(item)}}>{item.name}</li>) : null}
    </ul>
  )
}));

export default Cards;