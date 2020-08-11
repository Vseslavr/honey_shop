import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  deleteFromCartAction,
  productIsRemovedFromCartAction,
  productIsRemovedFromCartForFilteredArrayAction,
  totalAmountAction,
} from "../../../redux/shop/actions";

import { IconButton, Grid } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

const DeleteFromCart = (props) => {
  const shop = useSelector((store) => store.shopPage);
  const dispatch = useDispatch();

  const deleteFromCart = (productId) => {
    dispatch(deleteFromCartAction(productId));
  };
  const productIsRemovedFromCart = (productId) => {
    dispatch(productIsRemovedFromCartAction(productId));
  };
  const productIsRemovedFromCartForFilteredArray = (productId) => {
    dispatch(productIsRemovedFromCartForFilteredArrayAction(productId));
  };
  const totalAmount = () => {
    dispatch(totalAmountAction());
  };

  const remove = () => {
    shop.filteredProducts.length > 0
      ? productIsRemovedFromCartForFilteredArray(props.id)
      : productIsRemovedFromCart(props.id);
    deleteFromCart(props.id);
    totalAmount();
  };

  return (
    <Grid style={{ marginTop: "30px" }} item xs={1}>
      <Grid container justify="flex-end">
        <IconButton aria-label="delete" onClick={remove}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default DeleteFromCart;
