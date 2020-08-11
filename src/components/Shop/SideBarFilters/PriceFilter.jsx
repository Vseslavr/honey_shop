import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Grid, Slider, Button } from "@material-ui/core";

import {
  filterByPriceAction,
  sortByFiltredProductsAction,
} from "../../../redux/shop/actions";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filterButtonText: {
    color: "#fff",
    textTransform: "none",
  },
}));

const PriceFilter = (props) => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);
  const dispatch = useDispatch();

  // let prices = shop.products.map((p) => p.price);
  // let maxPrice = Math.max.apply(null, prices);

  // const [value, setValue] = useState([0, maxPrice]);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  // let isChecked = props.categories.map((category) => {
  //   if (category.isChecked) {
  //     return category.title;
  //   }
  // });

  let isChecked = props.categories.filter((category) => category.isChecked);
  let category = isChecked.map((item) => item.title);

  const filter = () => {
    let min = props.value[0];
    let max = props.value[1];
    filterByPrice(min, max, category);
    sortBy(shop.sortByValue);
  };

  const filterByPrice = (min, max, category) => {
    dispatch(filterByPriceAction(min, max, category));
  };

  const sortBy = (value) => {
    dispatch(sortByFiltredProductsAction(value));
  };

  return (
    <Grid>
      <Typography
        style={{ marginTop: "25px" }}
        variant="h5"
        color="textPrimary"
        gutterBottom
      >
        Price filter
      </Typography>
      <Slider
        value={props.value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={props.maxPrice}
        color="secondary"
      />

      <Grid
        style={{ marginTop: "20px" }}
        container
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h6" color="textPrimary" align="right">
          Price: {`${props.value[0]} $ - ${props.value[1]} $`}
        </Typography>

        <Button variant="contained" color="secondary" onClick={filter}>
          <Typography className={classes.filterButtonText} variant="h6">
            Filter
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default PriceFilter;
