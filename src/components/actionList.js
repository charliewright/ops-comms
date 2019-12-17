import React from "react";
import {Action} from "./action"
import { hotkeyActions } from "../data/hotkeyActions";

export const ActionList = props => {
  return hotkeyActions.map(action => <Action {...action} />);
};
