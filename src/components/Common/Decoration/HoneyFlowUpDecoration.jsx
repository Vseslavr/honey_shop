import React from "react";

import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import honeyFlowUp from "../../../assets/images/decor/decor_18.png";

const useStyles = makeStyles(() => ({
  honeyFlowUp: {
    width: "775px",
    height: "200px",
    position: "absolute",
    bottom: "0px",
    left: "0",
  },
}));

const HoneyFlowUpDecoration = () => {
  const classes = useStyles();
  return (
    <Avatar
      className={classes.honeyFlowUp}
      src={honeyFlowUp}
      variant="square"
    />
  );
};

export default HoneyFlowUpDecoration;
