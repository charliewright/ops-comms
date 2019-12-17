import React from "react";
import { Column, Row } from "./components/grid";
import { clientConversation } from "./data/clientConversation";
import { proConversation } from "./data/proConversation";
import { ConversationThread } from "./components/conversationThread";
import { TicketList } from "./components/ticketList";

import "./App.css";
import { ActionList } from "./components/actionList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleHotkeys: false };
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
          <Column color={"orange"}>
            <ConversationThread
              thread={clientConversation}
            ></ConversationThread>
          </Column>
          <Column color={"green"}>
            <ConversationThread thread={proConversation}></ConversationThread>
          </Column>
          <Column color={"purple"} class="half">
            {this.state.toggleHotkeys && <ActionList />}
          </Column>
        </Row>
      </div>
    );
  };
}

export default App;
