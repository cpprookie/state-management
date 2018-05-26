import React from "react";

export default ({ showPrompt, currentTool, clickHandler }) => showPrompt ? (
  <section>
    <p>Are u sure to use {currentTool.name} ?</p>
    <div className="prompt-button-wrapper">
      <button onClick={() => {clickHandler(true)}}>Yes</button>
      <button onClick={() => {clickHandler(false)}}>Cancel</button>
    </div>
  </section>
) : null

