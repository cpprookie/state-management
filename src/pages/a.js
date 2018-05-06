import React, { Component } from 'react';
import Cards from '../components/cards';
import Prompt from '../components/Prompt'

export default class PageA extends Component {
  constructor() {
    super();
    this.state = {
      tools: [
        { name: 'egg' },
        { name: 'boom' },
        { name: 'kiss' },
      ],
      showTools: false,
      showPrompt: false,
      currentTool: '',
    };
    const methods = [ 
      'closePrompt',
      'pickTool'
    ]
    methods.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  toggleTools() {
    this.setState(prevState => { 
      return {
        showTools: !prevState.showTools
      } 
    });
    // this.setState({ showTools: true })
  }

  closePrompt(confirm) {
    this.setState({
      showPrompt: false,
      showTools: !confirm,
    })
    if (confirm) {
      this.props.history.push('/b', { currentTool: this.state.currentTool })
    }
  }

  pickTool(name) {
    this.setState({ 
      currentTool: name,
      showPrompt: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.toggleTools() }}>Use tool</button>
        { this.state.showTools ? <Cards tools={this.state.tools} clickHandler = {this.pickTool} /> : null}
        { this.state.showPrompt? <Prompt currentTool={this.state.currentTool} clickHandler={this.closePrompt} /> : null}
      </div>
    )
  }
}
