import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { closeDialogAction } from "../../../redux/shop/actions";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  buttonLink: {
    textDecoration: "none",
  },

  shopNowButton: {
    borderRadius: "25px",
    width: "180px",
    height: "50px",
  },

  shopNowText: {
    color: "#fff",
  },
}));

const ShopNowButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(closeDialogAction());
  };

  return (
    <NavLink className={classes.buttonLink} to="/shop">
      <Button
        className={classes.shopNowButton}
        variant="contained"
        color="secondary"
        onClick={() => {
          closeDialog();
        }}
      >
        <Typography className={classes.shopNowText} variant="h6">
          Shop now
        </Typography>
      </Button>
    </NavLink>
  );
};

export default ShopNowButton;
