// import honeyJar from "../assets/images/product/honey_jar.png";
// import honeycombs from "../assets/images/product/honeycombs.png";
// import propolis from "../assets/images/product/propolis.png";
// import royal_jelly from "../assets/images/product/royal_jelly.png";
// import beeswax from "../assets/images/product/beeswax.png";
// import pollen from "../assets/images/product/pollen.png";

// const PRODUCT_IS_ADDED_TO_CART = "PRODUCT_IS_ADDED_TO_CART";
// const PRODUCT_IS_ADDED_TO_CART_FROM_FILTERED_ARRAY =
//   "PRODUCT_IS_ADDED_TO_CART_FROM_FILTERED_ARRAY";
// const PRODUCT_IS_REMOVED_FROM_CART = "PRODUCT_IS_REMOVED_FROM_CART";
// const PRODUCT_IS_REMOVED_FROM_CART_FOR_FILTERED_ARRAY =
//   "PRODUCT_IS_REMOVED_FROM_CART_FOR_FILTERED_ARRAY";
// const SHOW_DIALOG = "SHOW_DIALOG";
// const CLOSE_DIALOG = "CLOSE_DIALOG";
// const REDUCE_QUANTITY = "REDUCE_QUANTITY";
// const INCREASE_QUANTITY = "INCREASE_QUANTITY";
// const ADD_TO_CART = "ADD_TO_CART";
// const DELETE_FROM_CART = "DELETE_FROM_CART";
// const REDUCE_PRODUCT_AMOUNT = "REDUCE_PRODUCT_AMOUNT";
// const INCREASE_PRODUCT_AMOUNT = "INCREASE_PRODUCT_AMOUNT";
// const TOTAL_AMOUNT = "TOTAL_AMOUNT";
// const SET_SORT_BY_VALUE = "SET_SORT_BY_VALUE";
// const SORT_BY = "SORT_BY";
// const SORT_BY_FILTRED_PRODUCTS = "SORT_BY_FILTRED_PRODUCTS";
// const RATE_PRODUCT = "RATE_PRODUCT";
// const ADD_FILTER_BY_CATEGORIES = "ADD_FILTER_BY_CATEGORIES";
// const ADD_FILTER_BY_CATEGORIES_FROM_FILTERED_PRODUCTS =
//   "ADD_FILTER_BY_CATEGORIES_FROM_FILTERED_PRODUCTS";
// const REMOVE_FILTER_BY_CATEGORIES = "REMOVE_FILTER_BY_CATEGORIES";
// const FILTER_BY_PRICE = "FILTER_BY_PRICE";

// let initialState = {
//   products: [
//     {
//       id: 1,
//       title: "Honey",
//       price: 15,
//       productImage: honeyJar,
//       rating: [2],
//       category: "Honey",
//       isAdded: false,
//     },
//     {
//       id: 2,
//       title: "Honeycombs",
//       price: 43,
//       productImage: honeycombs,
//       rating: [1],
//       category: "Honeycombs",
//       isAdded: false,
//     },
//     {
//       id: 3,
//       title: "Propolis",
//       price: 27,
//       productImage: propolis,
//       rating: [3.5],
//       category: "Propolis",
//       isAdded: false,
//     },
//     {
//       id: 4,
//       title: "Beeswax",
//       price: 4,
//       productImage: beeswax,
//       rating: [5],
//       category: "Beeswax",
//       isAdded: false,
//     },
//     {
//       id: 5,
//       title: "Royal jelly",
//       price: 107,
//       productImage: royal_jelly,
//       rating: [2],
//       category: "Royal jelly",
//       isAdded: false,
//     },
//     {
//       id: 6,
//       title: "Pollen",
//       price: 62,
//       productImage: pollen,
//       rating: [4.5],
//       category: "Pollen",
//       isAdded: false,
//     },
//   ],
//   sortByValue: "default",
//   cart: [],
//   filteredProducts: [],
//   isShopDialogOpen: false,
//   totalAmount: 0,
// };

// // Reducer
// const shopReducer = (state = initialState, action) => {
//   const sortBy = (a, b) =>
//     (action.value === "default" && a.id > b.id) ||
//     (action.value === "priceLowToHight" && a.price > b.price) ||
//     (action.value === "priceHightToLow" && a.price < b.price) ||
//     (action.value === "nameAZ" && a.title > b.title) ||
//     (action.value === "nameZA" && a.title < b.title) ||
//     (action.value === "rating" && a.rating < b.rating);

//   switch (action.type) {
//     case PRODUCT_IS_ADDED_TO_CART:
//       return {
//         ...state,
//         products: state.products.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, isAdded: true };
//           }
//           return product;
//         }),
//       };

//     case PRODUCT_IS_ADDED_TO_CART_FROM_FILTERED_ARRAY:
//       return {
//         ...state,
//         filteredProducts: state.filteredProducts.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, isAdded: true };
//           }
//           return product;
//         }),
//       };

//     case PRODUCT_IS_REMOVED_FROM_CART:
//       return {
//         ...state,
//         products: state.products.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, isAdded: false };
//           }
//           return product;
//         }),
//       };

//     case PRODUCT_IS_REMOVED_FROM_CART_FOR_FILTERED_ARRAY:
//       return {
//         ...state,
//         filteredProducts: state.filteredProducts.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, isAdded: false };
//           }
//           return product;
//         }),
//       };

//     case SHOW_DIALOG:
//       return {
//         ...state,
//         isShopDialogOpen: true,
//       };

//     case CLOSE_DIALOG:
//       return {
//         ...state,
//         isShopDialogOpen: false,
//       };

//     case REDUCE_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, quantity: product.quantity - 1 };
//           }
//           return product;
//         }),
//       };

//     case INCREASE_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, quantity: product.quantity + 1 };
//           }
//           return product;
//         }),
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, action.product],
//       };

//     case DELETE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((product) => product.id !== action.productId),
//       };

//     case REDUCE_PRODUCT_AMOUNT:
//       return {
//         ...state,
//         cart: state.cart.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, amount: product.amount - product.price };
//           }
//           return product;
//         }),
//       };

//     case INCREASE_PRODUCT_AMOUNT:
//       return {
//         ...state,
//         cart: state.cart.map((product) => {
//           if (product.id === action.productId) {
//             return { ...product, amount: product.amount + product.price };
//           }
//           return product;
//         }),
//       };

//     case TOTAL_AMOUNT:
//       let amounts = state.cart.map((product) => product.amount);
//       return {
//         ...state,
//         totalAmount:
//           amounts.length !== 0 &&
//           amounts.reduce((prevValue, currentValue) => {
//             return prevValue + currentValue;
//           }),
//       };

//     case SET_SORT_BY_VALUE:
//       return {
//         ...state,
//         sortByValue: action.value,
//       };

//     case SORT_BY:
//       return {
//         ...state,
//         products: state.products.sort(sortBy),
//       };

//     case SORT_BY_FILTRED_PRODUCTS:
//       return {
//         ...state,
//         filteredProducts: state.filteredProducts.sort(sortBy),
//       };

//     case RATE_PRODUCT:
//       return {
//         ...state,
//         products: state.products.map((product) => {
//           if (product.title === action.title) {
//             return { ...product, rating: action.value };
//           }
//           return product;
//         }),
//       };

//     case ADD_FILTER_BY_CATEGORIES:
//       let product = state.products.find(
//         (product) =>
//           product.category === action.category &&
//           product.price >= action.value[0] &&
//           product.price <= action.value[1]
//       );

//       return {
//         ...state,
//         filteredProducts: [...state.filteredProducts, product],
//       };

//     // case ADD_FILTER_BY_CATEGORIES_FROM_FILTERED_PRODUCTS:
//     //   let filteredProduct = state.filteredProducts.find(
//     //     (product) => product.category === action.category
//     //   );

//     //   return {
//     //     ...state,
//     //     filteredProducts: [...state.filteredProducts, filteredProduct],
//     //   };

//     case REMOVE_FILTER_BY_CATEGORIES:
//       return {
//         ...state,
//         filteredProducts: state.filteredProducts.filter(
//           (product) => product.category !== action.category
//         ),
//       };

//     case FILTER_BY_PRICE:
//       return {
//         ...state,
//         filteredProducts: state.products.filter(
//           (product) =>
//             product.price >= action.min && product.price <= action.max
//         ),
//       };

//     default:
//       return state;
//   }
// };

// // Actions
// export const productIsAddedAction = (productId) => ({
//   type: PRODUCT_IS_ADDED_TO_CART,
//   productId,
// });

// export const productIsAddedToCartFromFilteredArrayAction = (productId) => ({
//   type: PRODUCT_IS_ADDED_TO_CART_FROM_FILTERED_ARRAY,
//   productId,
// });

// export const productIsRemovedFromCartAction = (productId) => ({
//   type: PRODUCT_IS_REMOVED_FROM_CART,
//   productId,
// });

// export const productIsRemovedFromCartForFilteredArrayAction = (productId) => ({
//   type: PRODUCT_IS_REMOVED_FROM_CART_FOR_FILTERED_ARRAY,
//   productId,
// });

// export const showDialogAction = () => ({
//   type: SHOW_DIALOG,
// });

// export const closeDialogAction = () => ({
//   type: CLOSE_DIALOG,
// });

// export const reduceProductQuantityAction = (productId) => ({
//   type: REDUCE_QUANTITY,
//   productId,
// });

// export const increaseProductQuantityAction = (productId) => ({
//   type: INCREASE_QUANTITY,
//   productId,
// });

// export const addToCartAction = (product) => ({
//   type: ADD_TO_CART,
//   product,
// });

// export const deleteFromCartAction = (productId) => ({
//   type: DELETE_FROM_CART,
//   productId,
// });

// export const reduceProductAmountAction = (productId) => ({
//   type: REDUCE_PRODUCT_AMOUNT,
//   productId,
// });

// export const increaseProductAmountAction = (productId) => ({
//   type: INCREASE_PRODUCT_AMOUNT,
//   productId,
// });

// export const totalAmountAction = () => ({
//   type: TOTAL_AMOUNT,
// });

// export const setSortByValueAction = (value) => ({
//   type: SET_SORT_BY_VALUE,
//   value,
// });

// export const sortByAction = (value) => ({
//   type: SORT_BY,
//   value,
// });

// export const sortByFiltredProductsAction = (value) => ({
//   type: SORT_BY_FILTRED_PRODUCTS,
//   value,
// });

// export const rateProductAction = (value, title) => ({
//   type: RATE_PRODUCT,
//   value,
//   title,
// });

// export const addFilterAction = (category, value) => ({
//   type: ADD_FILTER_BY_CATEGORIES,
//   category,
//   value,
// });

// // export const addFilterFromFilteredProductsAction = (category) => ({
// //   type: ADD_FILTER_BY_CATEGORIES_FROM_FILTERED_PRODUCTS,
// //   category,
// // });

// export const removeFilterAction = (category) => ({
//   type: REMOVE_FILTER_BY_CATEGORIES,
//   category,
// });

// export const filterByPriceAction = (min, max, category) => ({
//   type: FILTER_BY_PRICE,
//   min,
//   max,
//   category,
// });

// export default shopReducer;
