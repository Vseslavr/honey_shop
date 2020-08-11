import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase";

import CartDialog from "../CartDialog/CartDialog";
import {
  productIsAddedAction,
  productIsAddedToCartFromFilteredArrayAction,
  showDialogAction,
  addToCartAction,
  totalAmountAction,
} from "../../../redux/shop/actions";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Grid, Tooltip, Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  productImage: {
    height: "250px",
    marginBottom: "10px",
  },

  productTitle: {
    "&:hover": {
      color: theme.palette.hover,
    },
  },

  productTitleLink: {
    textDecoration: "none",
  },

  cartIconRoot: {
    marginRight: "10px",
  },

  cartIcon: {
    color: "#61422E",
    "&:hover": {
      color: theme.palette.hover,
    },
  },

  learnMoreButtonLink: {
    textDecoration: "none",
  },

  learnMoreTitle: {
    textTransform: "none",
    "&:hover": {
      color: theme.palette.hover,
    },
  },
}));

const AddToCart = (props) => {
  const shop = useSelector((store) => store.shopPage);
  const classes = useStyles();
  const dispatch = useDispatch();

  const productIsAddedToCart = (productId) => {
    dispatch(productIsAddedAction(productId));
  };

  const productIsAddedToCartFromFilteredArray = (productId) => {
    dispatch(productIsAddedToCartFromFilteredArrayAction(productId));
  };

  const showDialog = () => {
    dispatch(showDialogAction());
  };
  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  };
  const totalAmount = () => {
    dispatch(totalAmountAction());
  };

  // const addingToCart = () => {
  //   if (shop.filteredProducts.length > 0) {
  //     productIsAddedToCartFromFilteredArray(props.id);
  //     productIsAddedToCart(props.id);
  //   } else {
  //     productIsAddedToCart(props.id);
  //   }
  //   showDialog();
  //   addToCart({
  //     id: props.id,
  //     title: props.title,
  //     price: props.price,
  //     productImage: props.productImage,
  //     quantity: 1,
  //     amount: props.price,
  //   });
  //   totalAmount();
  // };

  // console.log(db.collection("products").doc());

  const useAddingToCart = () => {
    db.collection("products").doc(props.id).update({
      isAdded: true,
    });
    showDialog();
  };

  return (
    <Grid style={{ marginTop: "10px" }}>
      {props.isAdded ? (
        <Grid className={classes.cartIconRoot}>
          <Tooltip title="Added to cart" placement="top">
            <IconButton>
              <Badge badgeContent={"Added"} color="primary">
                <ShoppingCartOutlinedIcon
                  className={classes.cartIcon}
                  fontSize="large"
                />
              </Badge>
            </IconButton>
          </Tooltip>

          <CartDialog />
        </Grid>
      ) : (
        <Tooltip title="Add to cart" placement="top">
          <IconButton onClick={useAddingToCart}>
            <ShoppingCartOutlinedIcon
              className={classes.cartIcon}
              fontSize="large"
            />
          </IconButton>
        </Tooltip>
      )}
    </Grid>
  );
};

export default AddToCart;
