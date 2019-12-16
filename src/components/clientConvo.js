import React from "react";
import {Bubble} from "./bubble"

const fromClient = {
  color: "",
  sender: "Client",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "sms",
  content: "Hey Divy, appreciate blah blah blah"
};

const fromOps = {
  color: "lightblue",
  sender: "Divy",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "sms",
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