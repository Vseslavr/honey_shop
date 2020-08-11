import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setSortByValueAction,
  sortByAction,
  sortByFiltredProductsAction,
} from "../../redux/shop/actions";

import { Grid, Typography, TextField, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },

  sortBySelectField: {
    minWidth: "12rem",
  },

  sortByTitle: {
    marginRight: "15px",
  },
}));

const sortByList = [
  { value: "default", label: "default" },
  { value: "priceLowToHight", label: "price (low to hight)" },
  { value: "priceHightToLow", label: "price (hight to low)" },
  { value: "rating", label: "rating" },
  { value: "nameAZ", label: "name (A-Z)" },
  { value: "nameZA", label: "name (Z-A)" },
  // { value: "popularity", label: "popularity" },
];

const SortBy = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);
  const dispatch = useDispatch();

  const setSortValue = (value) => {
    dispatch(setSortByValueAction(value));
  };

  const sortBy = (value) => {
    dispatch(sortByAction(value));
  };

  const sortByFiltredProducts = (value) => {
    dispatch(sortByFiltredProductsAction(value));
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setSortValue(value);
    shop.filteredProducts.length > 0
      ? sortByFiltredProducts(value)
      : sortBy(value);
  };

  return (
    <Grid className={classes.root} container justify="flex-end">
      <Typography
        className={classes.sortByTitle}
        variant="h5"
        color="textPrimary"
      >
        Sort by:
      </Typography>

      <TextField
        className={classes.sortBySelectField}
        id="sort-by-select"
        name="sort-by-select"
        select
        value={shop.sortByValue}
        onChange={handleChange}
        size="small"
        color="secondary"
        variant="outlined"
      >
        {sortByList.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};

export default SortBy;
