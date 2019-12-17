import React from "react";
import { Column, Row } from "./components/grid";
import { ConversationThread } from "./components/conversationThread";
import { TicketList } from "./components/ticketList";
import {ticketInfo} from "./data/ticketInfo"
import {ClientDetailsView} from "./components/clientDetails"

import "./App.css";
import { ActionList } from "./components/actionList";

class App extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = { toggleHotkeys: false, selectedTicket : {...ticketInfo[0]}  };
  }

  changeTicket = (id) => {
    this.setState({selectedTicket: {}})
  }

  keyPressed = e => {
    // if you press the command key
    if (e.keyCode == 91) {
      this.setState({ toggleHotkeys: true });
    }
  };

  keyReleased = e => {
    // if you press the command key
    if (e.keyCode == 91) {
      this.setState({ toggleHotkeys: false });
    }
  };

  render = () => {
    return (
      <div
        className="App"
        tabindex={0}
        onKeyDown={this.keyPressed}
        onKeyUp={this.keyReleased}
      >
        <Row>
          <Column color={"blue"} class="half">
            <TicketList />
          </Column>
          <Column>
            <ConversationThread
              thread={this.state.selectedTicket.clientConversation}
            ></ConversationThread>
          </Column>
          <Column>
            <ConversationThread thread={this.state.selectedTicket.proConversation}></ConversationThread>
          </Column>
          <Column class="half">
            {this.state.toggleHotkeys ? <ActionList/> : <ClientDetailsView/>}
          </Column>
        </Row>
      </div>
    );
  };
}

export default App;
