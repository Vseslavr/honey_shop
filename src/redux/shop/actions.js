import {
  PRODUCT_IS_ADDED_TO_CART,
  PRODUCT_IS_ADDED_TO_CART_FROM_FILTERED_ARRAY,
  PRODUCT_IS_REMOVED_FROM_CART,
  PRODUCT_IS_REMOVED_FROM_CART_FOR_FILTERED_ARRAY,
  SHOW_DIALOG,
  CLOSE_DIALOG,
  REDUCE_QUANTITY,
  INCREASE_QUANTITY,
  ADD_TO_CART,
  DELETE_FROM_CART,
  REDUCE_PRODUCT_AMOUNT,
  INCREASE_PRODUCT_AMOUNT,
  TOTAL_AMOUNT,
  SET_SORT_BY_VALUE,
  SORT_BY,
  SORT_BY_FILTRED_PRODUCTS,
  RATE_PRODUCT,
  ADD_FILTER_BY_CATEGORIES,
  REMOVE_FILTER_BY_CATEGORIES,
  FILTER_BY_PRICE,
  ADD_FILTER_BY_CATEGORIES_FROM_FILTERED_PRODUCTS,
  TOGGLE_IS_FETCHING,
} from "./actionTypes";

export const productIsAddedAction = (productId) => ({
  type: PRODUCT_IS_ADDED_TO_CART,
  productId,
});

export const productIsAddedToCartFromFilteredArrayAction = (productId) => ({
  type: PRODUCT_IS_ADDED_TO_CART_FROM_FILTERED_ARRAY,
  productId,
});

export const productIsRemovedFromCartAction = (productId) => ({
  type: PRODUCT_IS_REMOVED_FROM_CART,
  productId,
});

export const productIsRemovedFromCartForFilteredArrayAction = (productId) => ({
  type: PRODUCT_IS_REMOVED_FROM_CART_FOR_FILTERED_ARRAY,
  productId,
});

export const showDialogAction = () => ({
  type: SHOW_DIALOG,
});

export const closeDialogAction = () => ({
  type: CLOSE_DIALOG,
});

export const reduceProductQuantityAction = (productId) => ({
  type: REDUCE_QUANTITY,
  productId,
});

export const increaseProductQuantityAction = (productId) => ({
  type: INCREASE_QUANTITY,
  productId,
});

export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const deleteFromCartAction = (productId) => ({
  type: DELETE_FROM_CART,
  productId,
});

export const reduceProductAmountAction = (productId) => ({
  type: REDUCE_PRODUCT_AMOUNT,
  productId,
});

export const increaseProductAmountAction = (productId) => ({
  type: INCREASE_PRODUCT_AMOUNT,
  productId,
});

export const totalAmountAction = () => ({
  type: TOTAL_AMOUNT,
});

export const setSortByValueAction = (value) => ({
  type: SET_SORT_BY_VALUE,
  value,
});

export const sortByAction = (value) => ({
  type: SORT_BY,
  value,
});

export const sortByFiltredProductsAction = (value) => ({
  type: SORT_BY_FILTRED_PRODUCTS,
  value,
});

export const rateProductAction = (value, title) => ({
  type: RATE_PRODUCT,
  value,
  title,
});

export const addFilterAction = (category, value) => ({
  type: ADD_FILTER_BY_CATEGORIES,
  category,
  value,
});

// export const addFilterFromFilteredProductsAction = (category) => ({
//   type: ADD_FILTER_BY_CATEGORIES_FROM_FILTERED_PRODUCTS,
//   category,
// });

export const removeFilterAction = (category) => ({
  type: REMOVE_FILTER_BY_CATEGORIES,
  category,
});

export const filterByPriceAction = (min, max, category) => ({
  type: FILTER_BY_PRICE,
  min,
  max,
  category,
});

export const toggleIsFetchingAction = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
