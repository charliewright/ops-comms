import React from "react";

export const Ticket = props => {
  const {
    id,
    jobType,
    client,
    status,
    tier,
    setterProtect,
    awaiting,
    estimatedValue,
    closingPercentage
  } = props;

  return (
    <div
      class="card"
      style={{
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: "white"
      }}
    >
      <div style={{ color: "darkblue" }}> {client} </div>
      <div style={{ marginTop: "10px" }}>{jobType}</div>
      <div>{status}</div>
      <div>{awaiting}</div>
    </div>
  );
};
