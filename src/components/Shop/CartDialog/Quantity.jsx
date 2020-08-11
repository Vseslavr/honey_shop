import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseProductQuantityAction,
  reduceProductQuantityAction,
  reduceProductAmountAction,
  increaseProductAmountAction,
  totalAmountAction,
} from "../../../redux/shop/actions";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Quantity = (props) => {
  const dispatch = useDispatch();

  const reduceProductQuantity = (productId) => {
    dispatch(reduceProductQuantityAction(productId));
  };
  const increaseProductQuantity = (productId) => {
    dispatch(increaseProductQuantityAction(productId));
  };
  const reduceProductAmount = (productId) => {
    dispatch(reduceProductAmountAction(productId));
  };
  const increaseProductAmount = (productId) => {
    dispatch(increaseProductAmountAction(productId));
  };
  const totalAmount = () => {
    dispatch(totalAmountAction());
  };

  return (
    <Grid container justify="center">
      <Button
        disabled={props.quantity > 1 ? false : true}
        aria-label="reduce"
        onClick={() => {
          reduceProductQuantity(props.id);
          reduceProductAmount(props.id);
          totalAmount();
        }}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <Grid styles={{ minWidth: "20px", textAlign: "center" }}>
        <Typography variant="h5">{props.quantity}</Typography>
      </Grid>
      <Button
        aria-label="increase"
        onClick={() => {
          increaseProductQuantity(props.id);
          increaseProductAmount(props.id);
          totalAmount();
        }}
      >
        <AddIcon fontSize="small" />
      </Button>
    </Grid>
  );
};

export default Quantity;
