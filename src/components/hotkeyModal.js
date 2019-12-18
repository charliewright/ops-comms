import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
  backgroundColor: "#1f1f1f",
  // textAlign: "center",
  color: "#ECECEC",
  width: "50%",
  position: "absolute",
  top: "25%",
  left: "25%",
  borderRadius: "2px"
};

const actions = [
  { label: "Clone a floor refinishing quote"},
  {
    label: "Clone a deck construction quote",
    action: () => window.open("https://quote.setter.com/#vb9Yo", "_blank")
  },
  { label: "Clone a tesla powerwall quote" },
  { label: "Clone a window replacement quote" },
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
      style={{ fontSize: "20px", paddingLeft: "40px", paddingRight: "40px", paddingTop:"10px", paddingBottom:"10px" }}
    >
      {props.label}
      {/* <span style={{fontSize: "10px", float:"right"}}>SHIFT <KeyboardArrowUpIcon/> </span> */}
    </div>
  );
};

const ConsoleHeader = () => {
  return (
    <div style={{ textAlign: "left", margin: "20px", paddingLeft:"20px", fontSize: "28px" }}>
      HMHQ console
    </div>
  );
};
