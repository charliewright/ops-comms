import React from "react";
import { MessageWithTimeStamp } from "./messageWithTimestamp";
import { EditableTextArea } from "./editableTextArea";



export class ConversationThread extends React.Component {

  constructor(props) {
    super(props);
    this.state = { thread: props.thread };
  }

  addMessage = messageContent => {
    const fromOps = this.state.thread.slice(-1)[0]
    fromOps.content= messageContent
    fromOps.time = (new Date().toLocaleString()).slice(12) // time, rather than date
    this.setState({thread: [fromOps].concat(this.state.thread)})
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
