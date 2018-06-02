import React from "react";
import { inject, observer } from 'mobx-react';

const Prompt = inject('store')(observer(({ store }) => {
  const { showPrompt, currentTool, confirmUseTool } = store;
  if (!showPrompt) {
    return null
  }
  return (
    <section>
      <p>Are u sure to use {currentTool.name} ?</p>
      <div className="prompt-button-wrapper">
        <button onClick={() => {confirmUseTool(true)}}>Yes</button>
        <button onClick={() => {confirmUseTool(false)}}>Cancel</button>
      </div>
    </section>
  );
}));

export default Prompt;
