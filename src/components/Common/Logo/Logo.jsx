import React from "react";
import { NavLink } from "react-router-dom";

import { Grid, Typography, Avatar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import logo from "../../../assets/images/logo/logo.png";

const useStyles = makeStyles(() => ({
  logo: {
    width: "55px",
    height: "55px",
    marginRight: "10px",
  },

  logoTitle: {
    textDecoration: "none",
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="flex-start">
      <NavLink to="/home">
        <Avatar className={classes.logo} src={logo} alt="logo" />
      </NavLink>

      <NavLink to="/home" className={classes.logoTitle}>
        <Typography variant="h2" color="textPrimary">
          Honey
        </Typography>
      </NavLink>
    </Grid>
  );
};

export default Logo;
