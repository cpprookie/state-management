import Card from '../components/Card';
import React from 'react';
import { connect } from 'react-redux';
import {
  switchPrompt,
  selectTool,
} from '../actions/actions';

const Cards = ({ showTools, tools, clickHandler }) => {
  if (!showTools) {
    return null;
  }
  return (
    <ul>
      {
        tools.length ? tools.map((item, index) => <Card tool={item} key={index} clickHandler={clickHandler}/>) : null
      }
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    tools: state.tools,
    showTools: state.showTools,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: (tool) => {
      dispatch(selectTool(tool));
      dispatch(switchPrompt(true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);