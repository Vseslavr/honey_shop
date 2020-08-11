import React from "react";
import { useSelector } from "react-redux";

import {
  Grid,
  Button,
  IconButton,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Checkout = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);
  return <div>Checkout</div>;
};

export default Checkout;
