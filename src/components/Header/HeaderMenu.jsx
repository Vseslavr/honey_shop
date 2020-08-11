import React from "react";
import { NavLink } from "react-router-dom";

import { Grid, MenuList, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textDecoration: "none",
  },

  buttonTitle: {
    textTransform: "none",
    "&:hover": {
      color: theme.palette.hover,
    },
  },
}));

const HeaderMenu = () => {
  const classes = useStyles();

  const menu = [
    { buttonTitle: "Home", navTo: "/home" },
    { buttonTitle: "Shop", navTo: "/shop" },
    { buttonTitle: "Our product", navTo: "/product" },
    { buttonTitle: "About us", navTo: "/about" },
    { buttonTitle: "Contact", navTo: "/contact" },
  ];

  return (
    <MenuList variant="menu" autoFocusItem={true}>
      <Grid container justify="space-evenly">
        {menu.map((item) => (
          <NavLink
            className={classes.buttonLink}
            to={item.navTo}
            // activeClassName={classes.activeMenuButton}
            key={item.buttonTitle}
          >
            <Button>
              <Typography
                className={classes.buttonTitle}
                variant="h5"
                color="textPrimary"
                style={{ textTransform: "none" }}
              >
                {item.buttonTitle}
              </Typography>
            </Button>
          </NavLink>
        ))}
      </Grid>
    </MenuList>
  );
};

export default HeaderMenu;
