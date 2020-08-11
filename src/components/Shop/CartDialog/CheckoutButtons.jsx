import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { closeDialogAction } from "../../../redux/shop/actions";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkoutButtonLink: {
    textDecoration: "none",
  },

  checkoutSpacing: {
    margin: theme.spacing(2),
  },
}));

const CheckoutButtons = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(closeDialogAction());
  };

  return (
    <Grid container direction="row" justify="flex-end">
      <Grid className={classes.checkoutSpacing}>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          onClick={() => {
            closeDialog();
          }}
        >
          Continue shopping
        </Button>
      </Grid>
      <Grid className={classes.checkoutSpacing}>
        <NavLink className={classes.checkoutButtonLink} to="/checkout">
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              closeDialog();
            }}
          >
            Checkout
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default CheckoutButtons;
