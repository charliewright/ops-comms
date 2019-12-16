import React from "react";
import {Bubble} from "./bubble"

const fromPro = {
  color: "",
  sender: "Steve Hache",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "email",
  content: "Hey Divy, appreciate blah blah blah"
};

const fromOps = {
  color: "lightgoldenrodyellow",
  sender: "Divy",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "email",
  content: "Hey Client, appreciate blah blah blah"
};

export const ProConvo = props => {
  return (
    <React.Fragment>
      <Bubble {...fromOps}></Bubble>
      <Bubble {...fromPro}></Bubble>
      <Bubble {...fromOps}></Bubble>
      <Bubble {...fromPro}></Bubble>
    </React.Fragment>
  );
};
