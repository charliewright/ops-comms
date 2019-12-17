import React from "react";
import {MessageWithTimeStamp} from './messageWithTimestamp'
import { EditableTextArea } from "./editableTextArea";

export const ConversationThread = props => {
  return (
    <React.Fragment>
      {props.thread.map(message => (
        <MessageWithTimeStamp message={message}></MessageWithTimeStamp>
      ))}
      <EditableTextArea/>
    </React.Fragment>
  );
};