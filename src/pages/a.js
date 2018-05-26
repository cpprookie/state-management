import React from 'react';
import CardContainer from '../containers/CardContainer';
import PromptContainer from '../containers/PromptContainer';
import { connect } from 'react-redux';
import { toogleTools } from '../actions/actions';
 
const PageA = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={() => { onButtonClick() }}>Use tool</button>
      <CardContainer />
      <PromptContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(toogleTools())
    }
  }
}

export default connect(null, mapDispatchToProps)(PageA);