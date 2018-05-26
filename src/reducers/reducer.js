import {
  TOOGLE_TOOLS,
  SWITCH_PROMPT,
  SELECT_TOOL,
  CONFIRM_USETOOL,
} from '../actions/actionType'

const initialState = {
  showTools: false,
  showPrompt: false,
  tools: [
    { name: 'egg' },
    { name: 'boom' },
    { name: 'kiss' },
  ],
  currentTool: {
    name: ''
  },
  agreeUseTool: false,
}

export default function toolPicker(state = initialState, action) {
  switch(action.type) {
    case TOOGLE_TOOLS:
      if(state.showPrompt) {
        return state;
      }
      return Object.assign({}, state, { showTools: !state.showTools });
    case SWITCH_PROMPT:
      return Object.assign({}, state, { showPrompt: action.on})
    case SELECT_TOOL:
      return Object.assign({}, state, { currentTool: action.tool })
    case CONFIRM_USETOOL:
      return Object.assign({}, state, {
        agreeUseTool: action.agreeUseTool,
        showPrompt: false,
        showTools: !action.agreeUseTool,
      })
    default:
      return state; 
  }
}
