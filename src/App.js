import React from "react";
import {Column, Row} from "./components/grid"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Row>
          <Column color={"blue"} class="half" text={"list of tickets"}></Column>
          <Column color={"orange"} text={"communications with client"}></Column>
          <Column color={"green"} text={"communications with pro"}></Column>
          <Column color={"purple"} text={"pow view/toggle to hotkeys"}></Column>
        </Row>
      </div>
    </div>
  );
};

export default App;
