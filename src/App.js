import React from "react";
import { Column, Row } from "./components/grid";
import { clientConversation } from "./data/clientConversation";
import { proConversation } from "./data/proConversation";
import { ConversationThread } from "./components/conversationThread";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Row>
          <Column color={"blue"} class="half" text={"list of tickets"}></Column>
          <Column color={"orange"} text={"communications with client"}>
          <ConversationThread thread={clientConversation}></ConversationThread>
          </Column>
          <Column color={"green"}>
          <ConversationThread thread={proConversation}></ConversationThread>
          </Column>
          <Column color={"purple"} class="half" text={"sow view/toggle to hotkeys"}></Column>
        </Row>
      </div>
    </div>
  );
};

export default App;
