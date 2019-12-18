import React from "react";
import { Column, Row } from "./components/grid";
import { ConversationThread } from "./components/conversationThread";
import { TicketList } from "./components/ticketList";
import { ticketInfo } from "./data/ticketInfo";
import { ClientDetailsView } from "./components/clientDetails";
import "./App.css";
import { tickets } from "./data/tickets";
import { HotkeyModal} from "./components/hotkeyModal"

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
    if (e.keyCode == 17) {
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



