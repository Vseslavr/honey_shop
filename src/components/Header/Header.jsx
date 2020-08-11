import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../Common/Logo/Logo";
import CartDialog from "../Shop/CartDialog/CartDialog";
import HeaderMenu from "./HeaderMenu";

import { showDialogAction } from "../../redux/shop/actions";

import { AppBar, Toolbar, Grid, IconButton, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },

  logo: {
    width: "55px",
    height: "55px",
    marginRight: "10px",
  },

  logoTitle: {
    textDecoration: "none",
  },

  cartIcon: {
    color: "#61422E",
    "&:hover": {
      color: theme.palette.hover,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);
  const dispatch = useDispatch();

  const showDialog = () => {
    dispatch(showDialogAction());
  };

  const inCartCount = shop.cart.length;

  return (
    <AppBar className={classes.root} color="transparent" position="absolute">
      <Toolbar>
        <Grid item xs={3}>
          <Logo />
        </Grid>

        <Grid item xs={8}>
          <HeaderMenu />
        </Grid>

        <Grid container justify="flex-end" item xs={1}>
          {shop.isShopDialogOpen ? <CartDialog /> : null}

          <IconButton
            onClick={() => {
              showDialog();
            }}
          >
            <Badge badgeContent={inCartCount} color="error" overlap="circle">
              <ShoppingCartOutlinedIcon
                className={classes.cartIcon}
                fontSize="large"
              />
            </Badge>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
