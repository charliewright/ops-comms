import React from "react";
import {MessageWithTimeStamp} from './messageWithTimestamp'

export const ConversationThread = props => {
  return (
    <React.Fragment>
      {props.thread.map(message => (
        <MessageWithTimeStamp message={message}></MessageWithTimeStamp>
      ))}
    </React.Fragment>
  );
};