import React from "react";
import { useDispatch } from "react-redux";

import { rateProductAction } from "../../../redux/shop/actions";

import Rating from "@material-ui/lab/Rating";

const ProductRating = (props) => {
  const dispatch = useDispatch();

  const rateProduct = (value, title) => {
    dispatch(rateProductAction(value, title));
  };

  const handleChange = (e) => {
    rateProduct(e.target.value, e.target.name);
  };

  // let summ = props.rating.reduce((prevValue, currentValue) => {
  //   return prevValue + currentValue;
  // });

  // let ratingValue = summ / props.rating.length;

  return (
    <Rating
      style={{ marginBottom: "5px" }}
      name={props.title}
      value={props.rating}
      defaultValue={0}
      precision={0.5}
      onChange={handleChange}
    />
  );
};

export default ProductRating;
