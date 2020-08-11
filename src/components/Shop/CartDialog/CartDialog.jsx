import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import DeleteFromCart from "./DeleteFromCart";
import Quantity from "./Quantity";
import CheckoutButtons from "./CheckoutButtons";
import EmptyCart from "./EmptyCart";

import { closeDialogAction } from "../../../redux/shop/actions";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  contentRootBorder: {
    borderTop: "1px solid #e0e0e0",
  },

  productImage: {
    width: "250px",
    height: "180px",
  },

  productTitle: {
    textDecoration: "none",
  },

  checkoutSpacing: {
    margin: theme.spacing(2),
  },
}));

const CartDialog = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(closeDialogAction());
  };

  return (
    <Dialog open={shop.isShopDialogOpen} fullWidth={true} maxWidth={false}>
      <Grid container alignItems="center" justify="space-between">
        <DialogTitle>
          <Typography variant="h3" color="textPrimary">
            Cart
          </Typography>
        </DialogTitle>
        <IconButton>
          <CloseIcon
            onClick={() => {
              closeDialog();
            }}
            fontSize="large"
          />
        </IconButton>
      </Grid>

      {shop.cart.length > 0 ? (
        <DialogContent>
          {shop.cart.map((product) => (
            <Grid
              className={classes.contentRootBorder}
              key={product.id}
              container
            >
              <Grid item xs={3}>
                <NavLink to="/">
                  <Avatar
                    className={classes.productImage}
                    variant="square"
                    src={product.productImage}
                    alt="cart"
                    onClick={() => closeDialog()}
                  />
                </NavLink>
              </Grid>

              <Grid
                container
                justify="space-evenly"
                direction="column"
                item
                xs={4}
              >
                <NavLink to="/" className={classes.productTitle}>
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    onClick={() => closeDialog()}
                  >
                    {product.title}
                  </Typography>
                </NavLink>
                <Typography
                  className={classes.grayText}
                  variant="h6"
                  color="textDisabled"
                >
                  Price: {product.price} $
                </Typography>
              </Grid>

              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                direction="column"
                item
                xs={2}
              >
                <Typography variant="h5" color="textPrimary">
                  Quantity:
                </Typography>

                <Quantity id={product.id} quantity={product.quantity} />
              </Grid>
              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                direction="column"
                item
                xs={2}
              >
                <Typography variant="h5" color="textPrimary">
                  Amount:
                </Typography>
                <Typography variant="h4" color="textPrimary">
                  {product.amount} $
                </Typography>
              </Grid>

              <DeleteFromCart id={product.id} />
            </Grid>
          ))}

          <Grid
            className={classes.contentRootBorder}
            container
            justify="flex-end"
          >
            <Grid className={classes.checkoutSpacing}>
              <Typography variant="h4" color="textPrimary">
                Total amount: {shop.totalAmount} $
              </Typography>
            </Grid>

            <CheckoutButtons />
          </Grid>
        </DialogContent>
      ) : (
        <EmptyCart />
      )}
    </Dialog>
  );
};

export default CartDialog;
