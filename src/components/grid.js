import React from "react";
import "./Grid.css";

export const Column = props => {
  return (
    <div class={"column " + props.class + " " + props.color}>
        {props.children || props.text}
    </div>
  );
};

export const Row = props => {
  return <div class="row">{props.children}</div>;
};