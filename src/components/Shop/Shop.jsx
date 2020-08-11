import React from "react";
import { useSelector } from "react-redux";

import HeaderDecoration from "../Common/Decoration/HeaderDecoration";
import SideBarFilters from "./SideBarFilters/SideBarFilters";
import SortBy from "./SortBy";
import Products from "./Products";
import FilteredProducts from "./FilteredProducts";

import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  contentContainer: {
    padding: "0px 24px",
  },

  cardsBlock: {
    position: "relative",
    marginTop: "30px",
  },
}));

const Shop = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);

  return (
    <Grid>
      <HeaderDecoration />
      <Grid className={classes.contentContainer}>
        <Typography color="textPrimary" variant="h2" align="center">
          Shop
        </Typography>

        <Grid container alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="h5" color="textPrimary">
              {shop.filteredProducts.length > 0
                ? shop.filteredProducts.length
                : shop.products.length}{" "}
              products found
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <SortBy />
          </Grid>
        </Grid>

        <Grid className={classes.cardsBlock} container>
          <Grid item xs={3}>
            <SideBarFilters />
          </Grid>

          {shop.filteredProducts.length > 0 ? (
            <FilteredProducts />
          ) : (
            <Products />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Shop;
