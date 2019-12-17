import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/Email";

export class EditableTextArea extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { messageContent: "" };
  }

  textChanged = event => {
    this.setState({messageContent: event.target.value})
  }

  sendMessage = messageContent => {
    this.setState({messageContent: ""})
    this.props.sendMessage(messageContent)
  }

  render = () => {
    return (
      <span>
        <MailOutlineIcon style={{ verticalAlign: "top" }} fontSize="large" />
        <TextField multiline value={this.state.messageContent} onChange={this.textChanged} rows={5} style={{ width: "90%" }}></TextField>
        <div style={{ margin: "10px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.sendMessage(this.state.messageContent)}
          >
            Send
          </Button>
        </div>
      </span>
    );
  };
}
