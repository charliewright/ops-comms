import React from "react";
import "./Grid.css";

export const Column = props => {
  return (
    <div class={"column " + props.class}>
      <div class={props.color}>{props.text}</div>
    </div>
  );
};

export const Row = props => {
  return <div class="row">{props.children}</div>;
};