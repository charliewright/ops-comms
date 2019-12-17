import React from "react";
import { Bubble } from "./bubble";

export const MessageWithTimeStamp = props => {
    return (
      <div>
        <div style={{textAlign: "center", marginBottom:"5px"}}>{props.message.time}</div>
        <Bubble {...props.message}></Bubble>
      </div>
    );
  };
  