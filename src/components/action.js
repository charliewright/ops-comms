import React from "react";

export const Action = props => {
  const { type, label, action } = props;

  return (
    <div
      onClick={action}
      class="card"
      style={{
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: "white"
      }}
    >
      <div>
        {/* todo make it light and smaller */}
        <div><small>{type}</small></div>
        <div style={{ marginTop: "10px", textAlign:"center" }}> {label}</div>
      </div>
    </div>
  );
};
