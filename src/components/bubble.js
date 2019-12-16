import React from "react";

export const Bubble = props => {
  const { color, sender, time, date, comm, content } = props;

  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: color ? color : "white"
      }}
    >
      <div style={{ height: "30px" }}>
        <span style={{ float: "left" }}>
          <span style={{ color: "darkblue" }}> {sender} </span> - {comm}
        </span>
        <span style={{ float: "right" }}>{date}</span>
      </div>
      <div style={{ marginTop: "10px" }}> {content}</div>
    </div>
  );
};
