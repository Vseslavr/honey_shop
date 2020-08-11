import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addFilterAction,
  removeFilterAction,
  addFilterFromFilteredProductsAction,
} from "../../../redux/shop/actions";

import {
  Typography,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const CategoriesFilter = ({ value, categories, setChecked, category }) => {
  const shop = useSelector((store) => store.shopPage);
  const dispatch = useDispatch();
  // const [categories, setChecked] = useState([
  //   { title: "Honey", isChecked: false },
  //   { title: "Honeycombs", isChecked: false },
  //   { title: "Propolis", isChecked: false },
  //   { title: "Beeswax", isChecked: false },
  //   { title: "Royal jelly", isChecked: false },
  // ]);

  const handleChange = (e) => {
    let checked = e.target.checked;
    // let category = e.target.name;
    setChecked(
      categories.map((c) => {
        if (c.title === e.target.name) {
          return { ...c, isChecked: checked };
        }
        return c;
      })
    );
    checked ? addFilter(category, value) : removeFilter(category);
  };

  const addFilter = (category, value) => {
    // shop.filteredProducts.length > 0
    //   ? dispatch(addFilterFromFilteredProductsAction(category))
    //   : dispatch(addFilterAction(category));
    dispatch(addFilterAction(category, value));
  };

  const removeFilter = (category) => {
    dispatch(removeFilterAction(category));
  };

  return (
    <List>
      <Typography variant="h5" color="textPrimary">
        Categories
      </Typography>
      {categories.map((category) => (
        <ListItem style={{ paddingLeft: "0" }} key={category.title}>
          <FormControlLabel
            control={
              <Checkbox
                checked={category.isChecked}
                onChange={handleChange}
                name={category.title}
              />
            }
            label={category.title}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesFilter;
