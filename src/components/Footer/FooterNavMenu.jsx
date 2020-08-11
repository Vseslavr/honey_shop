import React from "react";
import { NavLink } from "react-router-dom";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerNavButton: {
    textDecoration: "none",
    display: "table",
  },

  footerNavButtonTitle: {
    "&:hover": {
      textDecoration: "underline",
      color: "#4F301C",
    },
  },
}));

const FooterNavMenu = () => {
  const classes = useStyles();
  return (
    <Grid item xs={3} container justify="center">
      <Grid>
        <Typography variant="h5" color="textPrimary" gutterBottom={true}>
          Information
        </Typography>
        {[
          { buttonTitle: "Home", navTo: "/home" },
          { buttonTitle: "Shop", navTo: "/shop" },
          { buttonTitle: "Our product", navTo: "/product" },
          { buttonTitle: "About us", navTo: "/about" },
          { buttonTitle: "Contact", navTo: "/contact" },
        ].map((item) => (
          <NavLink
            className={classes.footerNavButton}
            to={item.navTo}
            key={item.buttonTitle}
          >
            <Typography
              className={classes.footerNavButtonTitle}
              variant="h6"
              color="textPrimary"
              gutterBottom={true}
            >
              {item.buttonTitle}
            </Typography>
          </NavLink>
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterNavMenu;
