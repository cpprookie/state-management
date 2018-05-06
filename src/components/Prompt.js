import React from "react";

export default ({ currentTool, clickHandler }) => currentTool ? (
  <section>
    <p>Are u sure to use {currentTool} ?</p>
    <div className="prompt-button-wrapper">
      <button onClick={() => {clickHandler(true)}}>Yes</button>
      <button onClick={() => {clickHandler(false)}}>Cancel</button>
    </div>
  </section>
) : null

