import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
export class EditableTextArea extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { messageContent: "", isEmail: true};
  }

  textChanged = event => {
    this.setState({messageContent: event.target.value})
  }

  sendMessage = messageContent => {
    this.setState({messageContent: ""})
    this.props.sendMessage(messageContent, this.state.isEmail ? "Email" : "SMS")
  }

  toggleType = () => {
    this.setState({isEmail: !this.state.isEmail})
  }

  render = () => {
    return (
      <span>
        <SelectEmail selected={this.state.isEmail} onClick={this.toggleType}/>
        <SelectSMS selected={!this.state.isEmail} onClick={this.toggleType}/>
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

const SelectEmail = props => {
  return <MailOutlineIcon onClick={props.onClick} style={{ verticalAlign: "top", color: props.selected ? "green" : "black" }} fontSize="large" />
}
const SelectSMS = props => {
  return <SmsOutlinedIcon onClick={props.onClick} style={{ verticalAlign: "top", color: props.selected ? "green" : "black" }} fontSize="large" />
}
