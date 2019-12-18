import React from "react";
import { MessageWithTimeStamp } from "./messageWithTimestamp";
import { EditableTextArea } from "./editableTextArea";
import axios from "axios";


const params = (obj) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&');

const createTwilioParams = (user, messageContent) => {
  const twilioBody = {
    phone_number:user.phone,
    sender_name:"Meghna Saraf",
    receiver_name:"Arjun Mangla",
    message_body:messageContent,
    job_type:"Washing Machine Diagnostic"
  }
  return params(twilioBody)
}

const createEmailParams = (user, messageContent) => {
  const emailBody = {
    sender_name:"Meghna Saraf",
    receiver_name:"Arjun Mangla",
    message_body:messageContent,
    email_id:user.email,
    job_type:"Washing Machine Diagnostic"
  }

  return params(emailBody)
}

const inAppMessage = (user, messageContent) => {
  return {
    type: "seasonal_campaign",
    client_id: user.clientId,
    noti_title: "New message from Meghna (Setter)",
    noti_body: messageContent,
    seasonal_campaign_id: 1
  };
}



export class ConversationThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thread: props.thread };
  }

  sendToUser = (messageContent, messageType) => {
    console.log(messageType)

    const people = {
      charlie: {
        phone: "5148895825",
        email: "charles.wright@setter.com",
        clientId: 24085
      },
      ambles: {
        phone: "6478663319",
        clientId: 24256,
        email: "ambles.kwok@gmail.com"
      },
      samantha: {
        email: "samantha.walsh@setter.com",
        phone: "6284441771"
      },
      david: {
        phone:"4168897838"
      }
    };

    if(messageType==="Email") {
      axios.post("https://hooks.zapier.com/hooks/catch/3282867/ot2tslk/?" + createEmailParams(people.charlie, messageContent))
      axios.post("https://hooks.zapier.com/hooks/catch/3282867/ot2tslk/?" + createEmailParams(people.ambles, messageContent))
      axios.post("https://hooks.zapier.com/hooks/catch/3282867/ot2tslk/?" + createEmailParams(people.samantha, messageContent))
    }
    if (messageType==="SMS") {
      axios.post("https://hooks.zapier.com/hooks/catch/3282867/ot26i9q/?" + createTwilioParams(people.charlie, messageContent))
      axios.post("https://hooks.zapier.com/hooks/catch/3282867/ot26i9q/?" + createTwilioParams(people.ambles, messageContent))
      axios.post("https://hooks.zapier.com/hooks/catch/3282867/ot26i9q/?" + createTwilioParams(people.david, messageContent))

    }
    if (messageType==="Mobile") {
      axios.post("https://api.setter.com/public/v1/push-notifications", inAppMessage(people.charlie, messageContent));
      axios.post("https://api.setter.com/public/v1/push-notifications", inAppMessage(people.ambles, messageContent));

    }
  };

  addToQueue = (messageContent, messageType) => {
    const newArray = this.state.thread.slice();
    const oneItem = this.state.thread.slice(-1)[0];
    const fromOps = {
      color: oneItem.color,
      sender: oneItem.sender,
      time: new Date().toLocaleString().slice(12), // time, rather than date
      date: "Dec 12",
      comm: messageType,
      content: messageContent
    };

    this.setState({ thread: [fromOps].concat(newArray) });
  };

  sendMessage = (messageContent, messageType) => {
    this.sendToUser(messageContent, messageType);
    this.addToQueue(messageContent, messageType);
  };

  render = () => {
    return (
      <React.Fragment>
        {this.state.thread.map(message => (
          <MessageWithTimeStamp message={message}></MessageWithTimeStamp>
        ))}
        <EditableTextArea sendMessage={this.sendMessage} />
      </React.Fragment>
    );
  };
}
