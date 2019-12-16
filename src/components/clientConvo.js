import React from "react";
import {Bubble} from "./bubble"

const fromClient = {
  blueBubble: false,
  sender: "Client",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "email",
  content: "Hey Divy, appreciate blah blah blah"
};

const fromOps = {
  blueBubble: true,
  sender: "Divy",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "email",
  content: "Hey Client, appreciate blah blah blah"
};

export const ClientConvo = props => {
  return (
    <React.Fragment>
      <Bubble {...fromOps}></Bubble>
      <Bubble {...fromClient}></Bubble>
      <Bubble {...fromOps}></Bubble>
      <Bubble {...fromClient}></Bubble>
    </React.Fragment>
  );
};
