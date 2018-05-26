import Prompt from '../components/Prompt';
import {
  switchPrompt,
  confirmUseTool,
} from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    showPrompt: state.showPrompt,
    currentTool: state.currentTool,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: (agreed) => {
      dispatch(confirmUseTool(agreed))
      dispatch(switchPrompt(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);