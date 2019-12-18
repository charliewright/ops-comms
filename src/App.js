import React from "react";
import { Column, Row } from "./components/grid";
import { ConversationThread } from "./components/conversationThread";
import { TicketList } from "./components/ticketList";
import { ticketInfo } from "./data/ticketInfo";
import { ClientDetailsView } from "./components/clientDetails";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
import { tickets } from "./data/tickets";

import Modal from "@material-ui/core/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHotkeys: false,
      selectedTicket: { ...ticketInfo[0], ticket: tickets[0] }
    };
  }

  selectTicket = id => {
    // console.log(ticketInfo[id])
    const newState = {
      selectedTicket: { ...ticketInfo[id], ticket: tickets[id] }
    };
    console.log(newState.selectedTicket.clientConversation[0]);
    this.setState(newState);
  };

  keyPressed = e => {
    // if you press the command key
    if (e.keyCode == 91) {
      this.setState({ toggleHotkeys: !this.state.toggleHotkeys });
    }
  };

  render = () => {
    const pageTitle = `${this.state.selectedTicket.ticket.client} - ${this.state.selectedTicket.ticket.jobType}`;
    return (
      <div
        className="App"
        tabindex={0}
        onKeyDown={this.keyPressed}
        onKeyUp={this.keyReleased}
      >
        <HotkeyModal open={this.state.toggleHotkeys} />
        <h1 style={{ textAlign: "center" }}>{pageTitle}</h1>
        <Row>
          <Column color={"blue"} class="half">
            <TicketList selectTicket={this.selectTicket} />
          </Column>
          <Column>
            <ConversationThread
              thread={this.state.selectedTicket.clientConversation}
            ></ConversationThread>
          </Column>
          <Column>
            <ConversationThread
              thread={this.state.selectedTicket.proConversation}
            ></ConversationThread>
          </Column>
          <Column class="half">
            <ClientDetailsView />
          </Column>
        </Row>
      </div>
    );
  };
}

export default App;


const styles = {
  root: {
    // background: "black"
    color: "white"
  },
  input: {
    color: "white",
    fontSize: "20px",
    paddingLeft: "20px"
  }
};

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <TextField
      // defaultValue="color"
      style={{ width: "80%", padding: "10px"}}
      autoFocus
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
    />
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};


const WhiteTextField = withStyles(styles)(CustomizedInputs);

const HotkeyModal = props => {
  debugger;
  return (
    <Modal open={props.open}>
      <div
      class="modal"
        style={{
          backgroundColor: "black",
          // textAlign: "center",
          color: "#ECECEC",
          width: "50%",
          position: "absolute",
          top: "25%",
          left: "25%",
          borderRadius: "2px"
        }}
      >
        <h2 style={{ textAlign: "left", paddingLeft: "20px" }}>HMHQ</h2>
        <WhiteTextField/>
        <div class="hoverableAction" style={{fontSize: "20px", padding: "10px"}}>Clone a quote</div>
        <div class="hoverableAction" style={{fontSize: "20px", padding: "10px"}}>AutoQuote >> Home Consultation</div>
        <div class="hoverableAction" style={{fontSize: "20px", padding: "10px"}}>Handoff >> Coordination</div>
        <div class="hoverableAction" style={{fontSize: "20px", padding: "10px"}}>Hold >> 1 Day</div>
      </div>
    </Modal>
  );
};
