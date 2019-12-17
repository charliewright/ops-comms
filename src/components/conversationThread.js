import React from "react";
import { MessageWithTimeStamp } from "./messageWithTimestamp";
import { EditableTextArea } from "./editableTextArea";



export class ConversationThread extends React.Component {

  constructor(props) {
    super(props);
    this.state = { thread: props.thread };
  }

  addMessage = (messageContent, messageType) => {

    const newArray = this.state.thread.slice()
    const oneItem = this.state.thread.slice(-1)[0]
    const fromOps = {
      color: oneItem.color,
      sender: oneItem.color,
      time: new Date().toLocaleString().slice(12), // time, rather than date
      date: "Dec 12",
      comm: messageType,
      content: messageContent
    };

    this.setState({thread: [fromOps].concat(newArray) })
  }

  render = () => {
    
    return (
      <React.Fragment>
        {this.state.thread.map(message => (
          <MessageWithTimeStamp message={message}></MessageWithTimeStamp>
        ))}
        <EditableTextArea sendMessage={this.addMessage} />
      </React.Fragment>
    );
  };
}
