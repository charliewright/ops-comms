import React from "react";
import { Ticket } from "./ticket";
import { tickets } from "../data/tickets";

export const TicketList = props => {
  return (
    <React.Fragment>
      {tickets.map(ticket => (
        <Ticket {...ticket}></Ticket>
      ))}
    </React.Fragment>
  );
};
