import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Button } from "@material-ui/core";

export default function EmptyTextarea() {
  return;
}

export const SendComm = props => {
  return (
    <span>
      <span style={{verticalAlign:"top"}}>✉️</span>
      <TextareaAutosize rowsMin={5} style={{width: "90%"}}></TextareaAutosize>
      <div style={{margin: "10px", textAlign: "center"}}>
        <Button variant="contained" color="primary">Send</Button>
      </div>
    </span>
  );
};
