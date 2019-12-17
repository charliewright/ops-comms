import React from "react";
import { Ticket } from "./ticket";
import { tickets } from "../data/tickets";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const TicketList = props => {
  return (
    <React.Fragment>
      <TicketHeader />
      {tickets.map(ticket => (
        <Ticket {...ticket}></Ticket>
      ))}
    </React.Fragment>
  );
};

const TicketHeader = () => {
  return (
    <div
      class="card"
      style={{
        paddingLeft: "15px",
        paddingRight: "15px",
        marginBottom: "10px",
        backgroundColor: "white",
        minHeight:"55px",
        lineHeight:"55px"
      }}
    >
      <big style={{verticalAlign:"middle"}}>Ticket View</big> <KeyboardArrowDownIcon style={{padding: "15px", float:"right"}}fontSize="large" />
    </div>
  );
};
