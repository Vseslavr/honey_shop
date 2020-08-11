import React from "react";
import { useSelector } from "react-redux";

import ProductCart from "../Shop/ProductCard/ProductCard";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  productCardRoot: {
    padding: "0px 0px 40px 20px",
  },
}));

const FilteredProducts = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);

  return (
    <Grid container item xs={9}>
      {shop.filteredProducts.map((product) => (
        <Grid className={classes.productCardRoot} item xs={4} key={product.id}>
          <ProductCart
            title={product.title}
            price={product.price}
            productImage={product.productImage}
            id={product.id}
            isAdded={product.isAdded}
            rating={product.rating}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FilteredProducts;
