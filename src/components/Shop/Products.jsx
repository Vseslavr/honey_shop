import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../firebase";
import firebase from "firebase";
import { getProducts } from "../../api";

import ProductCard from "../Shop/ProductCard/ProductCard";
import { toggleIsFetchingAction } from "../../redux/shop/actions";

import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  productCardRoot: {
    padding: "0px 0px 40px 20px",
  },
}));

// function useProducts() {
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();

//   const toggleIsFetching = (isFetching) => {
//     dispatch(toggleIsFetchingAction(isFetching));
//   };

//   useEffect(() => {
//     // const unsubscribe = firebase;
//     toggleIsFetching(true);
//     db.collection("products").onSnapshot((snapshot) => {
//       const newProducts = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       setProducts(newProducts);
//       toggleIsFetching(false);
//     });

//     // return () => unsubscribe();
//   }, []);

//   return products;
// }

// function useProducts() {
//   const [products, setProducts] = useState([]);
//   const [progress, setProgress] = useState(true);

//   useEffect(() => {
//     const unsubscribe = firebase;
//     setProgress(true);
//     db.collection("products").onSnapshot((snapshot) => {
//       const newProducts = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       setProducts(newProducts);
//       setProgress(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { products, progress };
// }

const Products = () => {
  const classes = useStyles();
  const shop = useSelector((store) => store.shopPage);
  // const products = useProducts();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(true);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProgress(true);
  //   getProducts("products").then(setProducts);
  //   setProgress(false);
  // }, [products]);

  useEffect(() => {
    setProgress(true);
    db.collection("products").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProgress(false);
      setProducts(products);
    });
  }, []);

  // if (progress) return <CircularProgress />;

  return (
    <Grid container item xs={9}>
      {/* {shop.isFetching ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : null} */}
      {progress ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : null}

      {products.map((product) => (
        <Grid className={classes.productCardRoot} item xs={4} key={product.id}>
          <ProductCard
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

export default Products;
