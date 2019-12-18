import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
      value={props.value}
      onChange={props.onChange}
      // defaultValue="color"
      style={{ width: "80%", padding: "10px" }}
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

const modalStyle = {
  backgroundColor: "black",
  // textAlign: "center",
  color: "#ECECEC",
  width: "50%",
  position: "absolute",
  top: "25%",
  left: "25%",
  borderRadius: "2px"
};

const actions = [
  { label: "Clone a quote" },
  {
    label: "AutoQuote >> Deck Job",
    action: () => window.open("https://quote.setter.com/#vb9Yo", "_blank")
  },
  { label: " AutoQuote >> Home Consultation" },
  { label: "Handoff >> Coordination" }
];

export class HotkeyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", actions };
  }

  updateSearch = e => {
    const searchTerm = e.target.value;
    const filteredActions = actions.filter(action =>
      action.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({ searchTerm, actions: filteredActions });
  };

  render = () => {
    return (
      <Modal open={this.props.open}>
        <div class="modal" style={modalStyle}>
          <ConsoleHeader />
          <WhiteTextField
            value={this.state.searchTerm}
            onChange={this.updateSearch}
          />
          {this.state.actions.map(action => {
            return (
              <HoverableAction
                label={action.label}
                onClick={action.action || null}
              />
            );
          })}
        </div>
      </Modal>
    );
  };
}

const HoverableAction = props => {
  return (
    <div
      onClick={props.onClick}
      class="hoverableAction"
      style={{ fontSize: "20px", padding: "10px" }}
    >
      {props.label}
    </div>
  );
};

const ConsoleHeader = () => {
  return (
    <div style={{ textAlign: "left", margin: "20px", fontSize: "28px" }}>
      HMHQ console
    </div>
  );
};
