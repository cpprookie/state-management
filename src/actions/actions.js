import {
  TOOGLE_TOOLS,
  CONFIRM_USETOOL,
  SELECT_TOOL,
  SWITCH_PROMPT,
} from './actionType';

export function toogleTools() {
  return {
    type: TOOGLE_TOOLS,
  }
}

export function confirmUseTool(agreeUseTool) {
  return {
    type: CONFIRM_USETOOL,
    agreeUseTool,
  }
}

export function selectTool(tool) {
  return {
    type: SELECT_TOOL,
    tool,
  }
}

export function switchPrompt(on) {
  return {
    type: SWITCH_PROMPT,
    on,
  }
}