import React from "react";
import {MessageWithTimeStamp} from './messageWithTimestamp'
import { SendComm } from "./sendComm";

export const ConversationThread = props => {
  return (
    <React.Fragment>
      {props.thread.map(message => (
        <MessageWithTimeStamp message={message}></MessageWithTimeStamp>
      ))}
      <SendComm></SendComm>
    </React.Fragment>
  );
};