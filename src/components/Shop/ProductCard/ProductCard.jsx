import React from "react";
import { NavLink } from "react-router-dom";

import ProductRating from "./ProductRating";
import AddToCart from "./AddToCart";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
  CardMedia,
  Avatar,
} from "@material-ui/core";

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

const ProductCard = (props) => {
  const classes = useStyles();

  return (
    <Box boxShadow={3}>
      <Card>
        <NavLink to="/">
          <CardMedia
            className={classes.productImage}
            image={props.productImage}
            title="honey"
          />
        </NavLink>

        <CardContent>
          <Grid container alignItems="center" direction="column">
            <NavLink to="/" className={classes.productTitleLink}>
              <Typography
                className={classes.productTitle}
                variant="h5"
                color="textPrimary"
              >
                {props.title}
              </Typography>
            </NavLink>

            <Typography variant="h6" color="textPrimary">
              {props.price} $
            </Typography>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container alignItems="center" justify="space-between">
            <Grid style={{ maxWidth: "50%" }} container direction="column">
              <ProductRating
                rating={props.rating}
                id={props.id}
                title={props.title}
              />

              <NavLink className={classes.learnMoreButtonLink} to="/product">
                <Button size="medium">
                  <Typography
                    className={classes.learnMoreTitle}
                    variant="subtitle1"
                  >
                    Learn more
                  </Typography>
                </Button>
              </NavLink>
            </Grid>

            <AddToCart
              id={props.id}
              title={props.title}
              price={props.price}
              productImage={props.productImage}
              quantity={1}
              amount={props.price}
              isAdded={props.isAdded}
            />
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
