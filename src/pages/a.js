import React, { Component } from 'react';
import Cards from '../components/cards';
import Prompt from '../components/Prompt'
import { inject, observer } from "mobx-react"

@inject('store')
@observer
class PageA extends Component {
  render() {
    const { toggleTools } = this.props.store;
    return (
      <div>
        <button onClick={() => { toggleTools(); }}>Use tool</button>
        <Cards />
        <Prompt />
      </div>
    )
  }
}

export default PageA;