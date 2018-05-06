import React from "react";

export default (props) => (
  <div>
    <p>Page B</p>
    <p><strong>{props.location.state.currentTool}</strong> has been used!</p>
  </div>
)