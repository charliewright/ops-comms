import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { addresses, orders, client } from "../data/clientDetails";


export const ClientDetailsView = props => {
    return (
        <div class="card" >
            <div style={{marginTop: "15px", marginBottom:"15px", marginLeft:"5px"}}>Client Details</div>
            <ClientDetails {...client}/>
            <div style={{marginTop: "15px", marginBottom:"15px", marginLeft:"5px"}}>Addresses </div>
            <Address {...addresses[0]}/>
            <div style={{marginTop: "15px", marginBottom:"15px", marginLeft:"5px"}}>Active Orders</div>
            <Order {...orders[0]}/>
        </div>
    )
}

const ClientDetails = props => {
  const { name, email, phone } = props;
  return (
   <div style={{margin: "15px"}}>
      <div>
        Name: <strong>{name}</strong>
      </div>
      <div>
        Email: <strong>{email}</strong>
      </div>
      <div>
        Phone: <strong>{phone}</strong>
      </div>
    </div>
  );
};

const Address = props => {
  const {
    streetNumber,
    streetName,
    unitNumber,
    serviceRegion,
    postal,
    parking,
    access
  } = props;
  return (
   <div style={{margin: "15px"}}>
      <div>
        Street Number: <strong>{streetNumber}</strong>
      </div>
      <div>
        Street Name: <strong>{streetName}</strong>
      </div>
      <div>
        Unit Number: <strong>{unitNumber}</strong>
      </div>
      <div>
        Service Region: <strong>{serviceRegion}</strong>
      </div>
      <div>
        Postal/Zip: <strong>{postal}</strong>
      </div>
      <div>
        Parking: <strong>{parking}</strong>
      </div>
      <div>
        Access Instructions: <strong>{access}</strong>
      </div>
    </div>
  );
};

const Order = props => {
  const {
    title,
    pipeline,
    orderAmout,
    approved,
    scheduledDate,
    pro,
    escalation
  } = props;
  return (
   <div style={{margin: "15px"}}>
      <div>
        Title: <strong>{title}</strong>
      </div>
      <div>
        Pipeline: <strong>{pipeline}</strong>
      </div>
      <div>
        Order Amount: <strong>{orderAmout}</strong>
      </div>
      <div>
        Approved: <strong>{approved}</strong>
      </div>
      <div>
        Scheduled Date: <strong>{scheduledDate}</strong>
      </div>
      <div>
        Pro <strong>{pro}</strong>
      </div>
      <div>
        Escalation: <strong>{escalation}</strong>
      </div>
    </div>
  );
};

