import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";

export class EditableTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: "",
      isEmail: true,
      isMobile: false,
      isSMS: false
    };
  }

  textChanged = event => {
    this.setState({ messageContent: event.target.value });
  };

  sendMessage = messageContent => {
    this.setState({ messageContent: "" });
    this.props.sendMessage(
      messageContent,
      this.messageType()
    );
  };

  messageType = () => {
    if(this.state.isEmail) return "Email"
    if(this.state.isSMS) return "SMS"
    if(this.state.isMobile) return "Mobile"
  }

  toggleType = sendTo => {
    if (sendTo === "email") {
      return this.setState({ isEmail: true, isMobile: false, isSMS: false });
    }
    if (sendTo === "sms") {
      return this.setState({ isEmail: false, isMobile: false, isSMS: true });
    }
    return this.setState({ isEmail: false, isMobile: true, isSMS: false });
  };

  render = () => {
    return (
      <span>
        <SelectEmail selected={this.state.isEmail} onClick={() => this.toggleType("email")} />
        <SelectSMS selected={this.state.isSMS} onClick={() => this.toggleType("sms")} />
        <SelectMobile
          selected={this.state.isMobile}
          onClick={() => this.toggleType("mobile")}
        />
        <TextField
          multiline
          value={this.state.messageContent}
          onChange={this.textChanged}
          rows={5}
          style={{ width: "90%" }}
        ></TextField>
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
  return (
    <MailOutlineIcon
      onClick={props.onClick}
      style={{
        verticalAlign: "top",
        color: props.selected ? "green" : "black"
      }}
      fontSize="large"
    />
  );
};
const SelectSMS = props => {
  return (
    <SmsOutlinedIcon
      onClick={props.onClick}
      style={{
        verticalAlign: "top",
        color: props.selected ? "green" : "black"
      }}
      fontSize="large"
    />
  );
};

const SelectMobile = props => {
  return (
    <PhoneIphoneOutlinedIcon
      onClick={props.onClick}
      style={{
        verticalAlign: "top",
        color: props.selected ? "green" : "black"
      }}
      fontSize="large"
    />
  );
};
