import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import PriceFilter from "./PriceFilter";
import CategoriesFilter from "./CategoriesFilter";

import { Box, Card, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
}));

function SideBarFilters() {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);

  let prices = shop.products.map((p) => p.price);
  let maxPrice = Math.max.apply(null, prices);

  const [value, setValue] = useState([0, maxPrice]);
  const [categories, setChecked] = useState([
    { title: "Honey", isChecked: false },
    { title: "Honeycombs", isChecked: false },
    { title: "Propolis", isChecked: false },
    { title: "Beeswax", isChecked: false },
    { title: "Royal jelly", isChecked: false },
  ]);

  let category = categories
    .filter((category) => category.isChecked)
    .map((item) => item.title);

  return (
    <Box boxShadow={0}>
      <Card className={classes.root}>
        <Grid style={{ padding: "25px" }}>
          <CategoriesFilter
            value={value}
            categories={categories}
            setChecked={setChecked}
            category={category}
          />
          <PriceFilter
            value={value}
            setValue={setValue}
            maxPrice={maxPrice}
            categories={categories}
            setChecked={setChecked}
            category={category}
          />
        </Grid>
      </Card>
    </Box>
  );
}

export default SideBarFilters;
