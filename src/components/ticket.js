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
    escalation,
    estimatedValue,
    closingPercentage
  } = props;

  const circleColor = escalation ? "red" : status == "Complete" ? "lightgreen" : "yellow"

  return (
    <div
      class="card"
      style={{
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: "white",
        cursor: "pointer"
      }}
    >
      <Circle status={circleColor}></Circle>
      <div style={{ color: "darkblue" }}> {client} </div>
      <div style={{ marginTop: "10px" }}>{jobType}</div>
      <div>EV: {estimatedValue}</div>
      <div>{status}</div>
      <div>Awaiting: {awaiting}</div>
    </div>
  );
};

const Circle = props => {
    return <div class="circle" style={{color: props.status, float: "right"}}/>
}
