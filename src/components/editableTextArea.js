import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Button } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/Email';


export const EditableTextArea = props => {
  return (
    <span>
      <MailOutlineIcon style={{verticalAlign:"top"}}fontSize="large"/>
      <TextareaAutosize rowsMin={5} style={{width: "90%"}}></TextareaAutosize>
      <div style={{margin: "10px", textAlign: "center"}}>
        <Button variant="contained" color="primary">Send</Button>
      </div>
    </span>
  );
};
