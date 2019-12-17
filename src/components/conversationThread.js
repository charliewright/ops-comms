import React from "react";
import { MessageWithTimeStamp } from "./messageWithTimestamp";
import { EditableTextArea } from "./editableTextArea";
import axios from "axios";

export class ConversationThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thread: props.thread };
  }

  sendToUser = (messageContent, messageType) => {
    const body = {
      type: "seasonal_campaign",
      client_id: 24085,
      noti_title: "New message from Meghna",
      noti_body: messageContent,
      seasonal_campaign_id: 1
    };

    if ((messageType = "Mobile")) {
      axios.post("https://api.setter.com/public/v1/push-notifications", body);

      alert("green sent to a mobile user");
    }
  };

  addToQueue = (messageContent, messageType) => {
    const newArray = this.state.thread.slice();
    const oneItem = this.state.thread.slice(-1)[0];
    const fromOps = {
      color: oneItem.color,
      sender: oneItem.sender,
      time: new Date().toLocaleString().slice(12), // time, rather than date
      date: "Dec 12",
      comm: messageType,
      content: messageContent
    };

    this.setState({ thread: [fromOps].concat(newArray) });
  };

  sendMessage = (messageContent, messageType) => {
    this.sendToUser(messageContent, messageType);
    this.addToQueue(messageContent, messageType);
  };

  render = () => {
    return (
      <React.Fragment>
        {this.state.thread.map(message => (
          <MessageWithTimeStamp message={message}></MessageWithTimeStamp>
        ))}
        <EditableTextArea sendMessage={this.sendMessage} />
      </React.Fragment>
    );
  };
}
